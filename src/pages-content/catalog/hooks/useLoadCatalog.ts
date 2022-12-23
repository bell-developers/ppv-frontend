import { adaptCatalog } from 'pages-content/catalog/adapters/adaptCatalog';
import { useQuery } from 'react-query';
import getCatalogFromRepository from '../services/getCatalogFromRepository';

export const useLoadCatalog = () =>
    useQuery('products', async () => adaptCatalog(await getCatalogFromRepository()));
