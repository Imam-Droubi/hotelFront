import { useEffect, useState } from "react";
import "./adminPopups.css"
import axios from "axios";
function AddHotelPopup({setShow}){
  const [hotelData,setHotelData] = useState();
  const [showErr , setShowErr] = useState(false);
  const [errMessage, setErrMessage] = useState("Something is wrong, please check your information...");
  const handleAdding = async()=>{
    try{
      let res = await axios.post(`/hotels/` , hotelData)
      setShow(false);
    }catch(err){
      setErrMessage(err.response.message);
      setShowErr(true);
    }
  }
  const handleSubmitting = ()=>{
    if(!hotelData || !hotelData.name || !hotelData.type || !hotelData.city || !hotelData.address || !hotelData.distance || !hotelData.desc || !hotelData.title || !hotelData.cheapestPrice){
      setShowErr(true);
      return;
    }
    handleAdding();

  }
  useEffect(()=>{
    setShowErr(false);
  },[hotelData])
  return(
    <>
      <div className="pop-up-bg">
        <div className="pop-up-container">
          <button className="close-pop-up-button" onClick={()=> setShow(false)}>X</button>
          <h2>Add new hotel:</h2>
          <div className="popup-form-container">
            <form className="popup-form">
              <label>Hotel Name:</label>
              <input className="popup-form-input" id="name" placeholder="Hotel Name..." onChange={(e)=>setHotelData({...hotelData , name : e.target.value})} ></input>
              <label>Hotel Type:</label>
              <input className="popup-form-input" id="type" placeholder="Hotel Type..." onChange={(e)=>setHotelData({...hotelData , type : e.target.value})} ></input>
              <label>City:</label>
              <input className="popup-form-input" id="city" placeholder="City..." onChange={(e)=>setHotelData({...hotelData , city : e.target.value})} ></input>
              <label>Hotel Address:</label>
              <input className="popup-form-input" id="address" placeholder="Hotel Address..." onChange={(e)=>setHotelData({...hotelData , address : e.target.value})} ></input>
              <label>Distance(m):</label>
              <input className="popup-form-input" id="distance" placeholder="Distance From Downtown..." type="number" min="0" onChange={(e)=>setHotelData({...hotelData , distance : e.target.value})} ></input>
              <label>Title:</label>
              <input className="popup-form-input" id="title" placeholder="Title..." onChange={(e)=>setHotelData({...hotelData , title : e.target.value})} ></input>
              <label>Cheapest Price($):</label>
              <input className="popup-form-input" id="cheapestPrice" placeholder="Cheapest Price..." type="number" min="0" onChange={(e)=>setHotelData({...hotelData , cheapestPrice : e.target.value})} ></input>
              <label>Rating*:</label>
              <input className="popup-form-input" id="rating" placeholder="Rating..." type="number" min="0" max="5"onChange={(e)=>setHotelData({...hotelData , rating : e.target.value})} ></input>
              <label>Hotel Description:</label>
              <textarea className="popup-form-input" id="desc" placeholder="Hotel Description..." cols="20" onChange={(e)=>setHotelData({...hotelData , desc : e.target.value})} ></textarea>
              <label>Photos*:</label>
              <input className="popup-form-input" id="photos" type="file" multiple onChange={(e)=>setHotelData({...hotelData , photos : e.target.value})}></input>
              {showErr ? errMessage : null}
            </form>
          </div>
          <button onClick={handleSubmitting} className="pop-up-button">
            Add hotel
          </button>
        </div>
      </div>
    </>
  )
}
export default AddHotelPopup;