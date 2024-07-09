import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';

const ProfileCard = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState({})
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`http://localhost:5000/worker/workerdetail/${id}`);
        console.log(response.data); // Handle response data as needed
        setProfile(response.data)
        console.log("profile",profile)
      } catch (error) {
        console.error('Error:', error);
      }
    })();

  },[])
  return (
    <>
    <Navbar />
    <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
      <div className="card p-4">
        <div className="image d-flex flex-column justify-content-center align-items-center">
          <button className="btn btn-secondary"> <img src="https://i.imgur.com/wvxPV9S.png" height="100" width="100" /></button>
          <span className="name mt-3">{profile.name}</span>
          <span className="idd">{profile.email}</span>
          <div className="d-flex flex-row justify-content-center align-items-center gap-2">
            <span className="idd1">{profile.contact}</span>
            <span><i className="fa fa-copy"></i></span>
          </div>
          <div className="d-flex flex-row justify-content-center align-items-center mt-3">
            <span className="number">Type <span className="follow">{profile.type}</span></span>
          </div>
     
          <div className="text mt-3">
            <span>{profile.skills}</span>
          </div>
          <div className="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center">
            <span><i className="fa fa-twitter"></i></span>
            <span><i className="fa fa-facebook-f"></i></span>
            <span><i className="fa fa-instagram"></i></span>
            <span><i className="fa fa-linkedin"></i></span>
          </div>
          <div className="px-2 rounded mt-4 date">
            <span className="join">{profile.city}</span>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default ProfileCard;
