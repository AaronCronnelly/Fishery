// Import necessary dependencies from React and Bootstrap
import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

// Define the FishItem component to display individual fish details
function FishItem(props) {
    return (
        // Card component to structure fish information
        <Card>
            {/* Card header displaying fish name */}
            <Card.Header>{props.myFish.name}</Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    {/* Display various details about the fish */}
                    <p>Location: {props.myFish.location}</p>
                    <p>Lake: {props.myFish.lake}</p>
                    <p>Weight: {props.myFish.weight} lbs</p>
                    <p>Size: {props.myFish.size} In</p>
                </blockquote>
            </Card.Body>
            
            {/* Link to the Edit page with the fish ID as a parameter */}
            <Link to={`/edit/${props.myFish._id}`} className='btn btn-primary'>Edit</Link>
            
            {/* Button to delete the fish and trigger the handleDelete function */}
            <Button variant='danger' onClick={() => handleDelete(props.myFish._id, props.ReloadData)}>Delete</Button>
        </Card>
    );
}

// Function to handle the deletion of a fish by its ID
const handleDelete = (fishId, reloadFunction) => {
    axios.delete(`http://localhost:4000/api/fish/${fishId}`)
        .then(() => {
            // Reload the data after successful deletion
            reloadFunction();
        })
        .catch(error => {
            console.error('Error deleting fish:', error);
        });
};

// Export the FishItem component as the default export
export default FishItem;
