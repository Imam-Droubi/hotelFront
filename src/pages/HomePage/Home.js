import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import Nav from "../../components/NavBar/Nav";
import UserTop from "../../components/NavBar/UserTop";
import "./home.css"
function Home(){
  const [isLogged, setIsLooged] = useState(false);
  const items =["Login" , "Register"];
  const loggedItems = ["ImamDroubi" , "Logout"];
  return(
    <>
    <div className="page">
      <img className="background" alt="background" src={require("../../assets/background.jpg")}/>
      <div className="container">
        <div className="top">
          <Logo />
          {isLogged? <UserTop setLogged={setIsLooged} items={loggedItems} /> :<Nav setLogged={setIsLooged} items = {items}/>}
        </div>
        <div className="main">
          <h1 className="hero-text">Feel Like Home...</h1>
          <h3 className="slogan">The best hotels with the best prices</h3>
          <Link to="/search" className="main-button home-button">Book Now!</Link>
        </div>
      </div>
    </div>
    </>
  )
};
export default Home;