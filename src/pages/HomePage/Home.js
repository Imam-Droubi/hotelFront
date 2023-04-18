import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import Nav from "../../components/NavBar/Nav";
import UserTop from "../../components/NavBar/UserTop";
import "./home.css"
import { AuthContext } from "../../context/AuthContext";
function Home(){
  const {user} = useContext(AuthContext);
  const navigate = useNavigate();
  const items =["Login" , "Register"];
  return(
    <>
    <div className="page">
      <img className="background" alt="background" src={require("../../assets/background.jpg")}/>
      <div className="container">
        <div className="top">
          <Logo />
          {user? <UserTop  items={[user.userName , "Logout"]} /> :<Nav items = {items}/>}
        </div>
        <div className="main">
          <h1 className="hero-text">Feel Like Home...</h1>
          <h3 className="slogan">The best hotels with the best prices</h3>
          <Link to={user? "/search" : "/login"} className="main-button home-button">Book Now!</Link>
        </div>
      </div>
    </div>
    </>
  )
};
export default Home;