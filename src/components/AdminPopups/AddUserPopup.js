import "./adminPopups.css"
function AddUserPopup({setShow}){
  return(
    <>
      <div className="pop-up-bg">
        <div className="pop-up-container">
          <button className="close-pop-up-button" onClick={()=> setShow(false)}>X</button>
          <h2>Add new user:</h2>
          <div className="popup-form-container">
            <form className="popup-form">
              <label for="fullName">Full Name:</label>
              <input className="popup-form-input" id="fullName" name="fullName" placeholder="Full Name..." required></input>
              <label for="userName">Username:</label>
              <input className="popup-form-input" id="userName" name="userName" placeholder="Username..." required></input>
              <label for="email">Email Address:</label>
              <input className="popup-form-input" id="email" name="email" placeholder="Email Address..." required></input>
              <label for="phoneNumber">Phone number:</label>
              <input className="popup-form-input" id="phoneNumber" name="phoneNumber" placeholder="Phone Number..." required></input>
              <label for="password">Password:</label>
              <input className="popup-form-input" id="password" name="password" placeholder="Password..." required></input>
              <label for="repeatPasswrod">Repeat Password:</label>
              <input className="popup-form-input" id="repeatPasswrod" name="repeatPasswrod" placeholder="Confirm Passwrod..." required></input>
              <label for="country">Country:</label>
              <input className="popup-form-input" id="country" name="country" placeholder="Country..." required></input>
              <label for="address">Address:</label>
              <input className="popup-form-input" id="address" name="address" placeholder="Address..." required></input>
            </form>
          </div>
          <button className="pop-up-button">
            Add user
          </button>
        </div>
      </div>
    </>
  )
}
export default AddUserPopup;