import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Edit() {
    let { id } = useParams();

    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [lake, setLake] = useState('');
    const [weight, setWeight] = useState('');
    const [size, setSize] = useState('');

    const navigate = useNavigate();

    useEffect(
        () => {
            axios.get('http://localhost:4000/api/fishInfo' + id)
                .then((response) => {
                    setName(response.data.name);
                    setLocation(response.data.location);
                    setLake(response.data.lake);
                    setWeight(response.data.weight);
                    setSize(response.data.size);
                })
                .then(
                    (error) => {
                        console.log(error);
                    }
                );
        }, []
    );

    const handleSubmit = (e) => {
        e.preventDefault();

        const fishInfo = {
            name: name,
            location: location,
            lake: lake,
            weight: weight,
            size: size
        }

        axios.put('http://localhost:4000/api/fishInfo' + id, fishInfo)
            .then((res) => {
                navigate('/read');
            })
            .catch(
                (error) => {
                    console.log(error)
                }
            );
    }

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