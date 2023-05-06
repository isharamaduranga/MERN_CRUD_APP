import React, { Component } from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

const ItemDetails = () => {
    const {itemCode, itemName, description, itemQty, itemPrice} = useParams();


    return (
        <div className="container-fluid d-flex align-items-center justify-content-center bg-white " style={{height: "91vh"}}>
            <div className="card border-1 border-secondary shadow-lg " style={{width: "22rem"}}>
                <img className="card-img-top" src="https://www.spyur.am/images/additional_info_0/5047/5047_08.jpg" alt="image"/>
                <div className="card-body">
                    <h4 className="card-title text-center">{itemName}</h4>
                    <p className="card-text">{description}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><span className="text-primary fw-medium">ItemCode   : </span>{itemCode}</li>
                    <li className="list-group-item"><span className="text-danger fw-medium"> Items Qty  : </span>{itemQty}</li>
                    <li className="list-group-item"><span className="text-success fw-medium">Item Price : </span>{itemPrice}</li>
                </ul>
                <div className="card-footer text-center">
                    <a href="/" className="card-link" style={{textDecoration: "none"}}>Back To Home</a>
                </div>
            </div>
        </div>
    );
};

export default ItemDetails;