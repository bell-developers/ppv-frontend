import { useQuery } from 'react-query';
import loadProduct from '../usecases/loadProduct';

const useLoadProduct = (id: string) =>
    useQuery(['products', id], async () => await loadProduct(id));

export default useLoadProduct;
