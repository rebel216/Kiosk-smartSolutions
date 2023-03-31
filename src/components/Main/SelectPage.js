import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/styles/App.css';

const SelectPage = () => {
  useEffect(() => {

  }, []);

  return (
      <>

      <div className="login-box">


                  <NavLink to="/ExportToExcel" className='link'>
                  <h1>Download excel</h1>
          </NavLink> 

                <NavLink to="/" className='link'>
                <h1>Use Machine</h1>
          </NavLink>
         


      </div>
    </>
  );
};

export default SelectPage;
