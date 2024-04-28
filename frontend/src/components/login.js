import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    username: '',
    password: '',
  });
  const { username, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) => toast.error(err.message || 'Something went wrong');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        'http://localhost:3000/login',
        {
          username,
          password,
        },
        { withCredentials: true } // Include this if you're using cookies for authentication
      );
      console.log(data);
      const { token } = data;
      localStorage.setItem('token', token); // Save the token in localStorage or sessionStorage
      navigate('/'); // Redirect to the homepage or any other page upon successful login
    } catch (error) {
      console.error(error);
      handleError(error);
    }
  };

  return (
    <div className="form_container">
      <h2>Login Account</h2>
      <form onSubmit={handleSubmit}>
        {/* Input fields for username and password */}
        <input type="text" name="username" value={username} onChange={handleOnChange} />
        <input type="password" name="password" value={password} onChange={handleOnChange} />
        <button type="submit">Submit</button>
      </form>
      {/* Link to navigate to the signup page */}
      <span>
        Don't have an account? <Link to="/signup">Signup</Link>
      </span>
      <ToastContainer />
    </div>
  );
};

export default Login;
