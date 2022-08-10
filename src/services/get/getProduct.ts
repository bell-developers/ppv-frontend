import axios from 'axios';

const baseUrl = 'http://127.0.0.1:5000/product/';

export const getProduct = async (id: string) => (await axios.get(baseUrl + id)).data;
