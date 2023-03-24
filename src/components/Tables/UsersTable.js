import { useEffect, useState } from "react";
import "./tables.css"
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
    }
  ]);
  const [changedUsers,setChangedUsers] = useState([]);

  function handleInput(index){
    setChanged(true);
    if(changedUsers.indexOf(index) === -1){
      setChangedUsers([...changedUsers , index]);
    }

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
                    }} type="text" placeholder={user.fullName}></input>
                  </td>
                  <td>
                    <input onInput={()=>{
                      handleInput(index+1);
                    }} type="email" placeholder={user.email}></input>
                  </td>
                  <td>
                    <input onInput={()=>{
                      handleInput(index+1);
                    }} type="text" placeholder={user.address}></input>
                  </td>
                  <td>
                    <select onInput={()=>{
                      handleInput(index+1);
                    }} defaultValue={user.isAdmin?"admin":"user"}>
                      <option value="user">User</option>
                      <option value="admin">Admin</option>
                    </select>
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