import "bootstrap/dist/css/bootstrap.min.css";
import ForgotPassword from "./forgotcontroller";
import { Link } from "react-router-dom";
export default function Forgot() {
  return (
    <div>
      <div className="container-fluid registration">
        <div className="contentwrap">
          <div class="text-center p-h-xlg p-v-xlg bg-white p-5">
            <h2 class="fw-bold space">Forgot password?</h2>
            <h6 class="fw-bold">
              No worries,we'll send you reset Instructions
            </h6>
            <ForgotPassword />
            <Link
              to="/login"
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <h6 class="fw-bold mt-2">Back to Login</h6>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
