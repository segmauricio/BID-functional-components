import React, { useState } from 'react';
import './UserForm.css';

const UserForm = ({ lista, setLista }) => {
    const [colour, setColour] = useState("");
    const [dimension, setDimension] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        let data = {
            colour: colour,
            dimension: dimension
        }

        let aux = [...lista]
        aux.push(data);
        console.log(aux);
        setLista([...aux]);

        setColour("");
        setDimension("");
    };

    
    
    return (
        <form onSubmit={ handleSubmit }>
            <div className='colorPicker'>
                <label>Color</label>
                <input
                    type='text'
                    className='colorInput'
                    name='color'
                    placeholder='Enter a valid color here'
                    onChange={ (e) => setColour(e.target.value) }
                    value={ colour }>
                </input>
                <input
                    type='text'
                    className='dimensionInput'
                    name='dimension'
                    placeholder='Dimensions'
                    onChange={ (e) => setDimension(e.target.value) }
                    value={ dimension }></input>
                <button type="submit">Add</button>
            </div>
        </form>
    );
};

export default UserForm;
