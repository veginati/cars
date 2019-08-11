import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID a1e17432a0773d9d30d484c6007e522a9ea407fa0c95062f4167fea19c4353cb',
    }
});