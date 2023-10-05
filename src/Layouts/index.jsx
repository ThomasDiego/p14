import {Navbar} from "../Components/Navbar/index.jsx";

export const Layout = ({children}) =>{
    return (
        <>
            <Navbar/>
            {children}
        </>
    )
}