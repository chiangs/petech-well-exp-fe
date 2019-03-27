import axios from 'axios';
import ApiConfig from '../_configs/ApiConfig';

const instance = axios.create(ApiConfig);

export default instance;
