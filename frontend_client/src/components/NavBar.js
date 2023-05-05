import React from 'react';
import {Link} from "react-router-dom";
import logo from "./logo_i.ico"
function NavBar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand text-white fs-4 " to="/">
                    <img src={logo} alt="Logo" width="60" height="40"className="d-inline-block align-text-bottom"/>
                    ~D MART~ </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav gap-2 ">
                        <li className="nav-item ">
                            <Link className="nav-link active text-warning fs-5" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-warning fs-5" to="/add">Add Item</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-warning fs-5" to="/edit/:id">Edit Item</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;