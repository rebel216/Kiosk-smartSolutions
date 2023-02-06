import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/styles/App.css';

const Main = () => {
  useEffect(() => {

  }, []);

  return (
      <>

      <div className="ticket">

<p>
                  <NavLink to="/RegisteredPost" className='main-link'>
                  RegisteredPost
          </NavLink> </p>


          <p>            <NavLink to="/SpeedPost" className='main-link'>
                  SpeedPost
          </NavLink>
          </p>


      </div>
    </>
  );
};

export default Main;
