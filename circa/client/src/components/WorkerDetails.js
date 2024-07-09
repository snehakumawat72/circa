import React, { useEffect, useState } from 'react'
import Electrician from "../img/electrician.png"
import axios from 'axios'

const WorkerDetails = ({worker}) => {

  const [price,setPrice] = useState({})

    useEffect(() => {
      const fetchData = async () => {
        try {

          console.log(worker.email)
            // Your POST request data
            const postData = {
                email:worker.email
            };

            // Your Axios POST request
            const response = await axios.post('http://localhost:5000/worker/pricing', postData);

            // Do something with the response
            //console.log(response.data);
            setPrice(response.data)
        } catch (error) {
            // Handle error
            console.error('Error fetching data:', error);
        }
    };

    // Call fetchData function
    fetchData();
    },[])
  return (

       <div>
    <div class="feature col">
            <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <img src={Electrician} width="50" height="50" />
              {worker.name}
            </div>
            <h3 class="fs-2 text-body-emphasis">{worker.type}</h3>
            <p>{worker.skills}</p>
            <p>Price : {price.price}</p>
            <a  href={`/profile/${worker._id}`} class="icon-link">
              Book Now
              <svg class="bi"><use href="#chevron-right"></use></svg>
            </a>
          </div>
            </div>
          

      
      
  )
}

export default WorkerDetails