import React, { useState } from 'react';
import { QRCode } from 'react-qrcode-logo';
import qr from '../assets/images/qr.PNG'
import { Link } from 'react-router-dom';

export default function PayMent() {
  var user = JSON.parse(sessionStorage.user);
  const money = user.user.price
  console.log(money)
  return (
    <div className='ticket'>
<img src={qr} alt="QR" ></img>

      {/* <QRCode
        value={`upi://pay?pa=intellemo@icici&pn=Intellemo&tn=cftrhwetaw4gta&am=${money}`} //generate your own Qr code.
        size="300"

      /> */}
      <p>Scan the code using PhonePe, Google Pay or Paytm</p>
     < Link to="/recieptprint" className="main-link">Make Payment</Link>
    </div>
  );
}
