import React, { Component } from "react";
import $, { event } from "jquery";
import "../style.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegistrationControlled = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [dob, setDob] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [country, setCountry] = useState("");
  const navigate = useNavigate();
  const values = [name, email, password, gender, dob, country, mobileNo];
  const handleSubmit = (event) => {
    event.preventDefault();
    $(".error").remove();

    if (name.length < 1) {
      $("#name").after('<p class="fs-6 error">*This field is required</p>');
    } else {
      var regEx = /^[A-Za-z\s]*$/;
      var validName = regEx.test(name);
      if (!validName) {
        $("#name").after('<p class="error">*Invalid</p>');
      }
    }

    if (email.length < 1) {
      $("#email").after('<p class="error">*This field is required</p>');
    } else {
      var regExemail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
      var validEmail = regExemail.test(email);
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
    if (repassword !== password) {
      $("#repassword").after('<p class="error">*Password Mismatch</p>');
    }
    if (mobileNo.length < 1) {
      $("#mobile_no").after('<p class="error">*Enter Mobile number</p>');
    }
    var regexmobile = /^\d{10}$/;
    if (!regexmobile) {
      $("#mobile_no").after('<p class="error">*Enter Mobile number</p>');
    }

    var ischecked = $("input[name=gender]").is(":checked");
    if (!ischecked) {
      $("#gender").after('<p class="error">*please check one</p>');
    }

    var ischeckedchecbox = $("input[name=category]").is(":checked");
    if (!ischeckedchecbox) {
      $("#category").after('<p class="error">*please check atleast one</p>');
    }
    if (country === "") {
      $("#region").after('<p class="error">*please select an option</p>');
    }

    const data = {
      name: name,
      email_id: email,
      gender: gender,
      password: password,
      dob: dob,
      mobile_no: mobileNo,
      country: country,
    };
    axios
      .post("http://localhost:5000/userregister", data)
      .then((res) => {
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };
  return (
    <form
      className=""
      id="first_form1"
      action=""
      onSubmit={(event) => handleSubmit(event)}
    >
      <div class="d-flex flex-column">
        <div class="d-flex mb-3" id="name">
          <img
            src="/Images/registration/profile.png"
            alt="profile"
            className="Aligncenter"
            style={{
              width: "25px",
              marginRight: "2rem",
              display: "flex",
            }}
          />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            style={{ width: "200px", marginBottom: "10px" }}
          ></input>
        </div>
        <div class="d-flex mb-3" id="email">
          <img
            src="/Images/registration/email.png"
            style={{
              width: "30px",
              marginBottom: "1rem",
              marginRight: "29px",
            }}
            alt=""
          />
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your email"
            style={{ width: "200px", marginBottom: "10px" }}
          ></input>
        </div>
        <div class="d-flex mb-3" id="password">
          <img
            src="/Images/registration/lock.png"
            style={{
              width: "30px",
              marginBottom: "1rem",
              marginRight: "2rem",
            }}
            alt=""
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="your password"
            style={{ width: "200px", marginBottom: "10px" }}
          ></input>
        </div>
        <div class="d-flex mb-3" id="repassword">
          <img
            src="/Images/registration/key.jpeg"
            style={{
              width: "50px",
              marginBottom: "1rem",
              marginRight: "1rem",
            }}
            alt=""
          />
          <input
            type="password"
            value={repassword}
            onChange={(e) => setRepassword(e.target.value)}
            placeholder="Repeat your password"
            style={{ width: "200px", marginBottom: "10px" }}
          ></input>
        </div>
        <div class="d-flex mb-3" id="gender">
          <h6 className="P-0 me-2">Gender</h6>
          <div>
            <div className="d-flex" id="gender" style={{ columnGap: "5px" }}>
              <input
                type="radio"
                value="Male"
                name="gender"
                onChange={(e) => setGender(e.target.value)}
              />{" "}
              Male
              <input
                type="radio"
                value="Female"
                name="gender"
                onChange={(e) => setGender(e.target.value)}
              />{" "}
              Female
              <input
                type="radio"
                value="Other"
                name="gender"
                onChange={(e) => setGender(e.target.value)}
              />{" "}
              Other
            </div>
          </div>
        </div>
        <div className="d-flex mb-3" id="mobile_no">
          <div className="p-0 me-1 d-flex flex-column">
            <h6>Mobile</h6>
            <h6>Number</h6>
          </div>
          <div>
            <input
              type="number"
              className=""
              value={mobileNo}
              onChange={(e) => setMobileNo(e.target.value)}
            />
          </div>
        </div>
        <div class="d-flex mb-3" id="date">
          <h6 class="me-3 py-2">DOB</h6>
          <div>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              style={{
                width: "200px",
                marginBottom: "10px",
                marginTop: "6px",
                marginLeft: "1rem",
              }}
            />
          </div>
        </div>
        <div class="d-flex mb-3" id="region">
          <h6 class="me-2 py-2">Country</h6>
          <select
            id="region"
            style={{ width: "200px", marginBottom: "10px", marginTop: "6px" }}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="">Select an option</option>
            <option value="India">India</option>
            <option value="Asia">ASIA</option>
            <option value="Europe">EUROPE</option>
            <option value="Africa">AFRICA</option>
            <option value="North-America">NORTH-AMERICA</option>
            <option value="Austalia">AUSTRALIA</option>
          </select>
        </div>
        <div class="d-flex mb-3" id="category">
          <h6>which Products are you looking for ?</h6>
          <div>
            <div className="d-flex flex-column text-start">
              <label>
                <input type="checkbox" name="category" />
                Fruit pergmented makeup
              </label>
              <label>
                <input type="checkbox" name="category"></input>Skin Care
              </label>
              <label>
                <input type="checkbox" name="category"></input>Hair & Body
              </label>
            </div>
          </div>
        </div>
        <input
          type="submit"
          value="REGISTER"
          id="register"
          class="mt-3 sign"
          style={{ width: "200px", marginBottom: "10px" }}
        ></input>
      </div>
    </form>
  );
};

export default RegistrationControlled;

// const RegistrationControlled = () => {
//   const navigate = useNavigate();
//   const initialValues = {
//     name: "",
//     email: "",
//     gender: "",
//     password: "",
//     dob: "",
//     mobileNo: "",
//     country: "",
//   };
//   const [values, setValues] = useState({
//     name: "",
//     email: "",
//     gender: "",
//     password: "",
//     dob: "",
//     mobileNo: "",
//     country: "",
//   });
//   const [formValues, setFormValues] = useState(values);
//   const [formErrors, setFormErrors] = useState({});
//   const [isSubmit, setIsSubmit] = useState(false);
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     console.log(e.target);
//     setValues((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     axios
//       .post("http://localhost:5000/userregister", values)
//       .then((res) => {
//         if (res.data === "Success") {
//           console.log("Happy");
//         } else {
//           console.log("Sadful");
//         }
//       })
//       .catch((err) => console.log(err));
//     setFormErrors(validate(values));
//     setIsSubmit(true);
//   };
//   // $(".error").remove();
//   const validate = (values) => {
//     const errors = {};
//     if (values.name === " ") {
//       errors.name = "This field is required";
//     } else {
//       var regEx = /^[A-Za-z\s]*$/;
//       var validName = regEx.test(values.name);
//       if (!validName) {
//         errors.name = "Invalid";
//       }
//     }

//     if (values.email === " ") {
//       errors.email = "This field is required";
//     } else {
//       var regExemail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
//       var validEmail = regExemail.test(values.email);
//       var dummyemail = values.email;
//       var spl1 = dummyemail.split("@");
//       if (!validEmail) {
//         errors.email = "Enter a valid email";
//       } else if (spl1[0].length < 3) errors.email = "Enter a valid email";
//     }
//     if (values.password.length < 8) {
//       errors.password = "Enter least 8 characters long";
//     }
//     if (values.mobileNo.length < 1) {
//       errors.mobileNo = "*Enter Mobile number";
//     }
//     var regexmobile = /^\d{10}$/;
//     var validmobile = regexmobile.test(values.mobileNo);
//     if (!validmobile) {
//       errors.mobileNo = "*Enter Mobile number";
//     }

//     var ischecked = $("input[name=gender]").is(":checked");
//     if (!ischecked) {
//       values.gender = "Please check one";
//     }

//     var ischeckedchecbox = $("input[name=category]").is(":checked");
//     if (!ischeckedchecbox) {
//       $("#category").after('<p class="error">*please check atleast one</p>');
//     }
//     if (values.country === "") {
//       errors.country = "please select an option";
//     }
//   };
//   return (
//     <form
//       className=""
//       id="first_form1"
//       action=""
//       onSubmit={(event) => handleSubmit(event)}
//     >
//       <div class="d-flex flex-column">
//         <div class="d-flex mb-3" id="name">
//           <img
//             src="/Images/registration/profile.png"
//             alt="profile"
//             className="Aligncenter"
//             style={{
//               width: "25px",
//               marginRight: "2rem",
//               display: "flex",
//             }}
//           />
//           <input
//             type="text"
//             value={values.name}
//             onChange={handleChange}
//             placeholder="Your name"
//             style={{ width: "200px", marginBottom: "10px" }}
//           ></input>
//         </div>
//         <div class="d-flex mb-3" id="email">
//           <img
//             src="/Images/registration/email.png"
//             style={{
//               width: "30px",
//               marginBottom: "1rem",
//               marginRight: "29px",
//             }}
//             alt=""
//           />
//           <input
//             type="text"
//             value={values.email}
//             onChange={handleChange}
//             placeholder="your email"
//             style={{ width: "200px", marginBottom: "10px" }}
//           ></input>
//         </div>
//         <div class="d-flex mb-3" id="password">
//           <img
//             src="/Images/registration/lock.png"
//             style={{
//               width: "30px",
//               marginBottom: "1rem",
//               marginRight: "2rem",
//             }}
//             alt=""
//           />
//           <input
//             type="password"
//             value={values.password}
//             onChange={handleChange}
//             placeholder="your password"
//             style={{ width: "200px", marginBottom: "10px" }}
//           ></input>
//         </div>
//         <div class="d-flex mb-3" id="repassword">
//           <img
//             src="/Images/registration/key.jpeg"
//             style={{
//               width: "50px",
//               marginBottom: "1rem",
//               marginRight: "1rem",
//             }}
//             alt=""
//           />
//           <input
//             type="password"
//             placeholder="Repeat your password"
//             style={{ width: "200px", marginBottom: "10px" }}
//           ></input>
//         </div>
//         <div class="d-flex mb-3" id="gender">
//           <h6 className="P-0 me-2">Gender</h6>
//           <div>
//             <div className="d-flex" id="gender" style={{ columnGap: "5px" }}>
//               <input
//                 type="radio"
//                 value="Male"
//                 name="gender"
//                 onChange={handleChange}
//               />{" "}
//               Male
//               <input
//                 type="radio"
//                 value="Female"
//                 name="gender"
//                 onChange={handleChange}
//               />{" "}
//               Female
//               <input
//                 type="radio"
//                 value="Other"
//                 name="gender"
//                 onChange={handleChange}
//               />{" "}
//               Other
//             </div>
//           </div>
//         </div>
//         <div className="d-flex mb-3" id="mobile_no">
//           <div className="p-0 me-1 d-flex flex-column">
//             <h6>Mobile</h6>
//             <h6>Number</h6>
//           </div>
//           <div>
//             <input
//               type="number"
//               className=""
//               value={values.mobileNo}
//               onChange={handleChange}
//             />
//           </div>
//         </div>
//         <div class="d-flex mb-3" id="date">
//           <h6 class="me-3 py-2">DOB</h6>
//           <div>
//             <input
//               type="date"
//               value={values.data}
//               onChange={handleChange}
//               style={{
//                 width: "200px",
//                 marginBottom: "10px",
//                 marginTop: "6px",
//                 marginLeft: "1rem",
//               }}
//             />
//           </div>
//         </div>
//         <div class="d-flex mb-3" id="region">
//           <h6 class="me-2 py-2">Country</h6>
//           <select
//             id="region"
//             style={{ width: "200px", marginBottom: "10px", marginTop: "6px" }}
//             onChange={handleChange}
//           >
//             <option value="">Select an option</option>
//             <option value="India">India</option>
//             <option value="Asia">ASIA</option>
//             <option value="Europs">EUROPE</option>
//             <option value="Africa">AFRICA</option>
//             <option value="North America">NORTH-AMERICA</option>
//             <option value="Australia">AUSTRALIA</option>
//           </select>
//         </div>
//         <div class="d-flex mb-3" id="category">
//           <h6>which Products are you looking for ?</h6>
//           <div>
//             <div className="d-flex flex-column text-start">
//               <label>
//                 <input
//                   type="checkbox"
//                   name="category"
//                   value="Fruit pergmented makeup"
//                 />
//                 Fruit pergmented makeup
//               </label>
//               <label>
//                 <input
//                   type="checkbox"
//                   name="category"
//                   value="Skin Care"
//                 ></input>
//                 Skin Care
//               </label>
//               <label>
//                 <input
//                   type="checkbox"
//                   name="category"
//                   value="Hair & Body"
//                 ></input>
//                 Hair & Body
//               </label>
//             </div>
//           </div>
//         </div>
//         <input
//           type="submit"
//           value="REGISTER"
//           id="register"
//           class="mt-3 sign"
//           style={{ width: "200px", marginBottom: "10px" }}
//         ></input>
//       </div>
//     </form>
//   );
// };
