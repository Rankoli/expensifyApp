import axios from 'axios';

export default axios.create({
  baseURL: `http://localhost:52558/WS.asmx/`
});