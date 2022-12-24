import { useMutation } from 'react-query';
import loginUser from '../usecases/loginUser';

const useLogin = () => useMutation(loginUser);

export default useLogin;
