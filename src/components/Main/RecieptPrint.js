import React, { Component } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'
import { useState } from "react";

// move the motor here.

const RecieptPrint = () => {
  const [isPrinting, setIsPrinting] = useState(false);
    const navigate = useNavigate();
    const today = new Date(),
    time =  new Date().toLocaleString()
  const handleClick = () => {
    setIsPrinting(true);
    window.print()
    navigate("/success")
  }
  var user = JSON.parse(sessionStorage.user);


  return (
      <>
      <div className=''>

      <div className="print-form">



<h3 className="centered"> Name: {user.user.fname}<span>  </span>{user.user.lname}</h3>
<h3 className="centered">Date:<span>  </span> {time} </h3>
<h3 className="centered">Tracking No:<span>  </span>{user.user.barcode}</h3>
<h3 className="centered">Weight:<span>  </span>{user.user.weight1}</h3>
<h3 className="centered">  From :<span>  </span>{user.user.state1}</h3>
<h3 className="centered">  To:<span>  </span>{user.user.state2}</h3>
<h3 className="centered"> Mobile:<span>  </span>{user.user.phone1}</h3>
<h3 className="centered">  Paid: Rs.<span>  </span>{user.user.price}</h3>


        </div> {!isPrinting &&  (<div className="print_btn">
          <div className="form-group mt-3 d-flex flex-column  align-items-center justify-content-center">

        <button className='print btn btn-primary w-95 mb-2' onClick={handleClick}>Print</button>
      </div>
        </div>)}
       </div>
    </>
    )

}

export default RecieptPrint
