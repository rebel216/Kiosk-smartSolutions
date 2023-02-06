import React, { Component, useState } from 'react'
import { Link } from "react-router-dom";
import { w3cwebsocket as W3CWebSocket } from 'websocket';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const {WDS_SOCKET_PORT2} = process.env
const client = new W3CWebSocket("ws://localhost:9000");
export default function CheckParcel () {


  const weight1 = JSON.parse(sessionStorage.weight1);

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
  const w1 = parseFloat(weight1.substring(0,6))
  const w = parseFloat(weight.substring(0,6))


    return (
        <div className='ticket'>
        <h1>Place the parcel inside the Machine Again</h1>


        <p>
        {w == w1 || w == w1+ .005  || w == w1- .005  ? (
        <Link  to="/payment" className="main-link">Make Payment</Link>
      ) : (
        <h1 className="error">Parcel Weight missmatch</h1>
      )}
        </p>


      </div>
    )

}


