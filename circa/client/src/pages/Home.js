import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import axios from 'axios'
import WorkerDetails from '../components/WorkerDetails'
import ProfileCard from './ProfileCard'

const Home = () => {
  const [workers, setWorkers] = useState([])
  const [rworkers, setRworkers] = useState([])
  const [query, setQuery] = useState("")
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('http://localhost:5000/worker/allworker');
        setWorkers(response.data.users)
        setRworkers(response.data.users)
      } catch (error) {
        console.error('Error:', error);
      }
    })();
  },[])
  
  useEffect(() => {
    const filteredData = workers.filter(obj =>
      obj.type.toLowerCase().startsWith(query.toLowerCase())
    );
    setRworkers(filteredData)
  },[query])
  return (
<div class="container px-4 py-5" id="featured-3">
<Navbar query={query} setQuery={setQuery}/>
       {/* <h1 class="pb-2 border-bottom"></h1>*/}
        <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
          {rworkers.map((worker) => (
               <WorkerDetails worker={worker} />
          ))}
        </div>
      </div>
  )
}

export default Home