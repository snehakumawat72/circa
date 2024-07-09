import './App.css';
import { Route, Routes, Navigate } from "react-router-dom";
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Home from './pages/Home';
import Worker from './pages/Worker';
import Logout from './pages/Logout';
import ProfileCard from './pages/ProfileCard';

function App() {
  return (
    <Routes>
    <Route path="/signup" exact element={<SignUp />} />
    <Route path="/login" exact element={<Login />} />
    <Route path="/home" exact element={<Home />} />
    <Route path="/worker" exact element={<Worker />} />
    <Route path="/logout" exact element={<Logout />} />
    <Route path="/profile/:id" exact element={<ProfileCard />} />
    </Routes>
  );
}

export default App;
