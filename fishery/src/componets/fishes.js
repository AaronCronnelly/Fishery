// Import React and FishItem component
import React from 'react';
import FishItem from './fishItem';

// Define the Fishes component to display a list of fish items
function Fishes(props) {
    return (
        // Display fish items in a row
        <div className="row">
            {/* Map through the array of fish and render each FishItem component */}
            {props.myFishes.map((fish) => (
                <div key={fish._id} className="col-md-4 mb-4">
                    {/* Pass individual fish data and reload function as props to FishItem component */}
                    <FishItem myFish={fish} ReloadData={props.ReloadData} />
                </div>
            ))}
        </div>
    );
}

// Export the Fishes component as the default export
export default Fishes;
