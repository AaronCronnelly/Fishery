import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function FishItem(props) {
    return (
        <Card>
            <Card.Header>{props.myFish.name}</Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p>Location: {props.myFish.location}</p>
                    <p>Lake: {props.myFish.lake}</p>
                    <p>Weight: {props.myFish.weight} lbs</p>
                    <p>Size: {props.myFish.size} In</p>
                </blockquote>
            </Card.Body>
            <Link to={`/edit/${props.myFish._id}`} className='btn btn-primary'>Edit</Link>
            <Button variant='danger' onClick={() => handleDelete(props.myFish._id, props.ReloadData)}>Delete</Button>
        </Card>
    );
}

const handleDelete = (fishId, reloadFunction) => {
    axios.delete(`http://localhost:4000/api/fish/${fishId}`)
        .then(() => {
            reloadFunction();
        })
        .catch(error => {
            console.error('Error deleting fish:', error);
        });
};

export default FishItem;
