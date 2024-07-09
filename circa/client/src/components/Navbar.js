

/*import React, { useEffect,useState } from 'react';
import axios from 'axios';

const Navbar = () => {

  const [me,setMe] = useState({})

  useEffect(() => {
    console.log("navbar")
    (async () => {
      try {
        const response = await axios.get(`http://localhost:5000/user/user`);
        console.log(response.data); // Handle response data as needed
        setMe(response.data)
        console.log("profile",me)
      } catch (error) {
        console.error('Error:', error);
      }
    })();

  },[])
  return (
    <nav className="navbar navbar-expand-lg rounded bg-primary-subtle" aria-label="Eleventh navbar example">
      <div className="container-fluid">
        <a className="navbar-brand" href="navbar.html">CIRCA</a>
        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-collapse collapse" id="navbarsExample09" >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
          </ul>
          <ul className="navbar-nav  mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Category</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Electrician</a></li>
                <li><a className="dropdown-item" href="#">Plumber</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/signup">Signup</a>
            </li>
          </ul>
          <button className="btn btn-primary mx-2">Live</button>
          <button className="btn btn-outline-primary"><a style={{textDecoration: 'none'}} href="profile.html">Profile</a></button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;*/

/*
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const handleLive = async() =>{
    
    if(user.isworker){
      axios.get('http://localhost:5000/worker/unlive', {
  withCredentials: true
})
.then(response => {
  console.log("n",response)
  window.location.reload()
})
.catch(error => {
  // Handle error
});
    }else{
      navigate('/worker')
    }
  }

  useEffect(() => {
    console.log("navbar",user);
    
  }, [user]); // Empty dependency array to run only once on mount

  return (
    <nav className="navbar navbar-expand-lg rounded bg-primary-subtle" aria-label="Eleventh navbar example">
      <div className="container-fluid">
        <a className="navbar-brand" href="navbar.html">CIRCA</a>
        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-collapse collapse" id="navbarsExample09" >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/home">{user.name}</a>
            </li>
          </ul>
          <ul className="navbar-nav  mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle"  data-bs-toggle="dropdown" aria-expanded="false">Category</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Electrician</a></li>
                <li><a className="dropdown-item" href="#">Plumber</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/signup">Signup</a>
            </li>
          </ul>
          <button className={`btn ${user?.isworker ? 'btn-primary' : 'btn-danger'} mx-2`} onClick={handleLive}>
      {user?.isworker ? 'Unlive' : 'Live'}
    </button>
          <button className="btn btn-outline-primary"><a style={{ textDecoration: 'none' }} href="profile.html">Profile</a></button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
*/


import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../context/UserContext';

const Navbar = ({query,setQuery}) => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const handleLive = async () => {
    if (user.isworker) {
      try {
        await axios.get('http://localhost:5000/worker/unlive', { withCredentials: true });
        window.location.reload();
      } catch (error) {
        console.error('Error:', error);
        // Handle error
      }
    } else {
      navigate('/worker');
    }
  };
  const handleSearch = (e) => {
    setQuery(e.target.value)
  };
  return (
    <nav className="navbar navbar-expand-lg rounded bg-primary-subtle" aria-label="Eleventh navbar example">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home">CIRCA</Link>
        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-collapse collapse" id="navbarsExample09">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/home">{user.name}</Link>
            </li>
          </ul>
       
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              value={query}
              onChange={handleSearch}
            />
            <button className="btn btn-outline-secondary" type="button" id="button-addon2">
              Search
            </button>
          </div>
          <button className={`btn ${user?.isworker ? 'btn-primary' : 'btn-danger'} mx-2`} onClick={handleLive}>
            {user?.isworker ? 'Unlive' : 'Live'}
          </button>
          <button className="btn btn-outline-primary"><Link to="/profile" style={{ textDecoration: 'none' }}>Profile</Link></button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
