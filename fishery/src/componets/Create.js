// Importing React, useState hook, Axios for HTTP requests, and CSS file
import React from "react";
import { useState } from "react";
import axios from "axios";
import './create.css';

// Define the Create component for data entry
function Create() {
    // State variables for capturing form input data
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [lake, setLake] = useState('');
    const [weight, setWeight] = useState('');
    const [size, setSize] = useState('');

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Log the entered data to the console for verification
        console.log("Name: " + name + " Location: " + location + " Lake: " + lake
            + " Weight: " + weight + " Size: " + size);

        // Create an object with the entered data
        const fishInfo = {
            name: name,
            location: location,
            lake: lake,
            weight: weight,
            size: size
        };

        // Make a POST request to the server to add fish information
        axios.post('http://localhost:4000/api/fish', fishInfo)
            .then(response => {
                // Handle the response if needed
            })
            .catch(error => {
                // Handle any errors that occur during the request
                console.log(error);
            });
    };

    // Render the form for data entry
    return (
        <div className="container">
            <h1>Fish Data Entry</h1>
            <form onSubmit={handleSubmit} className="form">
                {/* Form inputs for fish data */}
                <div>
                    <label><strong>Add fishName</strong></label>
                    <input
                        type="text"
                        className="from-Entry"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                    />
                </div>
                <div>
                    <label><strong>Add fishing location</strong></label>
                    <input
                        type="text"
                        className="from-Entry"
                        value={location}
                        onChange={(e) => { setLocation(e.target.value) }}
                    />
                </div>
                <div>
                    <label><strong>Add Lake/River name</strong></label>
                    <input
                        type="text"
                        className="from-Entry"
                        value={lake}
                        onChange={(e) => { setLake(e.target.value) }}
                    />
                </div>
                <div>
                    <label><strong>Add weight of fish lbs</strong></label>
                    <input
                        type="text"
                        className="from-Entry"
                        value={weight}
                        onChange={(e) => { setWeight(e.target.value) }}
                    />
                </div>
                <div>
                    <label><strong>Add fish size In</strong></label>
                    <input
                        type="text"
                        className="from-Entry"
                        value={size}
                        onChange={(e) => { setSize(e.target.value) }}
                    />
                </div>
                {/* Submit button for form submission */}
                <div>
                    <input type="submit" value="Add fishInfo" />
                </div>
            </form>
        </div>
    );
}

// Export the Create component as the default export
export default Create;
