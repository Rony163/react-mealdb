import React from 'react';
import './FoodDetails.css';

const FoodDetails = (props) => {

    return (
        <div className="food-details">
            <h4>Food Name: {props.details.strCategory}</h4>
        </div>
    );
};

export default FoodDetails;