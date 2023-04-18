import { AuthContext } from "../../context/AuthContext";
import "./userInfoFields.css"
import { useContext, useState } from "react";

function UserInfoFields(){
  const {user} = useContext(AuthContext);
  const [currentUser, setCurrentUser] = useState(user);
  const [validPassChange , setValidPassChange] = useState(false);
  function handleChange(event, attr){
    let changedUser = currentUser;
    changedUser[attr] = event.target.value;
    setCurrentUser(changedUser);
  }
  function handlePasswordChange(event){
    let password = document.getElementById("new-pass").value; 
    if(event.target.value !== null && event.target.value === password){
      setValidPassChange(true);
    }else setValidPassChange(false);
  }
  return(
    <>
      <form className="user-info-form">
        <div className="form-element">
          <label>Full Name</label>
          <input type="text" value={currentUser.fullName} onChange={(e)=> handleChange(e,"fullName")}></input>
        </div>
        <div className="form-element">
          <label>Username</label>
          <input type="text" value={currentUser.userName} onChange={(e)=> handleChange(e,"userName")}></input>
        </div>
        <div className="form-element">
          <label>Email Address</label>
          <input type="text" value={currentUser.email} onChange={(e)=> handleChange(e,"email")}></input>
        </div>
        <div className="form-element">
          <label>Phone Number</label>
          <input type="text" value={currentUser.phoneNumber} onChange={(e)=> handleChange(e,"phoneNumber")}></input>
        </div>
        <div className="form-element">
          <label>Country</label>
          <input type="text" value={currentUser.country} onChange={(e)=> handleChange(e,"country")}></input>
        </div>
        <div className="form-element">
          <label>Address</label>
          <input type="text" value={currentUser.address} onChange={(e)=> handleChange(e,"address")}></input>
        </div>
        <div className="form-element">
          <label>New Password</label>
          <input id="new-pass" type="passwrod"></input>
        </div>
        <div className="form-element">
          <label>Confirm new Password</label>
          <input type="passwrod" onChange={(e)=> handlePasswordChange(e)}></input>
        </div>
        {console.log(validPassChange)}
      </form>
      <div className="user-info-form-buttons">
        <button className="save-changes-user-info">Save Changes</button>
        <button className="cancel-changes-user-info">Cancel</button>
      </div>
    </>
  )
}
export default UserInfoFields;