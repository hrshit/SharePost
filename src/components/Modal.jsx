import classes from "./Modal.module.css"

function Modal({ children, onClose }){
   return (
      <div>
        <div className={classes.backdrop} onClick={onClose}></div>
        <dialog open className={classes.modal}>
            {children}
        </dialog>
      </div>
   );
}
export default Modal