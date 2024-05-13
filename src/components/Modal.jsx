import classes from "./Modal.module.css"
import { useNavigate } from "react-router-dom";

function Modal({ children }){
   const navigate = useNavigate();

   function closeHandler(){
      navigate('..')
   }
   return (
      <div>
        <div className={classes.backdrop} onClick={closeHandler}></div>
        <dialog open className={classes.modal}>
            {children}
        </dialog>
      </div>
   );
}
export default Modal