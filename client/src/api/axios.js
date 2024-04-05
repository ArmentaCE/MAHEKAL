import axios from 'axios'

console.log(process.env.REACT_APP_BACKEND_URL)
//*Es para decirle a axios el dominio base al cual podra consultar 
const instance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    //*Es para establecer las cookies aqui
    withCredentials: true
});

export default instance;