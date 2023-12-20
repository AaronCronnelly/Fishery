import React from "react";
import { useState } from "react";
import axios from "axios";
import './create.css';

function Create() {
    // Entries for data
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [lake, setLake] = useState('');
    const [weight, setWeight] = useState('');
    const [size, setSize] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Name: " + name + "Location: " + location + "Lake: " + lake
            + "Weight: " + weight + "Size: " + size);

        const fishInfo = {
            name: name,
            location: location,
            lake: lake,
            weight: weight,
            size: size
        };
        axios.post('http://localhost:4000/api/fishInfo', fishInfo)
            .then()
            .catch();
    };

    // Info and data entry for the database
    return (
        <div className="container">
            <h1>Fish Data Entry</h1>
            <form onSubmit={handleSubmit} className="form">
                <div>
                    <label>Add fishName</label>
                    <input
                        type="text"
                        className="from-Entry"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                    />
                </div>
                <div>
                    <label>Add fishing location</label>
                    <input
                        type="text"
                        className="from-Entry"
                        value={location}
                        onChange={(e) => { setLocation(e.target.value) }}
                    />
                </div>
                <div>
                    <label>Add Lake/River name</label>
                    <input
                        type="text"
                        className="from-Entry"
                        value={lake}
                        onChange={(e) => { setLake(e.target.value) }}
                    />
                </div>
                <div>
                    <label>Add weight of fish lbs</label>
                    <input
                        type="text"
                        className="from-Entry"
                        value={weight}
                        onChange={(e) => { setWeight(e.target.value) }}
                    />
                </div>
                <div>
                    <label>Add fish size In</label>
                    <input
                        type="text"
                        className="from-Entry"
                        value={size}
                        onChange={(e) => { setSize(e.target.value) }}
                    />
                </div>
                <div>
                    <input type="submit" value="Add fishInfo" />
                </div>
            </form>
        </div>
    );
}

export default Create;
