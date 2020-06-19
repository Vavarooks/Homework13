import React from "react"
import axios from "axios"
import EmployeeRecords from "./EmployeeRecords"
class Employee extends React.Component {
    state = {
        employeedata: []
    }
    componentDidMount = () => {
        axios.get("https://randomuser.me/api/?results=200&nat=us").then((Response) => {
            console.log("Respose", Response.data.results)
            var apidata = Response.data.results
            let employeearray = []
            for (let i = 0; i < apidata.length; i++) {
                let record = {
                    firstName: apidata[i].name.first,
                    lastName: apidata[i].name.last,
                    phonenum:apidata[i].cell,
                    id: apidata[i].id.value,
                    email: apidata[i].email,
                }
                
                employeearray.push(record)
            }
            
            this.setState({ employeedata: employeearray })
            console.log(this.state.employeedata)
        })
    }
    render() {
        return (<div>
            <div className="jumbotron bg-info">
            <h1>Employee Profile</h1>
            <h4>Using Axios and randomuser API</h4>
            </div>
                <EmployeeRecords employeerecords={this.state.employeedata}/>
                    </div>)
    }
}
export default Employee