import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import $ from "jquery";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    $(".error").remove();
    if (email.length < 1) {
      $("#email").after('<p class="error">*This field is required</p>');
    } else {
      var regEx = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
      var validEmail = regEx.test(email);
      if (!validEmail) {
        $("#email").after('<p class="error">*Enter a valid email</p>');
      }
      // else {
      //   $("#email").after(
      //     '<p class="text-success mt-2" style={{ width: "280px" }}>Check your email for reset password</p>'
      //   );
      // }
    }
    if (email.length > 1 && validEmail) {
      console.log(email, "email");
      axios
        .post("http://localhost:5000/forgotpassword", { email })
        .then((res) => {
          if (res.data.message === "Success") {
            $("#first_form1").after(`<p className="text-success">Logging</p>`);
            localStorage.setItem("email", email);
            navigate("/passwordset");
          } else if (res.data.message === "account_not_found") {
            alert("No record existed");
          } else if (res.data.message === "Internal Server Error") {
            alert("Internal Server Error");
          }
        })
        .catch((err) => {
          toast.success("Account Doesn't Exit ", {
            autoClose: 850,
            position: "top-center",
            style: { background: "#fce4de" },
          });
        });
    }

    e.preventDefault();
  };
  return (
    <div>
      <form id="first_form1" action="" onSubmit={handleSubmit}>
        <div class="d-flex justify-content-center flex-wrap login">
          <div class="d-flex flex-column">
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              style={{ width: "280px" }}
            ></input>
          </div>
        </div>
        <input type="submit" value="Reset Password" class="mt-2 sign"></input>
      </form>
      <ToastContainer />
    </div>
  );
}
