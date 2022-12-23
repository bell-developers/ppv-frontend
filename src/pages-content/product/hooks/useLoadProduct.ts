import adaptProduct from 'pages-content/product/adapters/adaptProduct';
import getProductFromRepository from '../services/getProductFromRepository';
import { useQuery } from 'react-query';

const useLoadProduct = (id: string) =>
    useQuery(['products', String(id)], async () =>
        adaptProduct(await getProductFromRepository(id))
    );

export default useLoadProduct;
