import React, { Component } from "react";
import { Link } from "react-router-dom";

// import UserService from "../services/user.service";
// import Newintervention from "./newintervention.component";
import Table from "./table.component"

const token = localStorage.getItem("username");
console.log(token);
// const headerRequest = {
//   headers: {
//     Authorization: `Bearer ${token}`,
//   },
// };

export default class Home extends Component {
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
         <Table />
         <Link to={"/interventions/new"}>New intervention</Link>
         {/* <a href="interventions/new">New intervention</a> */}
        </header>
      </div>
    );
  }
}