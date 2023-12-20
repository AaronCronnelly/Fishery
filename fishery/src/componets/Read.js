import { useEffect, useState } from "react";
import axios from "axios";
import Fishes from "./fishes";
function Read() {
    const [data, setdata] = useState([]);

    useEffect(
        () =>{
            axios.get('http://localhost:4000/api/fishInfo')
                .then(
                    (response) => {
                        setdata(response.data)
                    }
                )
                .catch(
                    (error) => {
                        console.log(error);
                    }
                )
        }, []
    );

    const Reload = (e) => {
        axios.get('http://localhost:4000/api/fishInfo')
            .then(
                (response) => {
                    setdata(response.data)
                }
            )
            .catch(
                (error) => {
                    console.log(error);
                }
            )
    }
    return (
        <div>
            <Fishes myFishes={data} ReloadData={Reload}></Fishes>
        </div>
    );
}
export default Read;