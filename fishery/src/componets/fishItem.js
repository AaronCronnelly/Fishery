import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function fishItem(props) {
    return (
        <div>
            <Card>
                <Card.Header>{props.myFish.name}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p>Location: {props.myFish.location}</p>
                        <p>Lake: {props.myFish.lake}</p>
                        <p>Weight: {props.myFish.weight} lbs</p>
                        <p>Size: {props.myFish.size} inches</p>
                    </blockquote>
                </Card.Body>
                <Link to={`/edit/${props.myFish._id}`} className='btn btn-primary'>Edit</Link>
                <Button variant='danger' onClick={(e) => {
                    e.preventDefault();
                    axios.delete(`http://localhost:4000/api/fishInfo/${props.myFish._id}`)
                        .then((res) => {
                            let reload = props.Reload();
                        })
                        .catch();
                }}>Delete</Button>
            </Card>
        </div>
    );
}

export default fishItem;