import axios from '../libs/axios';

export const loginRequest = async (auth: object) => {
    return axios.post('/auth/login', {
        auth
    })
};

export const profileRequest = async () => {
    return await axios.get('/auth');
};