import React from 'react'
import { Link } from 'react-router-dom'
import { w3cwebsocket as W3CWebSocket } from 'websocket';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const { WDS_SOCKET_PORT1 } = process.env;
import { AddVehicleSlice } from '../../redux/vehical_reducer';
import { useDispatch } from 'react-redux';

export default function Success() {
  const dispatch = useDispatch();
  const formData = JSON.parse(sessionStorage.user);
  console.log(formData.user);
  console.log(JSON.parse(localStorage.getItem('id')))
 
  
  const client = new W3CWebSocket("ws://localhost:8000");
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
    <div className='login-box'>
    <div><h1>Post is Accepted and You can track it online.</h1></div>
    
        
        <Link to="/devise" className="link1" onClick={() => {
          client.send('!');
          dispatch(AddVehicleSlice(formData.user));
          //send data to ruby backend here
        
        }}><button className='align-items-center justify-content-center btn btn-primary w-75 mb-2'>Go Home</button></Link>
      {/* done show only when payment successfull */}
 

 </div>

  )
}
