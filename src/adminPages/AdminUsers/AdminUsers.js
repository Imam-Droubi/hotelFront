import { useContext, useEffect, useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import UserTop from "../../components/NavBar/UserTop";
import SideNavAdmin from "../../components/SideNavAdmin/SideNavAdmin";
import HumburgerAdmin from "../../components/SideNavAdmin/HumburgerAdmin";
import UsersTable from "../../components/Tables/UsersTable";
import {AiOutlineMenu} from "react-icons/ai"
import "./adminUsers.css"
import AddUserPopup from "../../components/AdminPopups/AddUserPopup";
import { AuthContext } from "../../context/AuthContext";
function AdminUsers(){
  const {user}= useContext(AuthContext);
  const navigate = useNavigate();
  const [changed , setChanged] = useState(false);
  const [windowSize , setWindowSize] = useState(window.innerWidth);
  const [menuShown , setMenuShown] = useState(false);
  const [showPopup , setShowPopup] = useState(false);

  const  showHumMenu = ()=>{
    setMenuShown(true);
    let container = document.getElementsByClassName("admin-pages-sidebar")[0];
    let sideContainer = document.getElementsByClassName("side-bar-container")[0];
    container.classList.add("humburger");
    sideContainer.classList.add("humburger-container")
  }
  const closeHumMenue = ()=>{
    setMenuShown(false);
    let container = document.getElementsByClassName("admin-pages-sidebar")[0];
    let sideContainer = document.getElementsByClassName("side-bar-container")[0];
    container.classList.remove("humburger");
    sideContainer.classList.remove("humburger-container")
  }
  useEffect(()=>{
    window.addEventListener("resize", ()=>{
      setWindowSize(window.innerWidth);
    })
    if(!user) navigate("/errors/notauth");
  },[user])
  
  return(
    user && <>
      {showPopup && <AddUserPopup setShow={setShowPopup}/>}
      <div className="admin-pages-container">
      {windowSize <= 992 && !menuShown?<AiOutlineMenu onClick={()=> showHumMenu()} className="humburger-controller"/> : null}
        <div className="admin-pages-sidebar">
          <div className="side-bar-container ">
          {windowSize > 992 ?
            <>
            <Logo/>
            <SideNavAdmin selected={"Users"}/>
            </>
            :
            <>
            <HumburgerAdmin menuShown = {menuShown} closeHumMenue = {closeHumMenue} selected={"Users"}/>
            </>
          }
          </div>
        </div>
        <div className="admin-pages-content">
          <div className="users-content-container">
            <div className="users-page-top">
              <h1 className="table-title">Users</h1>
              <UserTop items={[user.userName ,"Logout"]}/>
            </div>
            <div className="users-content">
              <div className="table-container">
                <UsersTable setChanged={setChanged}/>
              </div>
              <div className="control-buttons">
                <button onClick={()=> setShowPopup(true)} className="add-new-button">Add User</button>
                <div className="right-side-buttons">
                  <button disabled={!changed} className="save-changes-button">Save changes</button>
                  <button disabled={!changed} className="cancel-button">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminUsers;