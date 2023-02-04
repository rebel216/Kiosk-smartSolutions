import React from 'react'
import { Link } from 'react-router-dom'
import { w3cwebsocket as W3CWebSocket } from 'websocket';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Success() {
    const client = new W3CWebSocket("ws://127.0.0.1:8000");
  const navigate = useNavigate();
    client.onopen = () => {
      console.log("Connected");

      setTimeout(() => {
        client.send('!');
        navigate("/")
      }, "5000")
      //send command to motor here
      client.send('@');

    };


  client.onmessage = (e) => {

    };

    client.onclose = () => {
      console.log("Closed...");
    };


  return (
    <div className='ticket'>
    <div><h1>Post is Accepted and You can track it online.</h1></div>
<p>
      <Link to="/" className="main-link" onClick={()=>{client.send('!');}}><h2>home</h2></Link>
      {/* done show only when payment successfull */}
    </p>

  </div>

  )
}
