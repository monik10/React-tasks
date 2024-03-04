/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import  ReactDOM  from "react-dom";
console.log(ReactDOM);
const Modal = ({toggle:{toggle,handleToggle}}) => {
    console.log(toggle)
  return ReactDOM.createPortal( (
    <div id="modal-container">
<article className="container">
<span><button onClick={handleToggle}>{toggle ? "X":"open"}</button></span>
    <div className="modal-header">
    <h1>Login</h1>
    </div>
    <div className="modal-content">
        <form>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" placeholder="Enter Email"/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" placeholder="Enter Password"/>
            </div>
            <div className="form-group">
            <button>Login</button>
                
            </div>
        </form>
    </div>
    <div className="modal-footer">Footer</div>
</article>
    </div>
  ),document.getElementById("modal"))
}

export default Modal