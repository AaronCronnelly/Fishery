import { useState } from "react";
import axios from "axios";

function Create() {
    //Entres for data
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
    //info and data entry for database
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form">
                    <label>Add fishName</label>
                    <input type="text" className="from-Entry"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }} />
                </div>
                <div className="form">
                    <label>Add fishing location</label>
                    <input type="text" className="from-Entry"
                        value={location}
                        onChange={(e) => { setLocation(e.target.value) }} />
                </div>
                <div className="form">
                    <label>Add Lake/River name</label>
                    <input type="text" className="from-Entry"
                        value={lake}
                        onChange={(e) => { setLake(e.target.value) }} />
                </div>
                <div className="form">
                    <label>Add weight of fish lbs</label>
                    <input type="text" className="from-Entry"
                        value={weight}
                        onChange={(e) => { setWeight(e.target.value) }} />
                </div>
                <div className="form">
                    <label>Add fish size inches</label>
                    <input type="text" className="from-Entry"
                        value={size}
                        onChange={(e) => { setSize(e.target.value) }} />
                </div>
                <div>
                    <input type="submit"
                    value="Add fishInfo"></input>
                </div>
            </form>
        </div>
    );
}

export default Create;