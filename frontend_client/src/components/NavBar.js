import React from 'react';
import {Link} from "react-router-dom";

function NavBar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
            <div className="container">
                <Link className="navbar-brand text-white fs-4" to="/"> ~Nav Bar~ </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ">
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