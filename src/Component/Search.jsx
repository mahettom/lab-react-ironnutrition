import { useState } from 'react';
import { Divider, Input } from 'antd';
import FoodBox from './FoodBox';

function Search(props) {


    const foods = props.array



//                              STATE
    const [searchValue, setSearchValue] = useState('')



//                          COMPORTEMENT
    const handleSearchChange = (event) => {
        setSearchValue(event.target.value)
}


    const handleSearch = () => {

    const arrayToSearch = foods.map((food) => food.name.toUpperCase())

    const resultArray = arrayToSearch.filter((food) => food.name.includes(searchValue))
    console.log(resultArray)
    resultArray.map((food) => {
      return (
        <FoodBox/>
      )
    })}



//                              RENDER
  return (
    <div>
      <Divider>Search</Divider>
      <Input value={searchValue} type="text" onChange={handleSearchChange} />

    </div>
  );
}

export default Search;