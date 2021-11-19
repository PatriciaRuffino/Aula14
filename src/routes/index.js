import { BrowserRouter, Route, Routes} from 'react-router-dom'
import ViaCep from '../pages/viaCep';
import BrasilApi from '../pages/brasilApi';

const RouteList = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<ViaCep />} />
      <Route path="/brasilApi" element={<BrasilApi />} />
    </Routes>
  </BrowserRouter>
);

export default RouteList;