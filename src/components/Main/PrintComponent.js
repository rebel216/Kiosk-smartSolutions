import React, { useRef } from "react";
import Barcode from 'react-barcode';
import { Navigate, useNavigate } from "react-router-dom";
import logo from '../assets/images/logo.png'

export default function PrintComponent() {
  const navigate = useNavigate();
  const time =  new Date().toLocaleString()
  const handleClick = () => {
    window.print()
    navigate("/ScanBarcode")
  }
  var user = JSON.parse(sessionStorage.user);
  var barcode2 ="RP123423234IN"//JSON.parse(barcode2);

  console.log(user.user)
  return (
    <>

      <div className="ticket">

      <Barcode value={barcode2} />


        <h3 className="centered">Date:<span>  </span> {time} </h3>
        <h3 className="centered">Reciever:</h3>
        <h3 className="centered"> {user.user.rfname}<span>  </span>{user.user.rlname}</h3>

        <h3 className="centered">Address:<span>  </span>{user.user.address2}</h3>
        <h3 className="centered">  State:<span>  </span>{user.user.state2}</h3>
        <h3 className="centered">  City:<span>  </span>{user.user.city2}</h3>
        <h3 className="centered"> Mobile:<span>  </span>{user.user.phone2}</h3>
        <h3 className="centered">  PinCode:<span>  </span>{user.user.pincode2}</h3>
        <h3 className="centered">Sender:</h3>
        <h3 className="centered"> {user.user.fname}<span>  </span>{user.user.lname}</h3>

        <h3 className="centered">Address:<span>  </span>{user.user.address1}</h3>
        <h3 className="centered">  State:<span>  </span>{user.user.state1}</h3>
        <h3 className="centered">  City:<span>  </span>{user.user.city1}</h3>
        <h3 className="centered"> Mobile:<span>  </span>{user.user.phone1}</h3>
        <h3 className="centered">  PinCode:<span>  </span>{user.user.pincode1}</h3>



            <button className='main-button' onClick={handleClick}>PRINT</button>
      </div>
      </>
  )
}
