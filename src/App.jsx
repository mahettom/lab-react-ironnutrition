// src/App.js
import React, { useState } from 'react';
import './App.css';
import arrayOfFood from "./foods.json";
import FoodBox from './Component/FoodBox';
import AddFoodForm from './Component/AddFoodForm';
import Search from './Component/Search';

function App() {
  //                    STATE

  const [foods, setFoods] = useState(arrayOfFood)
  const [searchValue, setSearchValue] = useState('')

  //                  COMPORTEMENT

  const handleFoodForm = (aFood) => {
    const foodCopy = [...foods]
    foodCopy.push(aFood)
    setFoods(foodCopy)
  }










  // foods.filter((food) => food.name.include(searchValue))



  //                    RENDER

  return (
    <div className="App">

      <Search {...{ searchValue, setSearchValue }} />

      <AddFoodForm handleFoodForm={handleFoodForm} />

      <>

        {foods.map((food) => {
          return (
            <FoodBox food={food} />
          )
        })}
      </>

    </div>
  )
}
export default App;
