import "./adminPopups.css"
function AddHotelPopup({setShow}){
  return(
    <>
      <div className="pop-up-bg">
        <div className="pop-up-container">
          <button className="close-pop-up-button" onClick={()=> setShow(false)}>X</button>
          <h2>Add new hotel:</h2>
          <div className="popup-form-container">
            <form className="popup-form">
              <label for="name">Hotel Name:</label>
              <input className="popup-form-input" id="name" name="name" placeholder="Hotel Name..." required></input>
              <label for="type">Hotel Type:</label>
              <input className="popup-form-input" id="type" name="type" placeholder="Hotel Type..." required></input>
              <label for="city">City:</label>
              <input className="popup-form-input" id="city" name="city" placeholder="City..." required></input>
              <label for="address">Hotel Address:</label>
              <input className="popup-form-input" id="address" name="address" placeholder="Hotel Address..." required></input>
              <label for="distance">Distance(m):</label>
              <input className="popup-form-input" id="distance" name="distance" placeholder="Distance From Downtown..." type="number" min="0" required></input>
              <label for="title">Title:</label>
              <input className="popup-form-input" id="title" name="title" placeholder="Title..." required></input>
              <label for="cheapestPrice">Cheapest Price($):</label>
              <input className="popup-form-input" id="cheapestPrice" name="cheapestPrice" placeholder="Cheapest Price..." type="number" min="0" required></input>
              <label for="highestPrice">Highest Price($):</label>
              <input className="popup-form-input" id="highestPrice" name="highestPrice" placeholder="Highest Price..." type="number" min="0" required></input>
              <label for="rating">Rating*:</label>
              <input className="popup-form-input" id="rating" name="rating" placeholder="Rating..." type="number" min="0" max="5"></input>
              <label for="desc">Hotel Description:</label>
              <textarea className="popup-form-input" id="desc" name="desc" placeholder="Hotel Description..." cols="20"  required></textarea>
              <label for="photos">Photos*:</label>
              <input className="popup-form-input" id="photos" name="photos" type="file" multiple></input>
            </form>
          </div>
          <button className="pop-up-button">
            Add hotel
          </button>
        </div>
      </div>
    </>
  )
}
export default AddHotelPopup;