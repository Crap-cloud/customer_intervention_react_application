import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import Table from "./table.component";
import Form from "./form.component";

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
         <Link to={"/form"}>New intervention</Link>
        </header>
        <div className="container mt-3">
          <Routes>
            <Route path="/form" element={<Form />} />
          </Routes>
        </div>
      </div>
    );
  }
}