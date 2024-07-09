import React, { useState } from 'react';
import axios from 'axios';
import "./Login.css"
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)

    try {
      const response = await axios.post('http://localhost:5000/user/login', formData, {
        withCredentials: true 
      });
      console.log(response)
      alert(response.data.message)
      navigate("/home")
    } catch (error) {
      alert(error.response.data.message)
      console.error('Error logging in:', error.response.data.message);
    }
  };
  return (
    <div class="login-wrap">
        <div class="login-html">
            <div class="login-form">
                <div class="sign-up-htm">
                    <form>
                        <div class="group">
                            <label for="email">Email</label>
                            <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
                        </div>
                        <div class="group">
                            <label for="password">Password</label>
                            <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />

                        </div>
                        <div class="group">
                            <input type="submit" class="button" value="Login" onClick={handleSubmit} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login