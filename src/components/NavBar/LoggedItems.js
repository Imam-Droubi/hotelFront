function LogedItems({items, setLogged}){
  return(
    <>
      {
        items.map((item, index)=>{
          return <li key={index}><a  onClick={item === "Logout" ? ()=>setLogged(false) : null}>{item}</a></li>
        })
      }
    </>
  )
};
export default LogedItems;