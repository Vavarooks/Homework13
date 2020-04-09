import React from "react"
import axios from "axios"
import EmployeeRecords from "./EmployeeRecords"
class Employee extends React.Component {
    state = {
        employeedata: []
    }
    componentDidMount = () => {
        axios.get("https://randomuser.me/api/?results=25&nat=us").then((Response) => {
            console.log("Respose", Response.data.results)
            let employeearray = []
            for (let i = 0; i > Response.data.results.length; i++) {
                let record = {
                    firstName: Response.data.results[i].name.first,
                    lastName: Response.data.results[i].name.last,
                    phonenum: Response.data.results[i].cell,
                    id: Response.data.results[i].id.value,
                    email: Response.data.results[i].email,
                }
                console.log("For Loop")
                employeearray.push(record)
            }
            console.log(employeearray)
            this.setState({ employeedata: employeearray })
        })
    }
    render() {
        return (<div>
            <h1>
                <heading>Employee Profiles</heading>
                <EmployeeRecords Records={this.state.employeedata} />
            </h1>
        </div>)
    }
}
export default Employee