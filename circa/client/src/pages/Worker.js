
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Worker.css"
import Navbar from "../components/Navbar";


const Worker = () => {
    const history = useNavigate();
    const [formData, setFormData] = useState({
      city: '',
      contact: '',
      type: '',
      skills: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
        let response
        try {
          response = await axios.post('http://localhost:5000/worker/worker', formData, {
            withCredentials: true
          });
          console.log(response)
          if(response.status==201){
            alert("Successfully Created")
            window.location.reload()
          }
        
        } catch (error) {
          console.error('Error signing up:', error);
          alert(error.response.data.message)
        }
      };
  return (
    <>
    {<Navbar />}
    <div class="login-wrap">
    <div class="login-html">
        <div class="login-form">
            <div class="sign-up-htm">
                <form>
                    <div class="group">
                        <label for="city">City</label>
                        <input
        type="text"
        name="city"
        placeholder="city"
        value={formData.city}
        onChange={handleChange}
      />
                    </div>
                    <div class="group">
                        <label for="contact">Contact</label>
                        <input
        type="text"
        name="contact"
        placeholder="contact"
        value={formData.contact}
        onChange={handleChange}
      />
                    </div>
                    <div class="group">
                        <label for="type">Type</label>
                        <input
        type="text"
        name="type"
        placeholder="type"
        value={formData.type}
        onChange={handleChange}
      />
                    </div>
                    <div class="group">
                        <label for="skills">Skills</label>
                        <input
        type="text"
        name="skills"
        placeholder="skilss"
        value={formData.skills}
        onChange={handleChange}
      />
                    </div>
                    <div class="group">
                        <input type="submit" class="button" value="Submit"  onClick={handleSubmit}/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</>
  )
}

export default Worker