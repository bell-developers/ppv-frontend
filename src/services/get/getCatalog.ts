import axios from 'axios';

// const isDevelopmentEnv = process.env.NODE_ENV === 'development';

const ApiURL = process.env.NEXT_PUBLIC_API_URL + '/catalog/20';

export const getCatalog = async () => {
    console.log(process.env.NEXT_PUBLIC_API_URL);
    return (await axios.get(ApiURL)).data;
};
