import axios from 'axios';

const baseUrl = process.env.NEXT_PUBLIC_API_URL + '/product/';

export const getProduct = async (id: string) => (await axios.get(baseUrl + id)).data;
