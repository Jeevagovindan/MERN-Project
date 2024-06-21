import "bootstrap/dist/css/bootstrap.min.css";
import LoginControlled from "./logincontrolled";
import { Link } from "react-router-dom";
export default function LoginContent() {
  return (
    <div>
      <div className="container-fluid registration">
        <div className="contentwrap">
          <div class="text-center p-h-xlg p-v-xlg bg-white p-5">
            <h6 class="fw-bold space">HEY GORGEOUS</h6>
            <h2 class="fw-bold">Welcome Back!</h2>
            <p style={{ fontsize: "small" }}>
              Sign in below to access your Purist Perks account
            </p>
            <LoginControlled />

            <p class="fw-bold mt-5">
              <Link
                to="/registration"
                className="text-decoration-none text-dark"
              >
                NOT A MEMBER? JOIN HERE
              </Link>
            </p>

            <hr class="position-absolute" style={{ width: "60%" }} />
            <p class="position-relative bg-white d-inline-block or">OR</p>
            <div class="d-flex justify-content-center flex-wrap buttons">
              <ul class="ullist" style={{ maxwidth: "100%" }}>
                <li style={{ margin: "16px 0 0 0", listStyle: "none" }}>
                  <img
                    src="./Images/registration/facebook.png"
                    alt=""
                    class="w-50 socialfac loginfacgoogle"
                  />
                </li>
                <li style={{ margin: "16px 0 0 0 ", listStyle: "none" }}>
                  <img
                    src="./Images/registration/google.png"
                    alt=""
                    class="w-50 socialfac loginfacgoogle"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
