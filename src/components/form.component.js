import { useState, useEffect } from "react";
import axios from "axios";

const token = localStorage.getItem("username");
const requestHeader = {
    headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
    },
};

function Form() {
    const[customerID, setCustomer] = useState("");
    const[buildings, setBuildings] = useState("");
    const[selectedBuildingID, setSelectedBuildingID] = useState(null);
    const[batteries, setBatteries] = useState("");
    const[selectedBatteryID, setSelectedBatteryID] = useState(null);
    const[columns, setColumns] = useState("");
    const[selectedColumnID, setSelectedColumnID] = useState(null);
    const[elevators, setElevators] = useState("");
    const[selectedElevatorID, setSelectedElevatorID] = useState(null);
    const[report, setReport] = useState("");

    let handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const test = JSON.stringify ({
                "customerID": +customerID,
                "buildingID": +buildings,
                "batteryID": +batteries,
                "columnID": +columns,
                "elevatorID": +elevators,
                "report": "string",
            });

            let res = await fetch("https://java-api.codeboxxtest.xyz/interventions/new", {
                ...requestHeader,
                method:"POST",
                body: test,
            });

            let resJson = await res.json();

            if (res.status === 200) {
                setReport("Form created successfully");
            }
            else {
                setReport("An error occured");
            }
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        axios.get('https://java-api.codeboxxtest.xyz/customers/current', requestHeader)
        .then(response => setCustomer(response.data.id));
        axios.get('https://java-api.codeboxxtest.xyz/buildings/current', requestHeader)
        .then(response => setBuildings(response.data));
        axios.get('https://java-api.codeboxxtest.xyz/buildings/${buildings}/batteries', requestHeader)
        .then(response => setBatteries(response.data));
        axios.get('https://java-api.codeboxxtest.xyz/batteries/${batteries}/columns', requestHeader)
        .then(response => setColumns(response.data));
        axios.get('https://java-api.codeboxxtest.xyz/columns/${columns}/elevators', requestHeader)
        .then(response => setElevators(response.data));
    }, []);

    useEffect(() => {
        console.log("[useEffect] buildings changed ======= ", buildings.id);
    }, [buildings.id])
    
    return (
        <div className="col-md-12">
            <div className="card card-container">
                <h1>New Intervention</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="customer">Customer ID :</label>
                        <input type="text" className="form-control" value={customerID} onChange={(e) => setCustomer(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="building">Building ID :</label>
                        <select type="text" className="form-control" value={selectedBuildingID} onChange={(e) => setSelectedBuildingID(e.target.value)}
                        >
                            <option> Select a building</option>
                            {buildings.length !== 0 && buildings.map((buildingID) => (
                                <option key={buildings.id} value={buildingID.id}>{buildingID.id}</option>))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="battery">Battery ID :</label>
                        <select type="text" className="form-control" value={selectedBatteryID} onChange={(e) => setSelectedBatteryID(e.target.value)}>
                            <option> Select a battery</option>
                            {batteries.length !== 0 && batteries.map((batteryID) => (
                                <option key={batteries.id} value={batteryID.id}>{batteryID.id}</option>))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="column">Column ID :</label>
                        <select type="text" className="form-control" value={selectedColumnID} onChange={(e) => setSelectedColumnID(e.target.value)}>
                            <option> Select a column</option>
                            {columns.length !== 0 && columns.map((columnID) => (
                                <option key={columns.id} value={columnID.id}>{columnID.id}</option>))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="elevator">Elevator ID :</label>
                        <select type="text" className="form-control" value={selectedElevatorID} onChange={(e) => setSelectedElevatorID(e.target.value)}>
                            <option> Select an elevator</option>
                            {elevators.length !== 0 && elevators.map((elevatorID) => (
                                <option key={elevators.id} value={elevatorID.id}>{elevatorID.id}</option>))}
                        </select>
                    </div>

                    <div className="form-group">
                    <button className="btn btn-primary btn-block">Send intervention</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form;



















// const GET_NEWINT_URL = "https://java-api.codeboxxtest.xyz/interventions/new";

// const requestHeader = {
//     headers: {
//         Authorization: `Bearer ${localStorage.getItem("username")}`,
//     },
// };

// const required = value => {
//     if (!value) {
//       return (
//         <div className="alert alert-danger" role="alert">
//           This field is required!
//         </div>
//       );
//     }
// };

// const getNewint = async (setNewint) => {
//     try {
//         const res = await axios.get(GET_NEWINT_URL, requestHeader);

//         setNewint(res.data);
//     } catch (error) {
//         console.warn("[getNewint] Error: ", error);
//     }
// };

// function Newintervention() {
//     const[customerID, setCustomer] = useState("");
//     const[buildingID, setBuilding] = useState("");
//     const[batteryID, setBattery] = useState("");
//     const[columnID, setColumn] = useState("");
//     const[elevatorID, setElevator] = useState("");
//     const[report, setReport] = useState("");

//     let handleSubmit = async (e) => {
//         e.preventDefault();
//     }

    // render() {
    //     return (
    //         <div className="col-md-12">
    //             <div className="card card-container">
    //                 <h1 id="title">Interventions</h1>
    //                 <Form onSubmit={this.handleLogin}
    //                     ref={c => {
    //                     this.form = c;
    //                     }}
    //                 >
    //                     <div className="form-group">
    //                     <label htmlFor="username">Customer ID</label>
    //                     <Input
    //                         type="text"
    //                         className="form-control"
    //                         name="username"
    //                         value={this.state.customerID}
    //                         onChange={this.onChangeCustomerID}
    //                         validations={[required]}
    //                     />
    //                     </div>
    
    //                     <div className="form-group">
    //                     <button
    //                         className="btn btn-primary btn-block"
    //                         disabled={this.state.loading}
    //                     >
    //                         {this.state.loading && (
    //                         <span className="spinner-border spinner-border-sm"></span>
    //                         )}
    //                         <span>Send new intervention</span>
    //                     </button>
    //                     </div>
    
    //                     <CheckButton
    //                     style={{ display: "none" }}
    //                     ref={c => {
    //                         this.checkBtn = c;
    //                     }}
    //                     />
    //                 </Form>
    //             </div>
    //         </div>
    //     );
    // }
// }

// const Newintervention = () => {
//     const [user, setNewint] = useState([]);
//     useEffect(() => {
//         getNewint(setNewint);
//     }, []);

//     this.form.validateAll();

//     const render = () => {
//         return user.interventions.map((user, index) => {
//             const[customerID, setCustomer] = useState("");
//             const[buildingID, setBuilding] = useState("");
//             const[batteryID, setBattery] = useState("");
//             const[columnID, setColumn] = useState("");
//             const[elevatorID, setElevator] = useState("");
//             const[report, setReport] = useState("");

//             return (
//                 <tr key={id}>
//                     <td>{id}</td>
//                     <td>{status}</td>
//                     <td>{result}</td>
//                     <td>{ building.id ? building.id : building }</td>
//                     <td>{ battery != null && battery.id ? battery.id : battery }</td>
//                     <td>{ column != null && column.id ? column.id : column }</td>
//                     <td>{ elevator != null && elevator.id ? elevator.id : elevator }</td>
//                 </tr>
//             );
//         });
//     };

//     return (
//         <div className="col-md-12">
//             <div className="card card-container">
//                 <h1 id="title">Interventions</h1>
//                 <Form onSubmit={this.handleLogin}
//                     ref={c => {
//                     this.form = c;
//                     }}
//                 >
//                     <div className="form-group">
//                     <label htmlFor="username">Customer ID</label>
//                     <Input
//                         type="text"
//                         className="form-control"
//                         name="username"
//                         value={this.state.customerID}
//                         onChange={this.onChangeCustomerID}
//                         validations={[required]}
//                     />
//                     </div>

//                     <div className="form-group">
//                     <button
//                         className="btn btn-primary btn-block"
//                         disabled={this.state.loading}
//                     >
//                         {this.state.loading && (
//                         <span className="spinner-border spinner-border-sm"></span>
//                         )}
//                         <span>Send new intervention</span>
//                     </button>
//                     </div>

//                     <CheckButton
//                     style={{ display: "none" }}
//                     ref={c => {
//                         this.checkBtn = c;
//                     }}
//                     />
//                 </Form>
//             </div>
//         </div>
//     );
// };

