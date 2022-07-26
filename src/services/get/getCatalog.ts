import axios from 'axios';

const isDevelopmentEnv = process.env.NODE_ENV === 'development';

const ApiURL = isDevelopmentEnv
    ? 'http://127.0.0.1:5000/catalog/20'
    : 'http://127.0.0.1:5000/catalog';

export const getCatalog = async () => (await axios.get(ApiURL)).data;
