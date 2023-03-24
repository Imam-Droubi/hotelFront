import LoogedItems from "./LoggedItems";
function UserTop({items,setLogged}){
  return(
    <>
    <nav className="logged-nav">
      <LoogedItems setLogged={setLogged} items = {items} />
    </nav>
    </>
  )
};
export default UserTop;