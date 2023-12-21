// Import necessary dependencies from React, React Router, and Axios
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

// Define the Edit component for updating fish information
export default function Edit() {
    // Retrieve the fish ID from the URL parameters using React Router's useParams
    let { id } = useParams();

    // State variables to hold the form input data
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [lake, setLake] = useState('');
    const [weight, setWeight] = useState('');
    const [size, setSize] = useState('');

    // Access the navigation function from React Router
    const navigate = useNavigate();

    // Fetch the existing fish data when the component mounts
    useEffect(() => {
        axios.get(`http://localhost:4000/api/fish/${id}`)
          .then((response) => {
            // Set state variables with the retrieved fish data
            setName(response.data.name);
            setLocation(response.data.location);
            setLake(response.data.lake);
            setWeight(response.data.weight);
            setSize(response.data.size);
          })
          .catch((error) => {
            console.log(error);
          });
      }, [id]);

    // Handle form submission to update fish information
    const handleSubmit = (e) => {
        e.preventDefault();

        // Create an object with the updated fish information
        const fish = {
            name: name,
            location: location,
            lake: lake,
            weight: weight,
            size: size
        };

        // Make a PUT request to update fish data in the server
        axios.put(`http://localhost:4000/api/fish/${id}`, fish)
            .then((res) => {
                // Navigate to the 'Read' page after successful update
                navigate('/read');
            })
            .catch((error) => {
                console.log(error);
            });
    }

    // Render the form for updating fish information
    return (
        <div className="container">
            <h1>Fish Data Entry</h1>
            <form onSubmit={handleSubmit} className="form">
                {/* Form inputs for updating fish data */}
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
                {/* Submit button for updating fish information */}
                <div>
                    <input type="submit" value="Update fishInfo" />
                </div>
            </form>
        </div>
    );
}
