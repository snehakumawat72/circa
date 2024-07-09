import "./SignUp.css"

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";


const SignUp = () => {
  const history = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let response
    try {
      response = await axios.post('http://localhost:5000/user/signup', formData);
      if(response.status==201){
        alert("Successfully Submitted")
        navigate("/login")
        
      }
    
    } catch (error) {
      console.error('Error signing up:', error);
      alert(error.response.data.message)
    }
  };
  return (
    <div class="login-wrap">
    <div class="login-html">
        <label for="tab-2" class="tab">Sign Up</label>
        <div class="login-form">
            <div class="sign-up-htm">
                <form>
                    <div class="group">
                        <label for="name">Name</label>
                        <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
                    </div>
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
                        <input type="submit" class="button" value="Sign Up" onClick={handleSubmit}/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
  )
}

export default SignUp