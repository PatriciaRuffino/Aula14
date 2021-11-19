import { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';
import { viaCepApi } from '../../services/api';




export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      cepNumber: []
    }
  }

  

  handleSubmit = async ({ cepNumber }) => {
    console.log()
    if (cepNumber !== '') {
      
        const response = await viaCepApi.get(`/${cepNumber}/json`);
        this.setState({ cepNumber: JSON.stringify (response.data) });
        console.log(response.data)
      
    }
  }

  render() {
    return (
      <>
      <Link to="/brasilApi"> brasilApi </Link>
       
          <div className="col-md-4 col-sm-6 my-3 container-fluid text-center">
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
         
           