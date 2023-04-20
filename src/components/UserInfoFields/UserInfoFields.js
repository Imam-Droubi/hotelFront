import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./userInfoFields.css"
import { useContext, useEffect, useState } from "react";
import axios from "axios";

function UserInfoFields(){
  const {user} = useContext(AuthContext);
  const [newData , setNewData] = useState({});
  const navigate = useNavigate();
  const updateUser = async()=>{
    try{
      const res = await axios.put(`/users/${user._id}`, newData);
      console.log(res.data);
    }catch(err){
      throw(err);
    }
  }
  const handleUpdate = ()=>{
    updateUser();
  }
  useEffect(()=>{
    if(user)setNewData(user);
    const link = window.location.href.split("/") ;
    const userId = link[link.length-1] ;
    if(user && user._id !== userId){
      navigate(`/errors/notauth`);
    }
  },[user])
  return(
    newData && <>
      <form className="user-info-form">
        <div className="form-element">
          <label>Full Name</label>
          <input type="text" value={newData.fullName} onChange={(e)=>setNewData({...newData , fullName: e.target.value})}></input>
        </div>
        <div className="form-element">
          <label>Username</label>
          <input type="text" value={newData.userName} onChange={(e)=>setNewData({...newData , userName: e.target.value})}></input>
        </div>
        <div className="form-element">
          <label>Email Address</label>
          <input type="text" value={newData.email} onChange={(e)=>setNewData({...newData , email: e.target.value})}></input>
        </div>
        <div className="form-element">
          <label>Phone Number</label>
          <input type="text" value={newData.phoneNumber} onChange={(e)=>setNewData({...newData , phoneNumber: e.target.value})}></input>
        </div>
        <div className="form-element">
          <label>Country</label>
          <input type="text" value={newData.country} onChange={(e)=>setNewData({...newData , country: e.target.value})}></input>
        </div>
        <div className="form-element">
          <label>Address</label>
          <input type="text" value={newData.address} onChange={(e)=>setNewData({...newData , address: e.target.value})}></input>
        </div>
        {/* <div className="form-element">
          <label>New Password</label>
          <input id="new-pass" type="passwrod"></input>
        </div>
        <div className="form-element">
          <label>Confirm new Password</label>
          <input type="passwrod" ></input>
        </div> */}
      </form>
      <div className="user-info-form-buttons">
        <button onClick={handleUpdate} className="save-changes-user-info">Save Changes</button>
        <button onClick={()=>setNewData(user)} className="cancel-changes-user-info">Cancel</button>
      </div>
    </>
  )
}
export default UserInfoFields;