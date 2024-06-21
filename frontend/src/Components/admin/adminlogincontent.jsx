import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import $ from "jquery";
import "../style.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export default function AdminLoginContent() {
  return (
    <div>
      <div className="container-fluid registration">
        <div className="contentwrap" style={{ height: "600px" }}>
          <div className="d-flex align-items-center text-start mt-3">
            <Link
              to="/ "
              className="d-flex align-items-center"
              style={{ textDecoration: "none", color: "black" }}
            >
              <button
                className="start-0 mb-3 btn btn-outline-light border border-danger border-1 fw-semibold space"
                style={{
                  textDecoration: "none",
                  color: "black",
                  cursor: "pointer",
                }}
              >
                <icon.ArrowLeftCircle
                  className="align-self-baseline"
                  width={"1.4rem"}
                  height={"1.4rem"}
                />
                Home
              </button>
            </Link>
          </div>
          <div class="text-center p-h-xlg p-v-xlg bg-white p-5">
            <p className="mt-2 fs-3">Admin Login</p>
            {/* <p>emailid&password ("jeeva@gmail.com" || 123456789)</p> */}
            <h6 class="fw-semibold space">Sign into your Account</h6>
            <AdminLoginControlled />
          </div>
        </div>
      </div>
    </div>
  );
}

function AdminLoginControlled() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    $(".error").remove();
    if (email.length < 1) {
      $("#email").after('<p class="error">*This field is required</p>');
    } else {
      var regEx = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
      var validEmail = regEx.test(email);
      var spl1 = email.split("@");
      if (!validEmail) {
        $("#email").after('<p class="error">*Enter a valid email</p>');
      } else if (spl1[0].length < 3)
        $("#email").after('<p class="error">*Enter a Valid email</p>');
    }

    if (password.length < 8) {
      $("#password").after(
        '<p class="error">*Enter least 8 characters long</p>'
      );
    }
    // if (validEmail && password.length > 8) {
    //   if (email !== "admin@gmail.com" || password !== "123456789") {
    //     $("#total").after('<p class="error">*Email and password Mismatch</p>');
    //   }
    // }
    e.preventDefault();
    if (email.length > 1 && password.length > 8) {
      axios
        .post("http://localhost:5000/adminlogin", { email, password })
        .then((res) => {
          if (res.data.message === "Success") {
            $("#first_form1").after(`<p className="text-success">Logging</p>`);
            localStorage.setItem("isLog", "true");
            const value = email.split("@")[0];
            localStorage.setItem("adminname", value);
            localStorage.setItem("adminemail", email);
            navigate("/admindashboard");
          } else if (res.data.message === "account_not_found") {
            alert("No record existed");
          } else if (res.aata.message === "Internal Server Error") {
            alert("No record Existed");
          }
        })
        .catch((err) => {
          $("#first_form1").after(`<p class="error">*Invalid</p>`);
        });
    }
  };
  return (
    <div>
      <form id="first_form1" action="" onSubmit={handleSubmit}>
        <div
          class="d-flex flex-column align-items-center flex-wrap login mt-3"
          id="total"
        >
          <div class="d-flex flex-column">
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              placeholder="Enter your email"
              style={{ width: "280px" }}
            ></input>
          </div>
          <div class="d-block mt-2">
            <div class="d-flex flex-column">
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                style={{ width: "280px" }}
              />
            </div>
          </div>
        </div>
        <input type="submit" value="SIGN IN" class="sign mt-3"></input>
      </form>
    </div>
  );
}
