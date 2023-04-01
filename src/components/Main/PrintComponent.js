import React, { useRef } from "react";
import Barcode from 'react-barcode';
import { Navigate, useNavigate } from "react-router-dom";
import logo from '../assets/images/logo.png'

export default function PrintComponent() {
  const navigate = useNavigate();
  const time = new Date().toLocaleString()
  const handleClick = () => {
        
  

   window.print()
    navigate("/ScanBarcode")
  }
  var user = JSON.parse(sessionStorage.user);
  var barcode2 = JSON.parse(sessionStorage.barcode2);

  console.log(user.user)
  return (
    <>
    
      <div>
        
      <div className="login-box">

  <Barcode value={barcode2} />
        
          

          <h6 className="centered">Date:<span>  </span> {time} </h6>
          <h6 className="centered">Reciever:</h6>
          <h6 className="centered"> {user.user.rfname}<span>  </span>{user.user.rlname}</h6>

          <h6 className="centered">Address:<span>  </span>{user.user.address2}</h6>
          <h6 className="centered">  State:<span>  </span>{user.user.state2}</h6>
          <h6 className="centered">  City:<span>  </span>{user.user.city2}</h6>
          <h6 className="centered"> Mobile:<span>  </span>{user.user.phone2}</h6>
          <h6 className="centered">  PinCode:<span>  </span>{user.user.pincode2}</h6>
          <h6 className="centered">Sender:</h6>
          <h6 className="centered"> {user.user.fname}<span>  </span>{user.user.lname}</h6>

          <h6 className="centered">Address:<span>  </span>{user.user.address1}</h6>
          <h6 className="centered">  State:<span>  </span>{user.user.state1}</h6>
          <h6 className="centered">  City:<span>  </span>{user.user.city1}</h6>
          <h6 className="centered"> Mobile:<span>  </span>{user.user.phone1}</h6>
          <h6 className="centered">  PinCode:<span>  </span>{user.user.pincode1}</h6>
      
        </div> <div className="">
        <button className='link1' onClick={handleClick}>PRINT</button>
        </div>
       </div>
    </>
  )
}
