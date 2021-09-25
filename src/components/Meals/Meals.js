import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import FoodDetails from '../FoodDetails/FoodDetails';
import './Meals.css';

const Meals = () => {
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(res => res.json())
            .then(data => {
                setFoods(data.categories)
                setSearch(data.categories)
            });
    }, []);

    const [details, setDetails] = useState([]);
    const handleDetail = (foodInfo) => {
        setDetails(foodInfo);
    }
    const [search, setSearch] = useState([]);

    const handelSearch = (event) => {
        const inputText = event.target.value;
        const matchSearch = foods.filter(food => food.strCategory.toLowerCase().includes(inputText.toLowerCase()));
        setSearch(matchSearch);
    }

    return (
        <div>
            <div className="search-field">
                <input onChange={handelSearch} type="text" placeholder="Search Food" />
            </div>
            <div className="meals-container">
                <div>
                    {
                        search.map(food => <Food
                            handleDetail={handleDetail}
                            food={food}></Food>)
                    }
                </div>
                <div>
                    {
                        <FoodDetails details={details}></FoodDetails>
                    }
                </div>
            </div>
        </div>
    );
};

export default Meals;