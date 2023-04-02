import React from "react";
import { useEffect, useState } from "react";
import { firebase, auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [mynumber, setnumber] = useState("");
  const [otp, setotp] = useState("");
  const [show, setshow] = useState(false);
  const [final, setfinal] = useState("");
  const navigate = useNavigate();
  // Sent OTP
  const signin = () => {
    sessionStorage.clear();

    if (mynumber === "" || mynumber.length < 10) return;

    let verify = new firebase.auth.RecaptchaVerifier("recaptcha-container");
    auth
      .signInWithPhoneNumber("+91" + mynumber, verify)
      .then((result) => {
        setfinal(result);

        setshow(true);
      })
      .catch((err) => {
        alert(err);
        window.location.reload();
      });
  };

  // Validate OTP
  const ValidateOtp = () => {
    if (otp === null || final === null) return;
    final
      .confirm(otp)
      .then((result) => {
        sessionStorage.phone = JSON.stringify(mynumber);
        console.log(mynumber);

        navigate("/main"); // success
      })
      .catch((err) => {
        alert("Wrong code");
      });
  };

  const logout = () => {
    auth.signOut();
  };

    return (
        <>
      <div className="login"><h1>Log in to Book Parcel</h1></div>
    <div className="Auth-container ">
      
      <center className="login-box">
        <div
          className="input-box"
          style={{ display: !show ? "block" : "none" }}
        >
          <input
            className="form-control"
            value={mynumber}
            onChange={(e) => {
              setnumber(e.target.value);
            }}
            placeholder="Enter Mobile Number"
          />
          <br />
          <br />
          <div id="recaptcha-container"></div>
          <button className="btn btn-primary w-75 mb-2" onClick={signin}>
            SendOTP
          </button>
        </div>
        <div style={{ display: show ? "block" : "none" }}>
          <input
            type="text"
            placeholder={"Enter your OTP"}
            onChange={(e) => {
              setotp(e.target.value);
            }}
          ></input>
          <br />
          <br />
          <button className="link" onClick={ValidateOtp}>
            Verify
          </button>
        </div>
      </center>
    </div></>
  );
};

export default SignIn;
