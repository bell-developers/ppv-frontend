import axios from 'axios';

// const isDevelopmentEnv = process.env.NODE_ENV === 'development';

const ApiURL = process.env.NEXT_PUBLIC_API_URL + '/catalog';

export const getCatalog = async () => {
    return (await axios.get(ApiURL)).data;
};
