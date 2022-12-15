import axios from "axios";

// const API_URL = "https://java-api.codeboxxtest.xyz/swagger-ui/index.html";

class AuthService {
  login(username, password) {
    return fetch("https://java-api.codeboxxtest.xyz/authenticate?email=" + username + "&password=" + password, {
      username,
      password
    })
    .then(response => response.json())
    .then(data => {
      if (data.access_token) {
        localStorage.setItem("username", data);
      }
      return data;
    })
    // return axios
      // .post(API_URL + "signin", {
      //   username,
      //   password
      // })
      // .then(response => {
      //   if (response.data.accessToken) {
      //     localStorage.setItem("user", JSON.stringify(response.data));
      //   }

      //   return response.data;
      // });
  }

  logout() {
    localStorage.removeItem("user");
  }

  // register(username, email, password) {
  //   return axios.post(API_URL + "signup", {
  //     username,
  //     email,
  //     password
  //   });
  // }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();