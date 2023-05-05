import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

function Home() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        retrieveItems();
    }, []);


    const retrieveItems = () => {
        axios.get('/items').then(res => {
            if (res.data.success) {
                setItems(res.data.existingItems);
            }
        });
    };


    return (<div className="container shadow-lg p-5 mt-4 rounded-4">
            <div className='row mb-2 mt-2'>
                <h4 className="text-success text-center">All Items Here !!!</h4>
            </div>
            <div className='d-flex align-items-center justify-content-center'>
                <div className='row w-50 mt-2 mb-4'>
                    <input
                        className="form-control border border-2 border-info"
                        type='search'
                        placeholder='Search'
                        name='searchQuery'
                    />
                </div>
            </div>
            <div className="table-responsive mx-auto">
                <table className="table table-responsive-lg table-hover">
                    <thead style={{background: "lightgray", borderBottom: "1px solid gray"}}>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Item Code</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Unit-Price</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>

                    {items.map((item, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{item.itemCode} </td>
                            <td>
                                <a
                                    href={`/item/${item.itemCode}/${item.itemName}/${item.description}/${item.itemQty}/${item.itemPrice}`}
                                    style={{textDecoration: "none"}}>
                                    {item.itemName}
                                </a>
                            </td>

                            <td>{item.description} </td>
                            <td>{item.itemQty} </td>
                            <td>{item.itemPrice} </td>
                            <td>
                                <Link to={"/edit/"} className='btn btn-warning btn-sm'>
                                    <i className="far fa-edit" style={{color: "blueviolet"}}>&nbsp; </i>E d i t`
                                </Link>
                                &nbsp;
                                <a href="#" className="btn btn-danger btn-sm">
                                    <i className="far fa-trash-alt" style={{color: "white"}}>&nbsp; </i>Delete
                                </a>
                            </td>
                        </tr>))}
                    </tbody>
                </table>
            </div>

            <div className="d-flex justify-content-center">
                <button className="btn btn-success">
                    <Link to="/add" style={{textDecoration: "none", color: "white"}}>
                        Create New Post
                    </Link>
                </button>
            </div>
        </div>);
}

export default Home;