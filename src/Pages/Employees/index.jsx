import "./style.css"
import {TableEmployees} from "../../Components/TableEmployees/index.jsx";
import { useSelector, useDispatch } from 'react-redux'
export const Employees = () => {
    const employees = useSelector((state) => state.employees)
    return (
        <div>
            <h1>Current Employees</h1>
            <div className={"employeesTable"}>
                <TableEmployees datas={employees.value}/>
            </div>
        </div>
    )
}