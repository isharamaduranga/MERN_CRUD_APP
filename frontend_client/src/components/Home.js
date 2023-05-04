import React, {useEffect, useState} from 'react';
import axios from "axios";
function Home() {

    // eslint-disable-next-line
    const[items,setItems]=useState([]);

    useEffect(() => {
        retrieveItems();
    }, []);


    const retrieveItems = () => {
        axios.get('http://localhost:8000/items').then(res => {
            if (res.data.success) {
                console.log(res.data.existingItems);
                setItems(res.data.existingItems);
            }
        });
    };


    return (
        <div>

        </div>
    );
}

export default Home;