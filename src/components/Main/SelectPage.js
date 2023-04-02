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
                  <button className='btn btn-primary w-75 mb-2 '>Send Data </button>
        </NavLink> 
        
        <br></br><br></br>

                <NavLink to="/devise" className='link1'>
                <button className='btn btn-primary w-75 mb-2'>Use Machine</button>
          </NavLink>
         


      </div>
    </>
  );
};

export default SelectPage;
