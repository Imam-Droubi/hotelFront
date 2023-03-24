import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import UserTop from "../../components/NavBar/UserTop";
import SideNavAdmin from "../../components/SideNavAdmin/SideNavAdmin";
import RoomsTable from "../../components/Tables/RoomsTable";
import "./adminRooms.css"
function AdminRooms(){
  const [changed , setChanged] = useState(false);

  return(
    <>
      <div className="admin-pages-container">
        <div className="admin-pages-sidebar">
          <div className="side-bar-container">
            <Logo/>
            <SideNavAdmin selected={"Rooms"}/>
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
                <button disabled={!changed} className="save-changes-button">Save changes</button>
                <button disabled={!changed} className="cancel-button">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminRooms;