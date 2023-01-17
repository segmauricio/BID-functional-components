import React from 'react';
import './PersonCard.css';

const PersonCard = props => {    
    return(        
        <div className='cards'>
            <div className='card-body'>
                <h1>{props.lastName}, {props.firstName}</h1>            
                <p>Age: {props.age}</p>            
                <p>Hair Color: {props.hairColor}</p> 
            </div>            
        </div>    
    );
}
export default PersonCard;

