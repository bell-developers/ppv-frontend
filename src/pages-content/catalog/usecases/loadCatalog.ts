import getCatalogFromRepository from '../services/getCatalogFromRepository';
import { adaptCatalog } from 'pages-content/catalog/adapters/adaptCatalog';

const loadCatalog = async () => adaptCatalog(await getCatalogFromRepository());

export default loadCatalog;
