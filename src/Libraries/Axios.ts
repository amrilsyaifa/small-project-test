import axios from 'axios';
import { setupInterceptorsTo } from './Axios.Interceptor';

const instance = setupInterceptorsTo(axios);

export default instance;
