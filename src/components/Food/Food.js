import React, { useImperativeHandle } from 'react';
import './Food.css';

const Food = (props) => {
    const { strCategoryThumb, strCategory, strCategoryDescription } = props.food;
    return (
        <div className="food-container">
            <div>
                <img src={strCategoryThumb} alt="" />
            </div>
            <div>
                <h2>Food Name: {strCategory}</h2>
                <p>Details: {strCategoryDescription.slice(0, 100)}</p>
                <button onClick={() => props.handleDetail(props.food)}>Details</button>
            </div>
        </div>
    );
};

export default Food;