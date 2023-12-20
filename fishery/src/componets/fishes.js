import React from 'react';
import FishItem from './fishItem';

function Fishes(props) {
    return props.myFishes.map((fish) => (
        <FishItem myFish={fish} key={fish._id} Reload={() => props.ReloadData()} />
    ));
}

export default Fishes;
