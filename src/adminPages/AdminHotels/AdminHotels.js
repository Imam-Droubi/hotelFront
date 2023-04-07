import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import UserTop from "../../components/NavBar/UserTop";
import SideNavAdmin from "../../components/SideNavAdmin/SideNavAdmin";
import HotelsTable from "../../components/Tables/HotelsTable";
import "./adminHotels.css"
import { AiOutlineMenu } from "react-icons/ai";
import HumburgerAdmin from "../../components/SideNavAdmin/HumburgerAdmin";
import AddHotelPopup from "../../components/AdminPopups/AddHotelPopup";
function AdminHotels(){
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
      {showPopup && <AddHotelPopup setShow={setShowPopup}/>}
      <div className="admin-pages-container">
      {windowSize <= 992 && !menuShown?<AiOutlineMenu onClick={()=> showHumMenu()} className="humburger-controller"/> : null}
        <div className="admin-pages-sidebar">
          <div className="side-bar-container ">
          {windowSize > 992 ?
            <>
            <Logo/>
            <SideNavAdmin selected={"Hotels"}/>
            </>
            :
            <>
            <HumburgerAdmin menuShown = {menuShown} closeHumMenue = {closeHumMenue} selected={"Hotels"} />
            </>
          }
          </div>
        </div>
        <div className="admin-pages-content">
          <div className="users-content-container">
            <div className="users-page-top">
              <h1 className="table-title">Hotels</h1>
              <UserTop items={["imam_droubi" ,"logout"]}/>
            </div>
            <div className="users-content">
              <div className="table-container">
                <HotelsTable setChanged={setChanged}/>
              </div>
              <div className="control-buttons">
                <button onClick={()=> setShowPopup(true)} className="add-new-button">Add Hotel</button>
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

export default AdminHotels;