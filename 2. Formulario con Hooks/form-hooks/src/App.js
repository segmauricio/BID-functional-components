import React, { useState } from 'react';
import './App.css';
import UserForm from './components/UserForm';
import UserResult from './components/UserResult';

function App() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "", 
    password: "",
    confirmPassword: ""
  });

  return (
    <div className='container'>
      <UserForm inputs={state} setInputs={setState}/>
      <UserResult data={state}/>
    </div>
  );
}

export default App;
