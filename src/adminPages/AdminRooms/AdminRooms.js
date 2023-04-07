import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import UserTop from "../../components/NavBar/UserTop";
import SideNavAdmin from "../../components/SideNavAdmin/SideNavAdmin";
import RoomsTable from "../../components/Tables/RoomsTable";
import "./adminRooms.css"
import HumburgerAdmin from "../../components/SideNavAdmin/HumburgerAdmin";
import { AiOutlineMenu } from "react-icons/ai";
import AddRoomPopup from "../../components/AdminPopups/AddRoomPopup";
function AdminRooms(){
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
  window.addEventListener("resize", ()=>{
    setWindowSize(window.innerWidth);
  })
  return(
    <>
    {showPopup && <AddRoomPopup setShow={setShowPopup}/>}
      <div className="admin-pages-container">
      {windowSize <= 992 && !menuShown?<AiOutlineMenu onClick={()=> showHumMenu()} className="humburger-controller"/> : null}
        <div className="admin-pages-sidebar">
          <div className="side-bar-container ">
          {windowSize > 992 ?
            <>
            <Logo/>
            <SideNavAdmin selected={"Rooms"}/>
            </>
            :
            <>
            <HumburgerAdmin menuShown = {menuShown} closeHumMenue = {closeHumMenue} selected={"Rooms"} />
            </>
          }
          </div>
        </div>
        <div className="admin-pages-content">
          <div className="users-content-container">
            <div className="users-page-top">
              <h1 className="table-title">Rooms</h1>
              <UserTop items={["imam_droubi" ,"logout"]}/>
            </div>
            <div className="users-content">
              <div className="table-container">
                <RoomsTable setChanged={setChanged}/>
              </div>
              <div className="control-buttons">
                <button onClick={()=> setShowPopup(true)} className="add-new-button">Add Room</button>
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

export default AdminRooms;