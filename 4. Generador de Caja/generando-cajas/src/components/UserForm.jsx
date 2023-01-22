import React, { useState } from 'react';
import './UserForm.css';

const UserForm = ({ lista, setLista }) => {
    const [colour, setColour] = useState("");
    const [dimension, setDimension] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (colour && dimension) {
            let data = {
                colour,
                dimension
            }
            setLista([...lista, data]);
            setColour("");
            setDimension("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='colorPicker'>
                <label>Color</label>
                <input
                    type='text'
                    className='colorInput'
                    name='color'
                    placeholder='Enter a valid color here'
                    onChange={(e) => setColour(e.target.value.trim())}
                    value={colour}>
                </input>
                <input
                    type='text'
                    className='dimensionInput'
                    name='dimension'
                    placeholder='Dimensions'
                    onChange={(e) => setDimension(e.target.value.trim())}
                    value={dimension}></input>
                <button type="submit">Add</button>
            </div>
        </form>
    );
};

export default UserForm;
