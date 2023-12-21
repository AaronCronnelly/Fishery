// read.js

// Import necessary dependencies and components
import React, { useEffect, useState } from "react";
import axios from "axios";
import Fishes from "./fishes";
import './read.css';

// Define the Read component
function Read() {
    // State to hold the fetched data from the API
    const [data, setdata] = useState([]);

    // useEffect hook to fetch data when the component mounts
    useEffect(() => {
        axios.get('http://localhost:4000/api/fish')
            .then(response => {
                // Update the state with the fetched data
                setdata(response.data);
            })
            .catch(error => {
                // Log any errors to the console
                console.log(error);
            });
    }, []);

    // Function to reload data by making another API request
    const reload = () => {
        axios.get('http://localhost:4000/api/fish')
            .then(response => {
                // Update the state with the re-fetched data
                setdata(response.data);
            })
            .catch(error => {
                // Log any errors to the console
                console.log(error);
            });
    };

    // Render the Read component with Fishes component passing data and reload function as props
    return (
        <div className="read-container">
            <Fishes myFishes={data} ReloadData={reload} />
        </div>
    );
}

// Export the Read component as the default export
export default Read;
