import { useEffect, useState } from "react";
import "./tables.css"
import {TiDelete} from "react-icons/ti";
function UsersTable({setChanged}) {
  const [users, setUsers] = useState([
    {
      "__id" : "640cc9f3538a380d0bb41b27",
      "fullName" : "Imam Droubi",
      "userName" : "imam_droubi",
      "email" : "imam.droubi@gmail.com",
      "phoneNumber" : "0598654055",
      "passwrod" : "testPassword",
      "country" : "Palestine",
      "address" :"Tulkarm",
      "isAdmin" : true
    },
    {
      "__id" : "640cc9f3538a380d0bb41b28",
      "fullName" : "Imam Droubi",
      "userName" : "imam_droubi",
      "email" : "imam.droubi@gmail.com",
      "phoneNumber" : "0598654055",
      "passwrod" : "testPassword",
      "country" : "Palestine",
      "address" :"Tulkarm",
      "isAdmin" : false
    },
    {
      "__id" : "640cc9f3538a380d0bb41b29",
      "fullName" : "Imam Droubi",
      "userName" : "imam_droubi",
      "email" : "imam.droubi@gmail.com",
      "phoneNumber" : "0598654055",
      "passwrod" : "testPassword",
      "country" : "Palestine",
      "address" :"Tulkarm",
      "isAdmin" : true
    },
    {
      "__id" : "640cc9f3538a380d0bb41b27",
      "fullName" : "Imam Droubi",
      "userName" : "imam_droubi",
      "email" : "imam.droubi@gmail.com",
      "phoneNumber" : "0598654055",
      "passwrod" : "testPassword",
      "country" : "Palestine",
      "address" :"Tulkarm",
      "isAdmin" : true
    },
    {
      "__id" : "640cc9f3538a380d0bb41b28",
      "fullName" : "Imam Droubi",
      "userName" : "imam_droubi",
      "email" : "imam.droubi@gmail.com",
      "phoneNumber" : "0598654055",
      "passwrod" : "testPassword",
      "country" : "Palestine",
      "address" :"Tulkarm",
      "isAdmin" : false
    },
    {
      "__id" : "640cc9f3538a380d0bb41b29",
      "fullName" : "Imam Droubi",
      "userName" : "imam_droubi",
      "email" : "imam.droubi@gmail.com",
      "phoneNumber" : "0598654055",
      "passwrod" : "testPassword",
      "country" : "Palestine",
      "address" :"Tulkarm",
      "isAdmin" : true
    },
    {
      "__id" : "640cc9f3538a380d0bb41b27",
      "fullName" : "Imam Droubi",
      "userName" : "imam_droubi",
      "email" : "imam.droubi@gmail.com",
      "phoneNumber" : "0598654055",
      "passwrod" : "testPassword",
      "country" : "Palestine",
      "address" :"Tulkarm",
      "isAdmin" : true
    },
    {
      "__id" : "640cc9f3538a380d0bb41b28",
      "fullName" : "Imam Droubi",
      "userName" : "imam_droubi",
      "email" : "imam.droubi@gmail.com",
      "phoneNumber" : "0598654055",
      "passwrod" : "testPassword",
      "country" : "Palestine",
      "address" :"Tulkarm",
      "isAdmin" : false
    },
    {
      "__id" : "640cc9f3538a380d0bb41b29",
      "fullName" : "Imam Droubi",
      "userName" : "imam_droubi",
      "email" : "imam.droubi@gmail.com",
      "phoneNumber" : "0598654055",
      "passwrod" : "testPassword",
      "country" : "Palestine",
      "address" :"Tulkarm",
      "isAdmin" : true
    },
    {
      "__id" : "640cc9f3538a380d0bb41b27",
      "fullName" : "Imam Droubi",
      "userName" : "imam_droubi",
      "email" : "imam.droubi@gmail.com",
      "phoneNumber" : "0598654055",
      "passwrod" : "testPassword",
      "country" : "Palestine",
      "address" :"Tulkarm",
      "isAdmin" : true
    },
    {
      "__id" : "640cc9f3538a380d0bb41b28",
      "fullName" : "Imam Droubi",
      "userName" : "imam_droubi",
      "email" : "imam.droubi@gmail.com",
      "phoneNumber" : "0598654055",
      "passwrod" : "testPassword",
      "country" : "Palestine",
      "address" :"Tulkarm",
      "isAdmin" : false
    },
    {
      "__id" : "640cc9f3538a380d0bb41b29",
      "fullName" : "Imam Droubi",
      "userName" : "imam_droubi",
      "email" : "imam.droubi@gmail.com",
      "phoneNumber" : "0598654055",
      "passwrod" : "testPassword",
      "country" : "Palestine",
      "address" :"Tulkarm",
      "isAdmin" : true
    }
  ]);
  const [changedUsers,setChangedUsers] = useState([]);

  function handleInput(index){
    setChanged(true);
    if(changedUsers.indexOf(index) === -1){
      setChangedUsers([...changedUsers , index]);
    }
  }
  function handleChangedInput(event,attr, index){
    let cUser = users.at(index);
    cUser[attr] = attr === "isAdmin" ? event.target.value === "admin" ? true : false  : event.target.value ;
    setUsers(users.map((user,indx)=>{
      if(indx == index)user = cUser;
      return user;
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
            <th>Email</th>
            <th>Address</th>
            <th>Role</th>
            <th>Control</th>
          </tr>
        </thead>
        
        <tbody>
          {
            users.map((user,index)=>{
              return(
                <tr key={index+1}>
                  <td>
                    {index+1}
                  </td>
                  <td>
                    {user.__id}
                  </td>
                  <td>
                    <input onInput={()=>{
                      handleInput(index+1);
                    }} type="text" value={user.fullName} onChange={(e)=> handleChangedInput(e,"fullName" , index)}></input>
                  </td>
                  <td>
                    <input onInput={()=>{
                      handleInput(index+1);
                    }} type="email" value={user.email} onChange={(e)=> handleChangedInput(e,"email" , index)}></input>
                  </td>
                  <td>
                    <input onInput={()=>{
                      handleInput(index+1);
                    }} type="text" value={user.address} onChange={(e)=> handleChangedInput(e,"address" , index)}></input>
                  </td>
                  <td>
                    <select onInput={()=>{
                      handleInput(index+1);
                    }} defaultValue={user.isAdmin?"admin":"user"} onChange={(e)=> handleChangedInput(e,"isAdmin" , index)}>
                      <option value="user">User</option>
                      <option value="admin">Admin</option>
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
export default UsersTable;