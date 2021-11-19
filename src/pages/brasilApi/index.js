import { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';
import { brasilApi } from '../../services/api';




export default class BrasilApi extends Component {
  constructor() {
    super();
    this.state = {
      cepNumber: []
    }
  }

  

  handleSubmit = async ({ cepNumber }) => {
    console.log()
    if (cepNumber !== '') {
      
        const response = await brasilApi.get(`/${cepNumber}`);
        this.setState({ cepNumber: JSON.stringify (response.data) });
        console.log(response.data)
      
    }
  }

  render() {
    return (
      <>
        <Link to= "/">ViaCep</Link>
       
          <div className="col-md-4 col-sm-6 my-3 container text-center">
            <h2>Procure um CEP</h2>
            <Formik initialValues={{ cepNumber: '' }} onSubmit={this.handleSubmit}>
              <Form>
                <Field placeholder="Insira o cep" required type="text" name="cepNumber" id="cepNumber" className="form-control" />
                <button type="submit" className="btn btn-primary my-4">Pesquisar</button>
              </Form>
            </Formik>
          
          </div>
          {this.state.cepNumber}
           

          
      </>
    );
  }
}