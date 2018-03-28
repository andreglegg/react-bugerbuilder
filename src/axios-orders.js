import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-31868.firebaseio.com/'
});

export default instance;