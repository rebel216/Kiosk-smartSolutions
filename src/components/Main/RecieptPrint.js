import React, { Component } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'

// move the motor here.

const RecieptPrint = () => {

    const navigate = useNavigate();
    const today = new Date(),
    time =  new Date().toLocaleString()
  const handleClick = () => {
    window.print()
    navigate("/success")
  }
  var user = JSON.parse(sessionStorage.user);


    return (
        <>

      <div className="login-box">

      <img src={logo} alt="Logo" className="logo"/>

                <h3 className="centered"> Name: {user.user.fname}<span>  </span>{user.user.lname}</h3>
                <h3 className="centered">Date:<span>  </span> {time} </h3>
                <h3 className="centered">Tracking No:<span>  </span>{user.user.barcode}</h3>
                <h3 className="centered">Weight:<span>  </span>{user.user.weight1}</h3>
                <h3 className="centered">  From :<span>  </span>{user.user.state1}</h3>
                <h3 className="centered">  To:<span>  </span>{user.user.state2}</h3>
                <h3 className="centered"> Mobile:<span>  </span>{user.user.phone1}</h3>
                <h3 className="centered">  Paid: Rs.<span>  </span>{user.user.price}</h3>


            <button className='main-button' onClick={handleClick}>PRINT</button>
      </div>
      </>
    )

}

export default RecieptPrint
