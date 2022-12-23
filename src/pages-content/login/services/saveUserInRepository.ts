import { User } from 'models/User.model';
import myAxios from '../../../services/myAxios';

const saveUserInRepository = async (user: User): Promise<void> => {
    return await myAxios.post('/login', user);
};

export default saveUserInRepository;
