import axios from 'axios';

const baseURL = 'https://api.tvmaze.com/';

export const axiosServise = axios.create({ baseURL });
