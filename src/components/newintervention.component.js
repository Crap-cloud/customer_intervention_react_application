import { useState, useEffect } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import axios from "axios";

const GET_NEWINT_URL = "https://java-api.codeboxxtest.xyz/interventions/new";

const requestHeader = {
    headers: {
        Authorization: `Bearer ${localStorage.getItem("username")}`,
    },
};

const required = value => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
};

const getNewint = async (setNewint) => {
    try {
        const res = await axios.get(GET_NEWINT_URL, requestHeader);

        setNewint(res.data);
    } catch (error) {
        console.warn("[getNewint] Error: ", error);
    }
};

const Newintervention = () => {
    const [user, setNewint] = useState([]);
    useEffect(() => {
        getNewint(setNewint);
    }, []);

    this.form.validateAll();

    const render = () => {
        return user.interventions.map((user, index) => {
            const { id, status, result, building, battery, column, elevator } = user;
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{status}</td>
                    <td>{result}</td>
                    <td>{ building.id ? building.id : building }</td>
                    <td>{ battery != null && battery.id ? battery.id : battery }</td>
                    <td>{ column != null && column.id ? column.id : column }</td>
                    <td>{ elevator != null && elevator.id ? elevator.id : elevator }</td>
                </tr>
            );
        });
    };

    return (
        <div className="col-md-12">
            <div className="card card-container">
                <h1 id="title">Interventions</h1>
                <Form onSubmit={this.handleLogin}
                    ref={c => {
                    this.form = c;
                    }}
                >
                    <div className="form-group">
                    <label htmlFor="username">Customer ID</label>
                    <Input
                        type="text"
                        className="form-control"
                        name="username"
                        value={this.state.customerID}
                        onChange={this.onChangeCustomerID}
                        validations={[required]}
                    />
                    </div>

                    <div className="form-group">
                    <button
                        className="btn btn-primary btn-block"
                        disabled={this.state.loading}
                    >
                        {this.state.loading && (
                        <span className="spinner-border spinner-border-sm"></span>
                        )}
                        <span>Login</span>
                    </button>
                    </div>

                    {this.state.message && (
                    <div className="form-group">
                        <div className="alert alert-danger" role="alert">
                        {this.state.message}
                        </div>
                    </div>
                    )}
                    <CheckButton
                    style={{ display: "none" }}
                    ref={c => {
                        this.checkBtn = c;
                    }}
                    />
                </Form>
            </div>
        </div>
    );
};

export default Newintervention;