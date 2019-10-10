import axios from 'axios';

axios.get('https://dwaapi.juvasquez88.now.sh/atp')
  .then((response) => {
    console.log(response);
    })
  .catch((error) => {
    console.log(error);
    });