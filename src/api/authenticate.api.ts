import { APIV1, AUTH_ENDPOINT } from '~/constants/constants';
import axiosService from './axios-service';

const URL = `${APIV1}/${AUTH_ENDPOINT}`;

interface UserAuthenticate {
  token: string;
  name: string;
}
interface UserInfoRes {
  _id: string;
  name: string;
}
export const authenticateApi = {
  login: async (body: AuthenticateLogin) => {
    const response = await axiosService.post<IResponseSuccess<UserAuthenticate>>(`${URL}/login`, body);

    return response.data.data;
  },
  register: async (body: UserInfoLogin) => {
    const response = await axiosService.post<IResponseSuccess<UserInfoRes>>(`${URL}/register`, body);
    console.log(response);
    return response.data.data;
  }
};
