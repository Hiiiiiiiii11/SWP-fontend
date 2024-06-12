import AxiosClient from './AxiosClient'; // Chú ý tên tệp: axiosClient.js với chữ 'a' thường

class LoginApi {
    login = (data) => {
        const url = '/customer/login';
        return AxiosClient.post(url, data);
    };
}

const loginApi = new LoginApi();
export default loginApi;
