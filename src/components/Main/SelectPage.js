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
                  <button className='link'>Send Data to registered Email</button>
        </NavLink> 
        
        <br></br><br></br>

                <NavLink to="/" className='link1'>
                <button className='link'>Use Machine</button>
          </NavLink>
         


      </div>
    </>
  );
};

export default SelectPage;
