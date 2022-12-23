import { User } from 'models/User.model';
import { Adapter } from '../../../adapters/Adapter.type';

const adaptUserLogin: Adapter<User, User> = (user: User) => user;

export default adaptUserLogin;
