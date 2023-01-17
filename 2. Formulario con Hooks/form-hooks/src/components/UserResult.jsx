import React from 'react'
import './UserResult.css';

const UserResults = (props) => {
    const {firstName, lastName, email, password, confirmPassword} = props.data;

    return(
        <div className='results'>
            <h4>Your Form Data</h4>
            <div className='result-card'>
                <p>First Name: </p>
                <span>{firstName}</span>
            </div>
            <div className='result-card'>
                <p>Last Name: </p>
                <span>{lastName}</span>
            </div>
            <div className='result-card'>
                <p>Email: </p>
                <span>{email}</span>
            </div>
            <div className='result-card'>
                <p>Password: </p>
                <span>{password}</span>
            </div>
            <div className='result-card'>
                <p>Confirm Password: </p>
                <span>{confirmPassword}</span>
            </div>
        </div>
    );
};

export default UserResults;