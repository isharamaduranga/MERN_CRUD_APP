import React, {useEffect, useState} from 'react';
import axios from "axios";

function Home() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        retrieveItems();
    }, []);


    const retrieveItems = () => {
        axios.get('http://localhost:8000/items').then(res => {
            if (res.data.success) {
                setItems(res.data.existingItems);
                console.log(res.data.existingItems)
            }
        });
    };


    return (
        <div className="container">
            {items.map((items,index)=>(
                <div key={index}>
                    <p>{items.itemCode}</p>
                    <p>{items.itemName}</p>
                    <p>{items.description}</p>
                    <p>{items.itemQty}</p>
                    <p>{items.itemPrice}</p>

                </div>

            ))}
        </div>
    );
}

export default Home;