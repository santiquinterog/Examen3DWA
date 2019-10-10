import axios from 'axios';

export function getData() {
    return axios.get('https://dwaapi.juvasquez88.now.sh/atp');
}