//import React, { useState } from 'react';
//import { QRCode } from 'react-qrcode-logo';
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



function PayMent() {

    const navigate = useNavigate();
function loadScript(src) {
	return new Promise((resolve) => {
		const script = document.createElement('script')
		script.src = src
		script.onload = () => {
			resolve(true)
		}
		script.onerror = () => {
			resolve(false)
		}
		document.body.appendChild(script)
	})
}

    const options = {
        key: "rzp_test_c5Tw7vHbkg3thN", // Enter the Key ID generated from the Dashboard
        amount: "10000", // caculate amnt later 
        currency: "INR",
    }
    
    async function displayRazorpay() {
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }
      const result = await axios.post("http://localhost:9000/payment/orders");
    //     console.log(result)
    //     // creating a new order
    //  console.log("clicked")

        if (!result) {
            alert("Server error. Are you online?");
            return;
        }

       // Getting the order details back
       const { amount, id: order_id, currency } = result.data;
       const options = {
            key: "rzp_test_c5Tw7vHbkg3thN", // Enter the Key ID generated from the Dashboard
            amount: amount.toString(),
            currency: currency,
            name: "Xoqovo Corp",
            description: "Test Transaction",
            
            order_id: order_id,
            handler: async function (response) {
                const data = {
                    orderCreationId: order_id,
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                    razorpaySignature: response.razorpay_signature,
                };

               // const result = await axios.post("http://localhost:9000/payment/success",data);
       navigate("/success")
                alert("PAyment succesfull");
            },
            prefill: {
                name: "Xoqovo",
                email: "Xoqovo@example.com",
                contact: "1231231231",
            },
            notes: {
                address: "Xoqovo Corporate Office",
           },
          
            theme: {
                color: "#61dafb",
            },
        };
      
        
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
}
	

	return (
		  <div className="login-box">
            <header className="App-header">
                
                <h2>Make payment </h2>
                <div className="form-group mt-3 d-flex flex-column  align-items-center justify-content-center">
                <button className="btn btn-primary w-75 mb-2" onClick={displayRazorpay}>
                    Pay ₹100
                </button></div>
            </header>
        </div>
	)
}

export default PayMent



// import qr from '../assets/images/qr.PNG'
// import { Link } from 'react-router-dom';

// export default function PayMent() {
//   var user = JSON.parse(sessionStorage.user);
//   const money = user.user.price
//   console.log(money)
//   return (
//     <div className='login-box'>
// <img src={qr} alt="QR" ></img>

//       {/* <QRCode
//         value={`upi://pay?pa=intellemo@icici&pn=Intellemo&tn=cftrhwetaw4gta&am=${money}`} //generate your own Qr code.
//         size="300"

//       /> */}
//       <p>Scan the code using PhonePe, Google Pay or Paytm</p>
//       < Link to="/recieptprint" className="link">Make Payment</Link>
//     </div>
//   );
// }
