import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/styles/App.css';

const Main = () => {
  useEffect(() => {

  }, []);

  return (
      <>

      <div className="login-box">


                  <NavLink to="/RegisteredPost" className='link1'>
                  <div className="form-group mt-3 d-flex flex-column  align-items-center justify-content-center">
                <button  className="btn btn-primary w-75 mb-2">Registered Post</button></div>
          </NavLink> 
<br></br><br></br>
        <NavLink to="/SpeedPost" className='link1'>
          <div className="form-group mt-3 d-flex flex-column  align-items-center justify-content-center">
                <button  className="btn btn-primary w-75 mb-2">SpeedPost</button></div>
          </NavLink>
         


      </div>
    </>
  );
};

export default Main;
