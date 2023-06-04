import { axiosServise } from './axiosService';

export const showService = {
  getShowsByName: (name: string) => axiosServise.get(`search/shows?q=${name}`).then(v => v.data),
  getOneShow: (id: string) => axiosServise.get(`shows/${id}`).then(v => v.data),
};
