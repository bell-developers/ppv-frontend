import axios from 'axios';

export const getCatalog = async () => await axios.get('http://localhost:4000/catalog');
