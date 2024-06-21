import "bootstrap/dist/css/bootstrap.min.css";
import RegistrationControlled from "./registrationcontrolled";
import { Link } from "react-router-dom";

export default function RegistrationContent() {
  return (
    <div className="container-fluid registration">
      <div className="contentwrap">
        <div class="text-center p-h-xlg p-v-xlg bg-white p-5">
          <h6 class="fw-semibold space">WANT INSIDER ACCESS?</h6>
          <h2 class="fw-semibold">Create Your Account</h2>
          <p style={{ fontsize: "small" }}>
            Sign up to receive exclusive offers, redeemable points, and more!
          </p>
          <div className="row">
            <div className="col-5">
              <img
                src="./Images/registration/registration.png"
                style={{ height: "300px" }}
                alt=""
              />
            </div>
            <div className="col-5 d-flex flex-column text-start">
              <RegistrationControlled></RegistrationControlled>
              {/* <img
                src="/Images/registration/profile.png"
                alt="profile"
                className="Aligncenter"
                style={{
                  width: "20px",
                  marginBottom: "1rem",
                  display: "flex",
                }}
              />
              <img
                src="/Images/registration/email.png"
                style={{ width: "30px", marginBottom: "1rem" }}
                alt=""
              />
              <img
                src="/Images/registration/lock.png"
                style={{ width: "30px", marginBottom: "1rem" }}
                alt=""
              />
              <img
                src="/Images/registration/key.jpeg"
                style={{ width: "50px" }}
                alt=""
              />

              <h6 className="P-0">Gender</h6>
              <h6>DOB</h6>
              <h6>Country</h6>
              <h6>which Products are you looking for ?</h6> */}
            </div>
            {/* <RegistrationControlled></RegistrationControlled> */}
          </div>

          <p class="fw-bold mt-5 space">
            <Link to="/login" className="text-decoration-none text-dark">
              ALREADY A MEMBER? SIGN IN
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
