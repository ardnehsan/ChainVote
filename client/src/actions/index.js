import axios from 'axios';
import { FETCH_USER } from './types';

const fetchUser = () => {
    axios.get('/api/current_user'); // Make it work with the app route in the server side
};