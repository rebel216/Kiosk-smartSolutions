import React, { Component, useState } from 'react'
import { Link } from "react-router-dom";
import { w3cwebsocket as W3CWebSocket } from 'websocket';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const {WDS_SOCKET_PORT2} = process.env
const client = new W3CWebSocket("ws://localhost:9000");
export default function CheckParcel () {


  //const weight1 = JSON.parse(sessionStorage.weight1);

  const [weight, setWeight] = useState("");




    client.onmessage = (e) => {
      const newObj = e.data;
      setWeight(newObj);


    };

    setTimeout(() => {
      client.close();

    }, "5000")

    client.onopen = () => {
      console.log("Connected");
    };



    client.onclose = () => {
      console.log("Closed...");
    };
  const w1 = parseFloat("12.12sa")//(weight1.substring(0,6))
  const w = parseFloat("12.12sa")//(weight.substring(0, 6))
  
  const checkWeight = () => {
    console.log("clicked")
    client.onmessage = (e) => {
      const newObj = e.data;
      setWeight(newObj);


    };

    setTimeout(() => {
      client.close();

    }, "5000")

    client.onopen = () => {
      console.log("Connected");
    };



    client.onclose = () => {
      console.log("Closed...");
    };
 }

  return (
    <div className='heading'>
        <h1>Place the parcel inside the Machine Again</h1>
        <div className='login-box'>
      


        
        {w==w1  ? (
        <Link  to="/payment" className="link1"><button className="btn btn-primary w-75 mb-2">Make PayMent</button></Link>
      ) : (
              <><h1>Weight missmatch. Please Place the same parcel</h1>
                <button onClick={checkWeight} className="error">Click to Check Again</button></>
      )}
       
</div>

      </div>
    )

}


