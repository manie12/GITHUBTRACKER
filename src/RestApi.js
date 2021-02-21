import axios from 'axios';

const Instance = axios.create({
    baseUrl: "http:  //localhost:8080"
});

export const getUserApi = (userData) => Instance.post('/signin', userData);

export const postUserApi = (userData) => Instance.post('/signin', userData);