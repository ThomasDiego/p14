import {createBrowserRouter} from "react-router-dom";
import {Layout} from "./Layouts/index.jsx";
import {Home} from "./Pages/Home/index.jsx";
import {Employees} from "./Pages/Employees/index.jsx";

export const Router = createBrowserRouter([
    {
        path: "/",
        element:
        <div className={"container"}>
            <Layout>
                <Home/>
            </Layout>
        </div>
        ,
    },
    {
        path: "/employees",
        element:
            <div className={"container"}>
                <Layout>
                    <Employees/>
                </Layout>
            </div>
        ,
    }
]);