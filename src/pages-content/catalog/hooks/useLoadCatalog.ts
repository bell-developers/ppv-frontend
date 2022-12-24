import { useQuery } from 'react-query';
import loadCatalog from '../usecases/loadCatalog';

export const useLoadCatalog = () => useQuery(['products'], loadCatalog);
