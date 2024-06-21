import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Passwordset() {
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const email = localStorage.getItem("email");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 1) {
      alert("Password is required");
      return;
    }

    if (password !== repassword) {
      alert("Passwords do not match");
      return;
    }

    axios
      .post("http://localhost:5000/passwordset", { email, password })
      .then((res) => {
        if (res.data.message === "Success") {
          toast.success("Password changed Successfully", {
            autoClose: 2000,
            position: "top-center",
            style: { background: "#fce4de" },
          });
          navigate("/login");
        } else if (res.data.message === "account_not_found") {
          alert("No record existed");
        } else if (res.data.message === "Internal Server Error") {
          alert("Internal Server Error");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Account Doesn't Exist");
      });
  };

  return (
    <div className="container-fluid registration">
      <div className="contentwrap">
        <div className="text-center p-h-xlg p-v-xlg bg-white p-5">
          <h2 className="fw-bold space">Password Reset</h2>
          <Form id="password_reset_form" onSubmit={handleSubmit}>
            <div className="d-flex justify-content-center flex-wrap login">
              <div className="d-flex flex-column">
                <Form.Group controlId="password">
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your new password"
                  />
                </Form.Group>
              </div>
              <div className="d-flex flex-column">
                <Form.Group controlId="repassword">
                  <Form.Control
                    type="password"
                    value={repassword}
                    onChange={(e) => setRepassword(e.target.value)}
                    placeholder="Re-enter your new password"
                  />
                </Form.Group>
              </div>
            </div>
            <Button variant="primary" type="submit" className="mt-2 sign">
              Change Password
            </Button>
          </Form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}
