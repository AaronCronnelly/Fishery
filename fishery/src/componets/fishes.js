import React from 'react';
import FishItem from './fishItem';

function Fishes(props) {
    return (
        <div className="row">
            {props.myFishes.map((fish) => (
                <div key={fish._id} className="col-md-4 mb-4">
                    <FishItem myFish={fish} ReloadData={props.ReloadData} />
                </div>
            ))}
        </div>
    );
}

export default Fishes;
