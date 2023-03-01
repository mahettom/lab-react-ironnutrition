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



  //                  COMPORTEMENT

  const handleFoodForm = (aFood) => {

    const foodCopy = [...foods]
    foodCopy.push(aFood)
    setFoods(foodCopy)
  }


  //                    RENDER

  return (
    <div className="App">

      <Search array={foods}/>

      <AddFoodForm handleFoodForm={handleFoodForm} />

      {foods.map((food) => {
        return (
          <FoodBox food={food}/>
        )
      })}


    </div>
  )
}
export default App;
