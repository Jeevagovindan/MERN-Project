import React from "react";
import $ from "jquery";
import "../style.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function LoginControlled() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    // if (email === "user@gmail.com" && password === "123456789") {
    //   navigate("/");
    // }
    $(".error").remove();
    if (email.length < 1) {
      $("#email").after('<p class="error">*This field is required</p>');
    } else {
      var regEx = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
      var validEmail = regEx.test(email);
      var spl = email.split("@");
      if (!validEmail) {
        $("#email").after('<p class="error">*Enter a valid email</p>');
      } else if (spl[0].length < 3)
        $("#email").after('<p class="error">*Enter a Valid email</p>');
    }
    if (password.length < 5) {
      $("#password").after(
        '<p class="error">*Enter least 5 characters long</p>'
      );
    }
    // if (validEmail && password.length > 8) {
    //   if (email !== "user@gmail.com" || password !== "123456789") {
    //     $("#loginform").after(
    //       '<p class="error">*Email and password Mismatch</p>'
    //     );
    //   }
    // }
    e.preventDefault();
    if (email.length > 1 && password.length > 1) {
      axios
        .post("http://localhost:5000/userLogin", { email, password })
        .then((res) => {
          if (res.data.message === "Success") {
            $("#first_form1").after(`<p className="text-success">Logging</p>`);

            localStorage.setItem("isLoggedIn", "true");
            const value = email.split("@")[0];
            localStorage.setItem("username", value);
            navigate("/");
          } else if (res.data.message === "account_not_found") {
            alert("No record existed");
          } else if (res.aata.message === "Internal Server Error") {
            alert("No record Existed");
          }
        })
        .catch((err) => {
          $("#first_form1").after(
            `<p class="error">Account don't exist,Create One  </p>`
          );
        });
    }

    // try {
    //   const response = axios.post("http://localhost:5000/userLogin", {
    //     email,
    //     password,
    //   });

    //   if (response.status === 200) {
    //     navigate("/");
    //   } else {
    //     if (response.data.error === "account_not_found") {
    //       $(".error").remove();
    //       $("#loginform").after('<p class="error">*Account doesn\'t exist</p>');
    //     } else if (response.data.error === "email_password_mismatch") {
    //       $(".error").remove();
    //       $("#loginform").after(
    //         '<p class="error">*Email and password mismatch</p>'
    //       );
    //     }
    //   }
    // } catch (error) {
    //   console.error("Error:", error);
    // }
  };

  return (
    <form id="first_form1" action="" onSubmit={handleSubmit}>
      <div class="d-flex justify-content-center flex-wrap login">
        <div class="d-flex flex-column">
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            placeholder="Enter your email"
            style={{ width: "280px", marginRight: "1rem" }}
          ></input>
        </div>
        <div class="d-block">
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

          {/* <Link to="/forgot" style={{ textDecoration: "none", color: "black" }}>
            <p class="text-end">Forgot Password?</p>
          </Link> */}
        </div>
      </div>
      <input
        type="submit"
        value="SIGN IN"
        class="mt-4 sign"
        id="loginform"
      ></input>
    </form>
  );
}

export default LoginControlled;

// import $ from "jquery";
// import "../style.css";
// import axios from "axios";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import Validation from "./validation";

// function LoginControlled() {
//   const [values, setValues] = useState({
//     email: "",
//     password: "",
//   });
//   const navigate = useNavigate();
//   const [errors, setErrors] = useState({});
//   const handleInput = (event) => {
//     setValues((prev) => ({
//       ...prev,
//       [event.target.name]: event.target.value,
//     }));
//   };
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setErrors(Validation(values));

//     if (errors.email === "" && errors.password === "") {
//       axios
//         .post("http://localhost:5000/api/userLogin", values)
//         .then((res) => {
//           if (res.data === "Success") {
//             navigate("/home");
//           } else {
//             alert("No record existed");
//           }
//         })
//         .catch((err) => console.log(err));
//     }
//   };

//   return (
//     <form id="first_form1" action="" onSubmit={handleSubmit}>
//       <div class="d-flex justify-content-center flex-wrap login">
//         <div class="d-flex flex-column">
//           <input
//             type="text"
//             id="email"
//             onChange={handleInput}
//             placeholder="Enter your email"
//             style={{ width: "280px", marginRight: "1rem" }}
//           ></input>
//           {errors.email && <span className="text-danger">{errors.email} </span>}
//         </div>
//         <div class="d-block">
//           <div class="d-flex flex-column">
//             <input
//               type="password"
//               id="password"
//               onChange={handleInput}
//               placeholder="Password"
//               style={{ width: "280px" }}
//             />
//             {errors.password && (
//               <span className="text-danger">{errors.password} </span>
//             )}
//           </div>

//           <Link to="/forgot" style={{ textDecoration: "none", color: "black" }}>
//             <p class="text-end">Forgot Password?</p>
//           </Link>
//         </div>
//       </div>
//       <input
//         type="submit"
//         value="SIGN IN"
//         class="mt-2 sign"
//         id="loginform"
//       ></input>
//     </form>
//   );
// }

// export default LoginControlled;
