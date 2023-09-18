import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
 const NavBar=()=>{
return(
    <>
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
    <div className="container-fluid">
        {/* <Link className="navbar-brand" to="/">
            NavBar
        </Link> */}
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto">
                <li className="nav-item">
                <Link className="nav-link" to="/">
                    Home
                </Link>
                </li>
            </ul>
            <Link className="btn btn-primary" to="/Login">
                Login
            </Link>
            <Link className="btn btn-primary"s to="/Signup">
                Signup
            </Link>
        </div>
    </div>
</nav>
    </>
);
 };

 export default NavBar;