import axios from 'axios';

 export const viaCepApi = axios.create({
  baseURL: 'https://viacep.com.br/ws'
});

export const brasilApi = axios.create({
  baseURL: 'https://brasilapi.com.br/api/cep/v1/'
})
