import React from "react";
import $ from "jquery";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import axios from "axios";

export default function ShippingContent() {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [mobile, setmobile] = useState("");
  const [Address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [pin, setpin] = useState("");
  const navigate = useNavigate();
  function Handlesubmit(event) {
    event.preventDefault();
    $(".error").remove();
    let validationPass = true;
    if (fname.length < 1) {
      $("#fname").after(
        '<p style="color: red" class="error"><small>This field is required</small></p>'
      );
      validationPass = false;
    } else {
      var regfname = /^[A-Za-z\s]*$/;
      var validfname = regfname.test(fname);
      if (!validfname) {
        $("#id").after(
          '<p style="color: red" class="error"><small>Invalid Name</small></p>'
        );
        validationPass = false;
      }
    }
    if (lname.length < 1) {
      $("#lname").after(
        '<p style="color: red" class="error"><small>This field is required</small></p>'
      );
      validationPass = false;
    } else {
      var reglastname = /^[A-Za-z\s]*$/;
      var validlastname = reglastname.test(lname);
      if (!validlastname) {
        $("#lname").after(
          '<p style="color: red" class="error"><small>Invalid Name</small></p>'
        );
        validationPass = false;
      }
    }
    if (mobile.length < 1) {
      $("#mobile").after(
        '<p style="color: red" class="error"><small>This filed is required</small></p>'
      );
      validationPass = false;
    } else {
      var regmob = /[0-9]{10}/;
      var validmob = regmob.test(mobile);
      if (!validmob) {
        $("#mobile").after(
          '<p style="color: red" class="error"><small>enter 10 digit number</small></p>'
        );
        validationPass = false;
      }
    }
    if (Address.length < 1) {
      $("#address").after(
        '<p style="color: red" class="error"><small>This field is required</small></p>'
      );
      validationPass = false;
    }
    if (city.length < 1) {
      $("#city").after(
        '<p style="color: red" class="error"><small>This field is required</small></p>'
      );
      validationPass = false;
    }
    if (state.length < 1) {
      $("#state").after(
        '<p style="color: red" class="error"><small>This field is required</small></p>'
      );
      validationPass = false;
    }
    if (country.length < 1) {
      $("#country").after(
        '<p style="color: red" class="error"><small>This field is required</small></p>'
      );
      validationPass = false;
    }
    if (pin.length < 1) {
      $("#pin").after(
        '<p style="color: red" class="error"><small>This field is required</small></p>'
      );
      validationPass = false;
    }
    if (validationPass) {
      const data = {
        fname: fname,
        lname: lname,
        mobile: mobile,
        address: Address,
        country: country,
        state: state,
        city: city,
        pin: pin,
      };
      axios
        .post("http://localhost:5000/shipping", data)
        .then((res) => {
          // Data insertion successful
          // Redirect to the payment page or perform any other actions
          navigate("/payment");
        })
        .catch((error) => {
          // Handle any errors that occurred during data insertion
          console.log(error);
        });
    }
  }
  return (
    <div>
      <p style={{ fontsize: "small" }} className="fs-2">
        Contact Information
      </p>
      <div className="d-flex justify-content-center">
        <input
          type="text"
          placeholder="Email"
          className="border-1 border p-2"
          style={{ width: "70%", borderRadius: "5px" }}
        ></input>
      </div>
      <div className="d-flex align-items-center mt-1">
        <input type="checkbox" style={{ color: "#f38189" }} />
        <p className="mb-1 ms-1">Email me with news and offers</p>
      </div>
      <div className="mt-2 d-flex justify-content-center flex-column">
        <p style={{ fontsize: "small" }} className="fs-2">
          Shipping address
        </p>
        <form onSubmit={Handlesubmit}>
          <div class="mb-4 d-flex justify-content-center">
            <input
              type="text"
              id="fname"
              placeholder="First Name"
              className="border border-1 p-2"
              onChange={(e) => {
                setfname(e.target.value);
              }}
              style={{ width: "70%", borderRadius: "5px" }}
            />
          </div>
          <div class="mb-4 d-flex justify-content-center">
            <input
              type="text"
              id="lname"
              placeholder="Last Name"
              className="border border-1 p-2"
              onChange={(e) => {
                setlname(e.target.value);
              }}
              style={{ width: "70%", borderRadius: "5px" }}
            />
          </div>
          <div class="mb-4 d-flex justify-content-center">
            <input
              type="text"
              id="mobile"
              placeholder="Phone Number"
              className="border border-1 p-2"
              onChange={(e) => {
                setmobile(e.target.value);
              }}
              style={{ width: "70%", borderRadius: "5px" }}
            />
          </div>
          <div class="mb-4 d-flex justify-content-center">
            <textarea
              type="text"
              id="address"
              className="border border-1 p-2"
              placeholder="Address"
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              style={{ width: "70%", borderRadius: "5px", resize: "none" }}
            />
          </div>
          <div className="mb-4 d-flex justify-content-center">
            <input
              type="text"
              placeholder="city"
              id="city"
              className="border border-1 p-2"
              onChange={(e) => {
                setCity(e.target.value);
              }}
              style={{ width: "35%", borderRadius: "5px" }}
            />
            <input
              type="text"
              placeholder="State"
              id="state"
              className="border border-1 p-2"
              onChange={(e) => {
                setState(e.target.value);
              }}
              style={{ width: "35%", borderRadius: "5px" }}
            />
          </div>
          <div class="mb-4 d-flex justify-content-center">
            <input
              type="text"
              id="country"
              placeholder="Country"
              onChange={(e) => {
                setCountry(e.target.value);
              }}
              className="border border-1 p-2"
              style={{ width: "35%", borderRadius: "5px" }}
            />
            <input
              type="number"
              id="pin"
              placeholder="Pin Code"
              className="border border-1 p-2"
              onChange={(e) => {
                setpin(e.target.value);
              }}
              style={{ width: "35%", borderRadius: "5px" }}
            />
          </div>

          <div class="my-4 d-flex justify-content-center">
            <button className="butn" style={{ width: "50%" }}>
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
