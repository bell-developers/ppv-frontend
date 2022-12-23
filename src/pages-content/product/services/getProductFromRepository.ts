import myAxios from 'services/myAxios';

const getProductFromRepository = async (id: string) =>
    (await myAxios.get('/product/' + id)).data;

export default getProductFromRepository;
