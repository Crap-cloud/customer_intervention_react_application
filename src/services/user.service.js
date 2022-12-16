import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://java-api.codeboxxtest.xyz/authenticate?email=customer1%40business.com&password=password123';

class UserService {
  getPublicContent() {
    return axios.get("/all");
  }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}

export default new UserService();