import axios from "axios";
import "./deletionPopup.css";
function DeletionPopup(props){
  const deleteItem = async (url)=>{
    try{
      let res ;
      if(props.hotelId){
        res = await axios.delete(`${url}/${props.elementId}/${props.hotelId}`);
      }else{
        res = await axios.delete(`${url}/${props.elementId}`);
      }
      props.setShow(false);
    }catch(err){
      throw (err);
    }
  }
  console.log(props.elementId);
  const handleDeleteClick = ()=>{
    deleteItem(props.deletionUrl);
  }
  return(
    <>
      <div className="pop-up-bg">
        <div className="deletion-pop-up-container">
          <button className="close-deletion-pop-up-button" onClick={()=> props.setShow(false)}>X</button>
            <p>{props.message}</p>
            <div className="deletion-popup-buttons">
          <button onClick={handleDeleteClick} className="deletion-confirm-button">
              Delete
            </button>
            <button onClick={()=> props.setShow(false)} className="deletion-cancel-button">
              Cancel
            </button>
          </div>
        </div>
        
      </div>
    </>
  )
}
export default DeletionPopup;