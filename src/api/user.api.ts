import { API, USER_ENDPOINT } from '~/constants/constants';
import axiosService from './axios-service';

const URL = `${API}/${USER_ENDPOINT}`;

export const userApi = {
  getUserInfo: async () => {
    const response = await axiosService.get<IResponseSuccess<UpdateUser>>(`${URL}`);

    return response.data.data;
  }
};
