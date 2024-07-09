import React from 'react'
import axios from 'axios';

const Logout = () => {
    const handleClick = async () =>{
        try {
            const response = await axios.post('http://localhost:5000/user/logout', {
                withCredentials: true
              });
              console.log(response)
          } catch (error) {
            console.error('Error in logging out:', error);
            alert(error.response.data.message)
          }
    
    }
  return (
    <div onClick={handleClick}>
         logout
    </div>
  )
}

export default Logout