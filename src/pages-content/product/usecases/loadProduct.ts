import adaptProduct from '../adapters/adaptProduct';
import getProductFromRepository from '../services/getProductFromRepository';

const loadProduct = async (id: string) =>
    adaptProduct(await getProductFromRepository(id));

export default loadProduct;
