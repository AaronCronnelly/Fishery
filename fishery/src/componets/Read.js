// read.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import Fishes from "./fishes";
import './read.css';

function Read() {
    const [data, setdata] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/api/fishInfo')
            .then(response => {
                setdata(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const reload = () => {
        axios.get('http://localhost:4000/api/fishInfo')
            .then(response => {
                setdata(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div className="read-container">
            <Fishes myFishes={data} ReloadData={reload} />
        </div>
    );
}

export default Read;
