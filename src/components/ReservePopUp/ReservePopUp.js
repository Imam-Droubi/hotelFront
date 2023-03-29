import "./reservePopUp.css";
function ReservePopUp({show,setShow}){
  return(
    <>
      <div className="pop-up-bg">
        <div className="pop-up-container">
          <button className="close-pop-up-button" onClick={()=> setShow(!show)}>X</button>
          <h2>Select your rooms:</h2>
          <div className="rooms-contianer">
            <div className="pop-up-room-container">
              <div className="pop-up-room-info">
                <h3>Deluxe Room</h3>
                <p>King size bed, 1 bathroom, balconey</p>
                <p className="max-people">Max people: 2</p>
                <h4>$150</h4>
              </div>
              <div className="pop-up-room-numbers">
              <div className="square-component">
                  {/* <p className="room-number">101</p>
                  <div className="square"></div> */}
                  <label className="room-number" for="aa">101</label>
                  <input className="square" type="checkbox" id="aa"></input>
                </div>
              </div>
            </div>

          </div>
          <button className="pop-up-button">
            Reserve Now!
          </button>
        </div>
      </div>
    </>
  )
}
export default ReservePopUp;