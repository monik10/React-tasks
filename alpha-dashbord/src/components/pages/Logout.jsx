/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './Logout.css';
import toast from 'react-hot-toast';

const Logout = ({ data ,val}) => {
  let{handleLogout,openPopup,closePopup}=data;
  let{isOpen}=val;
  // const [isOpen, setIsOpen] = useState(false);

  // const handleLogout = (confirmed) => {
  //   setIsOpen(false);

  //   if (confirmed) {
  //     if (onLogout) {
  //       onLogout();
  //     }
  //   }
  // };

  // const openPopup = () => {
  //   setIsOpen(true);
  // };

  // const closePopup = () => {
  //   setIsOpen(false);
  // };

  return (
    <>

      {isOpen && ReactDOM.createPortal(
        <div className='popup-overlay'>
          <section className='blur-background' onClick={closePopup}>
            <article className='logout-container' onClick={(e) => e.stopPropagation()}>
              <div className='inner-logout-container'>
                <div className='logout-content'>Are you sure you want to logout?</div>
                <div className='button-container'>
                  <button onClick={() => handleLogout(true)}>Yes</button>
                  <button onClick={() => handleLogout(false)}>No</button>
                </div>
              </div>
            </article>
          </section>
        </div>,
        document.getElementById("logout")
      )}
    </>
  );
};

export default Logout;
