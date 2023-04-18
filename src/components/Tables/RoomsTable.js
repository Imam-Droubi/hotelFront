import { useEffect, useState } from "react";
import "./tables.css"
import { TiDelete } from "react-icons/ti";
function RoomsTable({setChanged}) {
  const [rooms, setRooms] = useState([
    {
        "__id" : "640c72a148c5e882393b8d8b",
        "hotelId": "640c72a148c5e882393b8d8c",
        "title" : "King Room",
        "desc" : "King size bed, 1 bathroom, balconey",
        "price" : 150,
        "maxPeople" : 2,
        "roomNumbers" : [{"number" : 101} , {"number": 102}]
    },
    {
      "__id" : "640c72a148c5e882393b8d8b",
      "hotelId": "640c72a148c5e882393b8d8c",
      "title" : "Single Room",
      "desc" : "regular size bed, 1 bathroom, balconey",
      "price" : 100,
      "maxPeople" : 2,
      "roomNumbers" : [{"number" : 105} , {"number": 107}]
    },
    {
      "__id" : "640c72a148c5e882393b9d8b",
      "hotelId": "640c72a148c5e882393b8d8c",
      "title" : "Single Room",
      "desc" : "regular size bed, 1 bathroom, balconey",
      "price" : 150,
      "maxPeople" : 2,
      "roomNumbers" : [{"number" : 105} , {"number": 107}]
    }
  ]);
  const [changedRooms,setChangedRooms] = useState([]);

  function handleInput(index){
    setChanged(true);
    if(changedRooms.indexOf(index) === -1){
      setChangedRooms([...changedRooms , index]);
    }
  }
  function handleChangedInput(event,attr, index){
    let cRoom = rooms.at(index);
    cRoom[attr] = event.target.value ;
    setRooms(rooms.map((room,indx)=>{
      if(indx == index)room = cRoom;
      return room;
    }))
  }
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>Hotel ID</th>
            <th>Title</th>
            <th>MaxPeople</th>
            <th>Price</th>
            <th>Control</th>
          </tr>
        </thead>
        
        <tbody>
          {
            rooms.map((room,index)=>{
              return(
                <tr key={index+1}>
                  <td>
                    {index+1}
                  </td>
                  <td>
                    {room.__id}
                  </td>
                  <td>
                    {room.hotelId}
                  </td>
                  <td>
                    <input onInput={()=>{
                      handleInput(index+1);
                    }} type="text" value={room.title} onChange={(e)=> handleChangedInput(e,"title" , index)} ></input>
                  </td>
                  <td>
                    <input onInput={()=>{
                      handleInput(index+1);
                    }} type="text" value={room.maxPeople} onChange={(e)=> handleChangedInput(e,"maxPeople" , index)} ></input>
                  </td>
                  <td>
                    <input onInput={()=>{
                      handleInput(index+1);
                    }} type="text" value={room.price} onChange={(e)=> handleChangedInput(e,"price" , index)}></input>
                  </td>
                  <td>
                    <TiDelete className="delete-table-item"/>
                  </td>
                </tr>
              )
            })
          }
          
        </tbody>
      </table>
    </>
  );
}
export default RoomsTable;