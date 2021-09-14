import './App.css';
import React, { useState } from 'react';
import Forms from './Forms'

const initialFormValues = {
  username: '',
  email: '',
  role: '',
}
export default function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
 
  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue});
  }

  const submitForm = () => {
    const newUser = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }
  }

  return (
    <div className="App">
      <h1>Super Awesome Form</h1>
      <Forms 
      update={updateForm}
      submit={submitForm}
      values={formValues}
      />
    </div>
  );
}


