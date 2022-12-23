import myAxios from 'services/myAxios';

const getCatalogFromRepository = async () => (await myAxios.get('/catalog')).data;

export default getCatalogFromRepository;
