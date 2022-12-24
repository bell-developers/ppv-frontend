import { User } from 'models/User.model';
import saveUserInRepository from '../services/saveUserInRepository';

const loginUser = async (user: User) => await saveUserInRepository(user);

export default loginUser;
