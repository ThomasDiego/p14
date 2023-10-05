import "./style.css"
import {Link} from "react-router-dom";
export const Navbar = () =>{
    return (
        <nav>
            <div className="navLeft">
                <Link to={"/"} className="logo">HRnet</Link>
            </div>
            <div className="navRight">
                <Link to={"/employees"}>View Current Employees</Link>
            </div>
        </nav>
    )
}