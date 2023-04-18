import { useEffect, useState } from "react";
import "./tables.css"
import { TiDelete } from "react-icons/ti";
function HotelsTable({setChanged}) {
  const [hotels, setHotels] = useState([
    {
      "__id" : "640c72a148c5e882393b8d8b",
      "name" : "First Hotel",
      "type" : "hotel",
      "city" : "Ramallah",
      "address" : "somewhere",
      "distace" : 200,
      "desc" : "Feel Like Home!",
      "title" : "Hotel Title",
      "rating" : 4,
      "cheapestPrice" : 100,
      "featured" : false,
      "photos": [
        "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      ],
      "rooms" : [
        "640c72a148c5e882393b8d8b",
        "640c72a148c5e882393b8d9b"
      ]
    },
    {
      "__id" : "640c72a148c5e882393b8d9b",
      "name" : "Second Hotel",
      "type" : "hotel",
      "city" : "Ramallah",
      "address" : "somewhere",
      "distace" : 200,
      "desc" : "Feel Like Home!",
      "title" : "Hotel Title",
      "rating" : 2,
      "cheapestPrice" : 150,
      "featured" : false,
      "photos": [
        "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      ],
      "rooms" : [
        "640c72a148c5e882393b8d8b",
        "640c72a148c5e882393b8d9b"
      ]
    },
    {
      "__id" : "640c72a148c5e882393b8d9c",
      "name" : "Third Hotel",
      "type" : "hotel",
      "city" : "Ramallah",
      "address" : "somewhere",
      "distace" : 200,
      "desc" : "Feel Like Home!",
      "title" : "Hotel Title",
      "rating" : 4,
      "cheapestPrice" : 200,
      "featured" : true,
      "photos": [
        "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      ],
      "rooms" : [
        "640c72a148c5e882393b8d8b",
        "640c72a148c5e882393b8d9b"
      ]
    }
  ]);
  const [changedHotels,setChangedHotels] = useState([]);

  function handleInput(index){
    setChanged(true);
    if(changedHotels.indexOf(index) === -1){
      setChangedHotels([...changedHotels , index]);
    }
  }
  function handleChangedInput(event,attr, index){
    let cHotel = hotels.at(index);
    cHotel[attr] = attr === "featured" ? event.target.value === "YES" ? true : false  : event.target.value ;
    setHotels(hotels.map((hotel,indx)=>{
      if(indx == index)hotel = cHotel;
      return hotel;
    }))
  }
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Address</th>
            <th>Featured</th>
            <th>Control</th>
          </tr>
        </thead>
        
        <tbody>
          {
            hotels.map((hotel,index)=>{
              return(
                <tr key={index+1}>
                  <td>
                    {index+1}
                  </td>
                  <td>
                    {hotel.__id}
                  </td>
                  <td>
                    <input onInput={()=>{
                      handleInput(index+1);
                    }} type="text" value={hotel.name} onChange={(e)=> handleChangedInput(e,"name" , index)}></input>
                  </td>
                  <td>
                    <input onInput={()=>{
                      handleInput(index+1);
                    }} type="text" value={hotel.type} onChange={(e)=> handleChangedInput(e,"type" , index)} ></input>
                  </td>
                  <td>
                    <input onInput={()=>{
                      handleInput(index+1);
                    }} type="text" value={hotel.address} onChange={(e)=> handleChangedInput(e,"address" , index)}></input>
                  </td>
                  <td>
                    <select onInput={()=>{
                      handleInput(index+1);
                    }} defaultValue={hotel.featured}>
                      <option value="true">YES</option>
                      <option value="false">NO</option>
                    </select>
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
export default HotelsTable;