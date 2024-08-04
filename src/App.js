import React, { useState } from 'react';
import './App.css';

function App() {

  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  const [touched, setTouched] = useState(false);

  const regex = /^\d*$/;

  const handleChange = (event) => {
    const value = event.target.value;
    console.log(value,regex.test(value));
    if (regex.test(value)) {
      setInputValue(value);
      validate(value);
    } 
  };

  const handleBlur = () => {
    setTouched(true);
    validate(inputValue);
  };

  const validate = (value) => {
    if (value === '') {
      setError('Input cannot be empty');
    } else if (value.length < 5) {
      setError('Input must be at least 5 digits');
    } else if (value.length > 5) {
      setError('Input must be exactly 5 digits');
    } else {
      setError('');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTouched(true);
    if (!error && inputValue.length === 5) {
      alert('Form submitted successfully!');
    }
  };

  return (
    <div className="App">
      <div className="container">
        <form className='form' onSubmit={handleSubmit}>
          <h2>American Zip Codes</h2>
          <label htmlFor="zipcode">Enter Zip Code:</label>
          <br/>
          <input
            type="text"
            id="zipcode"
            name='zipcode'
            maxLength="5"
            className='form-input'
            value={inputValue}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete='postal-code'
          ></input>
          <br/>
          {touched && error && <span className='error'>
              {error}
          </span>}
          <br/>
        <button className='btn btn-submit' type="submit" disabled={!!error}>
          Submit
        </button>
        </form>
      </div>
    </div>
  );
}

export default App;
