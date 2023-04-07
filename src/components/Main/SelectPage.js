import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/styles/App.css';

const SelectPage = () => {
  useEffect(() => {

  }, []);

  return (
      <>

      <div className="login-box">


                  <NavLink to="/ExportToExcel" className='link1'>
                 <div className="form-group mt-3 d-flex flex-column  align-items-center justify-content-center">
                <button  className="btn btn-primary w-75 mb-2">Send Data</button></div>
        </NavLink> 
        
        <br></br><br></br>

                <NavLink to="/devise" className='link1'>
               <div className="form-group mt-3 d-flex flex-column  align-items-center justify-content-center">
                <button  className="btn btn-primary w-75 mb-2">Use Machine</button></div>
          </NavLink>
         


      </div>
    </>
  );
};

export default SelectPage;
