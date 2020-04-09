import React from "react"
import { MDBDataTable } from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
class EmployeeRecords extends React.Component{
    state = {
        data: {
            columns: [
                {
                    label: "firstname",
                    field: "firstName",
                    sort: "asc",
                    width: 150
                  },
                  {
                    label: "lastname",
                    field: "lastName",
                    sort: "asc",
                    width: 270
                  },
                  {
                    label: "phoneNumber",
                    field: "phonenum",
                    sort: "asc",
                    width: 200
                  },
                  {
                    label: "id",
                    field: "id",
                    sort: "asc",
                    width: 100
                  },
                  {
                    label: "email",
                    field: "email",
                    sort: "asc",
                    width: 150
                  }
            ], 
            rows: this.props.Records

        }
    }
    render(){
        return(<div>
       <MDBDataTable striped bordered hover data={this.state.data}/>;
        </div>)
    }
}
export default EmployeeRecords