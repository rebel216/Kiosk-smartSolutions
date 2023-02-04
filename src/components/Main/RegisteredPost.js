import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/App.css';
import Pincode from "react-pincode";
import { w3cwebsocket as W3CWebSocket } from 'websocket';
const client = new W3CWebSocket("ws://127.0.0.1:7000");

export default function RegisteredPost (){
  const [weight, setWeight] = useState("");

  client.onmessage = (e) => {
    const newObj = e.data;
    setWeight(newObj);
    sessionStorage.weight1 = JSON.stringify(weight);
    console.log(newObj);

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

  //return () => client.OPEN && client.close();

  const phone = "234234234"//JSON.parse(sessionStorage.phone);

  const barcode2 = "RP123423234IN"   // Read from APi and store here
  sessionStorage.barcode2 = JSON.stringify(barcode2);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [pincodeData1, setPincodeData1] = useState('');
    const [pincodeData2, setPincodeData2] = useState('');

    const [user, setUser] = React.useState({
        fname: '',
        lname: '',
        rfname: '',
        rlname: '',
        address1: '',
        pincode1: '',
        city1: '',
        state1:'',
        phone1:phone,
        address2: '',
        pincode2: '',
        city2: '',
        state2:'',
        phone2:'',
        weight: '',
        price: '',
        accesstoken: '',
        reference: '',
        postType: '',
        barcode:''

  });
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

    const submitValue = (formData) => {
        console.log(formData)

    // dispatch(AddVehicleSlice(formData));
    // dispatch(getusers);
    // navigate('/');
  };
  const validateFields = (form) => {
    if (user.fname !== '' && user.lname !== '' ) {


        return true;
    }
    return false;
  };
  const handleSubmit = (e) => {
    client.close();
    e.preventDefault();
    if (validateFields(e.target)) {
      console.log(pincodeData1.pincode)
      var requestData ={
        user :{
            fname: user.fname,
            lname: user.lname,
            rfname: user.rfname,
            rlname: user.rlname,
            address1: user.address1,
            pincode1: pincodeData1.pincode,
            city1:  pincodeData1.city,
            state1: pincodeData1.stateName,
            phone1:user.phone1,
            address2: user.address2,
            pincode2:  pincodeData2.pincode,
            city2:  pincodeData2.city,
            state2:pincodeData2.stateName,
            phone2:user.phone2,
            weight: user.weight,
            price: user.price,
            accesstoken: user.accesstoken,
            reference: user.reference,
            postType:"Registered Post",
            barcode: barcode2
        },
      };
    //   submitValue(requestData);


      sessionStorage.user = JSON.stringify(requestData);
      sessionStorage.price = JSON.stringify(requestData.user.price);


        navigate('/PrintComponent');
    }
    else {
      alert('Please fill all the fields');
    }
  };

  return (
    <>
      <div className="header" id="myHeader">
        <div className='header-items'><h2>RegisteredPost</h2></div>

      </div>


      <div className="wrapper">


      <div className="row">
          <form onSubmit={(e) => handleSubmit(e)} className='add-vehicle-form'>

        <div className="input-field">
            <label>Weight(Automatic)</label>
            <input autoComplete="off" className="form-control" value={weight}
              name='weight'
              onChange={handleChange} />
                  </div>
          <div className="input-field">
            <label>Sender's Name</label>
            <input autoComplete="off"type="text" className="form-control" id="formGroupExampleInput" required
              name='fname' placeholder='first name'
              onChange={handleChange}
                      /><br />
                      <input autoComplete="off"type="text" className="form-control" id="formGroupExampleInput" required
              name='lname' placeholder='last name'
              onChange={handleChange}
            />
          </div>
          <div className="input-field">
            <label>Sender Address</label>
            <input autoComplete="off"type="text" className="form-control" id="formGroupExampleInput2" required
              name='address1'
              onChange={handleChange} />
            </div>
            <div className="input-field">
            <label>Sender's Mobile</label>
            <input autoComplete="off" className="form-control" value={phone}
              name='phone1'
              onChange={handleChange} />
                  </div>
          <div className="input-field">
            <label>Sender's PinCode</label>
            <Pincode
        invalidError="Please check pincode"
        lengthError="check length"
        getData={(data) => setPincodeData1(data)} name="pincode1"
      />

          </div>
<div>
          <label>Reciever's Name</label>
            <input autoComplete="off"type="text" className="form-control" id="formGroupExampleInput" required
              name='rfname' placeholder='first name'
              onChange={handleChange}
                      /><br />
                      <input autoComplete="off"type="text" className="form-control" id="formGroupExampleInput" required
              name='rlname' placeholder='last name'
              onChange={handleChange}
            />
          </div>
          <div className="input-field">
            <label>Reciever Address</label>
            <input autoComplete="off"type="text" className="form-control" id="formGroupExampleInput2" required
              name='address2'
              onChange={handleChange} />
                  </div>
                  <div className="input-field">
            <label>Reciever's PinCode</label>
            <Pincode
        invalidError="Please check pincode"
        lengthError="check length"
        getData={(data) => setPincodeData2(data)} name="pincode2"
      />

                  </div>


                  <div className="input-field">
            <label>Reciever's Mobile</label>
            <input autoComplete="off"type="text" className="form-control" id="formGroupExampleInput2" required
              name='phone2'
              onChange={handleChange} />
          </div>
          <div className="input-field">
            <label>Price(Automatic)</label>
            <input autoComplete="off"type="text" className="form-control" id="formGroupExampleInput2"
              name='price'

              onChange={handleChange} />
          </div>
                  <div >

            <button className='main-button' type="submit" >Register</button>

          </div>
        </form>

      </div>
      </div>
      </>
  );
};

