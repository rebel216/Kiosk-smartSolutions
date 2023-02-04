import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/styles/App.css';

const Main = () => {
  useEffect(() => {

  }, []);

  return (
      <>

      <div className="container">


                  <NavLink to="/RegisteredPost" className='main-link'>
                  RegisteredPost
          </NavLink>


                  <NavLink to="/SpeedPost" className='main-link'>
                  SpeedPost
          </NavLink>


      </div>
    </>
  );
};

export default Main;
