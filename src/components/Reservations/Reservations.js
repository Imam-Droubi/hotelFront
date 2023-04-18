import { useState } from "react";
import "./reservations.css";
import { ImCancelCircle } from "react-icons/im";
import { Link  } from "react-router-dom";
function Reservations({user, navigate}){
  const [reservations , setReservations] = useState(
    [
      {
        "__id" : "640cc9f3638a380d0bb41b27",
        "userId" : "640cc9f3538a380d0bb41b27",
        "hotelId" : "640c72a148c5e882393b8d8b",
        "hotelName" : "Royal Court Hotel",
        "checkInDate" : "23rd-Mar-2023",
        "checkOutDate" : "25th-Mar-2023",
        "cost" : 150,
        "rooms" :[101,102]
      },
      {
        "__id" : "640cc9f3638a380d0bb41b27",
        "userId" : "640cc9f3538a380d0bb41b27",
        "hotelId" : "640c72a148c5e882393b8d8b",
        "hotelName" : "Royal Court Hotel",
        "checkInDate" : "23rd-Mar-2023",
        "checkOutDate" : "25th-Mar-2023",
        "cost" : 150,
        "rooms" :[101,102]
      },
      {
        "__id" : "640cc9f3638a380d0bb41b27",
        "userId" : "640cc9f3538a380d0bb41b27",
        "hotelId" : "640c72a148c5e882393b8d8b",
        "hotelName" : "Royal Court Hotel",
        "checkInDate" : "20th-Feb-2023",
        "checkOutDate" : "22nd-Feb-2023",
        "cost" : 150,
        "rooms" :[101,102]
      }
    ]
  );

  return(
    <>
      <div className="reservations-container">
        {
          reservations.map((reservation, index)=>{
            return(
              <div className="reservation-card" key={index}>
                <div className="reservation-left-section">
                  <h3 onClick={()=> navigate(`/hotel/${reservation.hotelId}`)}>{reservation.hotelName}</h3>
                  <p>{reservation.checkInDate} - {reservation.checkOutDate}</p>
                  <p>Rooms: {reservation.rooms.map((room,ind) => ind == reservation.rooms.length -1 ? room : room + ",")}</p>
                </div>
                <div className="reservation-right-section">
                  <h3>${reservation.cost}</h3>
                  <button className="cancel-reservation">Cancel</button>
                </div>
              </div>
            )
          })
        }
        
        
      </div>
    </>
  )
}
export default Reservations;