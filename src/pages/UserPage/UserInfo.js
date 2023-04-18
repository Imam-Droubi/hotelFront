import "./userInfo.css"
import { useContext, useEffect, useState } from "react";
import UserInfoFields from "../../components/UserInfoFields/UserInfoFields";
import Logo from "../../components/Logo/Logo"
import LoggedItems from "../../components/NavBar/LoggedItems"
import Reservations from "../../components/Reservations/Reservations";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
function UserInfo(){
  const link = window.location.href.split("/") ;
  const userId = link[link.length-1];
  const {user} = useContext(AuthContext);
  const [showUserInfo , setShowUserInfo] = useState(true);
  const navigate = useNavigate();
  useEffect(()=>{
    if(!user)navigate("/login");
    if(user && user._id !== userId){
      navigate("/errors/notauth");
    }
  },[user])
  return(
    user && <>
      <div className="user-page">
          <div className="user-page-top-bar">
            <div className="user-page-top-container">
              <Logo/>
              <ul className="user-page-top-info">
                <LoggedItems items={[user.userName , "Logout"]}/>
              </ul>
            </div>
          </div>
        <div className="user-page-container">
          <div className="user-page-content">
            <div className="user-left-content">
              <div className="user-profile-picture">
                <img src={user.profilePic}></img>
              </div>
              <h3>{user.fullName}</h3>
            </div>
            <div className="user-right-content">
              <div className="user-right-headers">
                <h2 onClick={()=> setShowUserInfo(!showUserInfo)} id="user-informations" className={showUserInfo ? "user-page-selected" : "" }><a>User Info</a></h2>
                <h2 onClick={()=> setShowUserInfo(!showUserInfo)} id="user-reservations" className={!showUserInfo ? "user-page-selected" : "" }><a>Reservations</a></h2>
              </div>
              <div className="user-right-content-content">
                {showUserInfo ? 
                <UserInfoFields />
                :
                <Reservations/>
              }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserInfo;