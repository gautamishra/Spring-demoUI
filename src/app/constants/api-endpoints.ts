import { environment } from 'src/environments/environment';

const baseUrl  = environment.baseUrl;
export const ApiEndPoints =  {
    registerUser: `${baseUrl}/user/register`,
    login: `http://localhost:8080/login`
};