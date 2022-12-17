import React, { Component } from "react";

// import UserService from "../services/user.service";
// import Newintervention from "./newintervention.component";
import Form from "./form.component"


const token = localStorage.getItem("username");
console.log(token);
// const headerRequest = {
//   headers: {
//     Authorization: `Bearer ${token}`,
//   },
// };

export default class NewIntervention extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }
  
  render() {
    return (
      <div className="container">
        <header className="jumbotron">
        </header>
        <Form />
      </div>
    );
  }
}