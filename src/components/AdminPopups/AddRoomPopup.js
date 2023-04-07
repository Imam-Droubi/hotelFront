import "./adminPopups.css"
function AddRoomPopup({setShow}){
  return(
    <>
      <div className="pop-up-bg">
        <div className="pop-up-container">
          <button className="close-pop-up-button" onClick={()=> setShow(false)}>X</button>
          <h2>Add new room:</h2>
          <div className="popup-form-container">
            <form className="popup-form">
              <label for="title">Title:</label>
              <input className="popup-form-input" id="title" name="title" placeholder="Title..." required></input>
              <label for="hotelId">Hotel ID:</label>
              <input className="popup-form-input" id="hotelId" name="hotelId" placeholder="Hotel ID..." required></input>
              <label for="price">Price($):</label>
              <input className="popup-form-input" id="price" name="price" placeholder="Price..." type="number" min="0" required></input>
              <label for="maxPeople">Max People:</label>
              <input className="popup-form-input" id="maxPeople" name="maxPeople" placeholder="Max People..." type="number" min="0"></input>
              <label for="roomNumbers">Rooms Numbers:</label>
              <input className="popup-form-input" id="roomNumbers" name="roomNumbers" placeholder="Rooms Numbers...(ex: 1,2,3...)" type="text"></input>
              <label for="desc">Room Description:</label>
              <textarea className="popup-form-input" id="desc" name="desc" placeholder="Room Description..." cols="20"  required></textarea>
            </form>
          </div>
          <button className="pop-up-button">
            Add room
          </button>
        </div>
      </div>
    </>
  )
}
export default AddRoomPopup;