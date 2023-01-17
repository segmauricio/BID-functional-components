import React from 'react';
import './UserForm.css';

const UserForm = (props) => {
    const{inputs, setInputs} = props;

    const copyData = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    }

    return(
        <form className='form-body'>
                <div className='form-group'>
                    <label htmlFor='firstName'>First Name</label>
                    <input type='text' name='firstName' onChange={copyData}></input>              
                </div>
                <div className='form-group'>
                    <label htmlFor='lastName'>Last Name</label>
                    <input type='text' name='lastName' onChange={copyData}></input>       
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input type='text' name='email' onChange={copyData}></input>
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' onChange={copyData}></input>
                </div>
                <div className='form-group'>
                    <label htmlFor='confirmPassword'>Confirm password</label>
                    <input type='password' name='confirmPassword' onChange={copyData}></input>
                </div>
        </form>
    );
};

export default UserForm;