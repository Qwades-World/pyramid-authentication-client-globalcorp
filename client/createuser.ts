import { UserCredentials } from '../model/userCredentials';

export interface IUserService {
    getUserCredentials(): UserCredentials;
}

const userService: IUserService = {
    getUserCredentials(): UserCredentials {
        return {
            username: 'XXXX',
            password: 'XXXX'
        };
    }
};