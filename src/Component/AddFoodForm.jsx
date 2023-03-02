import { Divider, Input } from 'antd';
import { useState } from 'react';


function AddFoodForm(props) {
    const { handleFoodForm } = props

    const [nameValue, setNameValue] = useState('')
    const [imageValue, setImageValue] = useState('')
    const [caloriesValue, setCaloriesValue] = useState(0)
    const [servingsValue, setServingsValue] = useState(0)

    const handleNameChange = (event) => setNameValue(event.target.value)
    const handleImageChange = (event) => setImageValue(event.target.value)
    const handleCaloriesChange = (event) => setCaloriesValue(event.target.value)
    const handleServingsChange = (event) => setServingsValue(event.target.value)


    const handleSubmit = (event) => {
        event.preventDefault()

        const newFood = {
            name: nameValue,
            image: imageValue,
            calories: caloriesValue,
            servings: servingsValue,
        }
        console.log(newFood)
        handleFoodForm(newFood)
    }

    return (
        <form onSubmit={handleSubmit} >
            <Divider>Add Food Entry</Divider>

            <label>Name</label>
            <Input value={nameValue} type='text' onChange={handleNameChange} />

            <label>Image</label>
            <Input value={imageValue} type='text' onChange={handleImageChange} />


            <label>Calories</label>
            <Input value={caloriesValue} type='number' onChange={handleCaloriesChange} />



            <label>Servings</label>
            <Input value={servingsValue} type='number' onChange={handleServingsChange} />


            <button type='submit'>Create</button>
        </form>
    );
}

export default AddFoodForm;