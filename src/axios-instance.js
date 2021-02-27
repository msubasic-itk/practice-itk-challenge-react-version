import axios from 'axios';

const instance = axios.create({baseURL: 'https://itk-exam-api.herokuapp.com/api/offices'});

export default instance;