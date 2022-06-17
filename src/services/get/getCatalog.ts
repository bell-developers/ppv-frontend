import axios from 'axios';

export const getCatalog = async () =>
    (await axios.get('http://127.0.0.1:5000/catalog')).data;
