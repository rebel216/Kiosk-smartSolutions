import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../assets/styles/App.css";
import Pincode from "react-pincode";
import { w3cwebsocket as W3CWebSocket } from "websocket";
const { WDS_SOCKET_PORT2 } = process.env;

const client = new W3CWebSocket("ws://localhost:9000");
 const generateBarcode = (lenth) => {
        const char = '1234567890';
        const random = Array.from(
            {length: lenth},
            () => char[Math.floor(Math.random() * char.length)]
        );
        const randomString = random.join("");
        return 'ED'+randomString+'IN';
 }
     const barcode2 = generateBarcode(9);
export default function SpeedPost() {
  const [weight, setWeight] = useState("");

  client.onmessage = (e) => {
    const newObj = e.data;
    setWeight(newObj);
    sessionStorage.weight1 = JSON.stringify(weight);
    console.log(newObj);
  };

  setTimeout(() => {
    client.close();
  }, "5000");

  client.onopen = () => {
    console.log("Connected");
  };

  client.onclose = () => {
    console.log("Closed...");
  };

  //return () => client.OPEN && client.close();

  const phone = JSON.parse(sessionStorage.phone);
 
 
  sessionStorage.barcode2 = JSON.stringify(barcode2);
 console.log(sessionStorage.barcode2)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [pincodeData1, setPincodeData1] = useState("");
  const [isOpen, setisOpen] = useState(false);
   const [isOpen2, setisOpen2] = useState(true);
  const [pincodeData2, setPincodeData2] = useState("");

  const [user, setUser] = React.useState({
    fname: "",
    lname: "",
    rfname: "",
    rlname: "",
    address1: "",
    pincode1: "",
    city1: "",
    state1: "",
    phone1: phone,
    address2: "",
    pincode2: "",
    city2: "",
    state2: "",
    phone2: "",
    weight: "",
    price: "100",
    accesstoken: "",
    reference: "",
    postType: "",
    barcode: "",
    postoffice: "",
    user_id: "",
    
  });
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const submitValue = (formData) => {
    console.log(formData);
    sessionStorage.formData = JSON.stringify(formData);

    // dispatch(AddVehicleSlice(formData));
    // dispatch(getusers);
    // navigate('/');
  };
  const validateFields = (form) => {
    if (user.fname !== "" && user.lname !== "" && user.address1 !== "" ) {
      return true;
    }
    return false;
  };

  const handleDisplay = (e) => { 
    if (validateFields(e.target)) {
    setisOpen(true);
    setisOpen2(false);
    }

    
  }
  const handleSubmit = (e) => {
    client.close();
    e.preventDefault();
    if (validateFields(e.target)) {
      console.log(pincodeData1.pincode);
      var requestData = {
        user: {
          fname: user.fname,
          lname: user.lname,
          rfname: user.rfname,
          rlname: user.rlname,
          address1: user.address1,
          pincode1: pincodeData1.pincode,
          city1: pincodeData1.city,
          state1: pincodeData1.stateName,
          phone1: user.phone1,
          address2: user.address2,
          pincode2: pincodeData2.pincode,
          city2: pincodeData2.city,
          state2: pincodeData2.stateName,
          phone2: user.phone2,
          weight: user.weight,
          price: user.price,
          accesstoken: user.accesstoken,
          reference: user.reference,
          postType: "Registered Post",
          barcode: barcode2,
          postoffice: "delhi",
          user_id: JSON.parse(localStorage.getItem('id')),
        },
      };
        submitValue(requestData);

      sessionStorage.user = JSON.stringify(requestData);
      sessionStorage.price = JSON.stringify(requestData.user.price);

      navigate("/PrintComponent");
    } else {
      alert("Please fill all the fields");
    }
  };

  return (
    <>
      <div className="header" id="myHeader">
        <div className="header-items">
          <h1 className="heading">SpeedPost</h1>
        </div>
      </div>

      <div className="login-box">
        <div className="input-box">
          <form onSubmit={(e) => handleSubmit(e)} >
            {isOpen2&&(<div id="Sender-field">
            <div className="input-field">
              <label>Weight(Automatic)</label>
              <input
                autoComplete="off"
                className="form-control"
                value={weight}
                name="weight"
                onChange={handleChange}
              />
            </div>
            <div className="input-field">
              <label>Sender's Name</label>
              <input
                autoComplete="off"
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                required
                name="fname"
                placeholder="first name"
                onChange={handleChange}
              />
              <br />
              <input
                autoComplete="off"
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                required
                name="lname"
                placeholder="last name"
                onChange={handleChange}
              />
            </div>
            <div className="input-field">
              <label>Sender Address</label>
              <input
                autoComplete="off"
                type="text"
                className="form-control"
                id="formGroupExampleInput2"
                required
                name="address1"
                onChange={handleChange}
              />
            </div>
            <div className="input-field">
              <label>Sender's Mobile</label>
              <input
                autoComplete="off"
                className="form-control"
                value={phone}
                name="phone1"
                onChange={handleChange}
              />
            </div>
            <div className="input-field">
              <label>Sender's PinCode</label>
              <Pincode
                invalidError="Please check pincode"
                lengthError="check length"
                getData={(data) => setPincodeData1(data)}
                name="pincode1"
              />
              </div>
              <div className="form-group mt-3 d-flex flex-column  align-items-center justify-content-center">
            <button className="link" onClick={handleDisplay}>
                Next
                </button></div>
            </div>)}
            {isOpen && (
              <div id="Reciver-field"><label>Weight(Automatic)</label>
                <input
                  autoComplete="off"
                  className="form-control"
                  value={weight}
                  name="weight"
                  onChange={handleChange}
                />
                <div className="input-field">
                  <label>Reciever's Name</label>
                  <input
                    autoComplete="off"
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    required
                    name="rfname"
                    placeholder="first name"
                    onChange={handleChange}
                  />
                  <br />
                  <input
                    autoComplete="off"
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    required
                    name="rlname"
                    placeholder="last name"
                    onChange={handleChange}
                  />
                </div>
                <div className="input-field">
                  <label>Reciever Address</label>
                  <input
                    autoComplete="off"
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput2"
                    required
                    name="address2"
                    onChange={handleChange}
                  />
                </div>
                <div className="input-field">
                  <label>Reciever's PinCode</label>
                  <Pincode
                    invalidError="Please check pincode"
                    lengthError="check length"
                    getData={(data) => setPincodeData2(data)}
                    name="pincode2"
                  />
                </div>

                <div className="input-field">
                  <label>Reciever's Mobile</label>
                  <input
                    autoComplete="off"
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput2"
                    required
                    name="phone2"
                    onChange={handleChange}
                  />
                </div>
                <div className="input-field">
                  <label>Price(Automatic)</label>
                  <input
                    autoComplete="off"
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput2"
                    name="price"
                    value={100}
                    onChange={handleChange}
                  />
                  <div className="form-group mt-3 d-flex flex-column  align-items-center justify-content-center">
                  <button className="link" type="submit">
                    Register
                  </button></div>
                </div>
              </div>)}
          </form>
        </div>
      </div>
    </>
  );
}
