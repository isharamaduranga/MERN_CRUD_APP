import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import Snackbar from "../components/SnackBar/SnackBar";

function Home() {

    const [items, setItems] = useState([]);
    const [msg, setMsg] = useState("")
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

    const onDelete = (id) => {
        axios.delete(`/item/delete/${id}`).then((res) => {
            setMsg('Item Deleted Successfully ...');
            retrieveItems();
        });
    };
    const handleSearchCategory = (e) => {
        const searchKey = e.currentTarget.value;

        axios.get('/items').then(res => {
            filterData(res.data.existingItems, searchKey);
        });
    };

    const filterData = (items, searchKey) => {
        const result = items.filter((item) =>
            item.itemCode.toLowerCase().includes(searchKey) ||
            item.itemName.toLowerCase().includes(searchKey) ||
            item.description.toLowerCase().includes(searchKey)
        );
        setItems(result);
    };

    return (
        <div className="container shadow-lg p-5 mt-4 rounded-4">
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
                        onChange={handleSearchCategory}
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
                                <Link to={"/edit/"+ item._id} className='btn btn-primary btn-sm'>
                                    <i className="far fa-edit" style={{color: "white"}}>&nbsp; </i>E d i t`
                                </Link>
                                &nbsp;
                                <a href="#" onClick={()=>onDelete(item._id)} className="btn btn-danger btn-sm">
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
            {msg ? <Snackbar severity="warning" message={msg}/> : ""}
        </div>
    );
}

export default Home;