import { useMutation } from 'react-query';
import { User } from 'models/User.model';
import saveUserInRepository from 'pages-content/login/services/saveUserInRepository';

const useLogin = () =>
    useMutation(async (user: User) => await saveUserInRepository(user));

export default useLogin;
