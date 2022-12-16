class AuthService {
  login(username, password) {
    return fetch("https://java-api.codeboxxtest.xyz/authenticate?email=" + username + "&password=" + password, {
      username,
      password
    })
    .then(response => response.json())
    .then(data => {
      if (data.access_token) {
        localStorage.setItem("username", data.access_token);
      }
      return data;
    })
  }

  logout() {
    localStorage.removeItem("user");
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();