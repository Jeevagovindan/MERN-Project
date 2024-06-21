import React from "react";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function PaymentContent() {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [card, setcard] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [ccv, setCcv] = useState("");
  const navigate = useNavigate();
  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!paymentMethod) {
      toast.success("Please select a payment method", {
        autoClose: 850,
        position: "top-center",
        style: { background: "#fce4de" },
      });
      return;
    }
    if (paymentMethod === "creditCard") {
      if (!card || !name || !ccv) {
        toast.success("Please enter all required card details", {
          autoClose: 850,
          position: "top-center",
          style: { background: "#fce4de" },
        });
        return;
      }
    }
    const paymentData = {
      paymentMethod,
      cardNumber: card,
      nameOnCard: name,
      expiryDate: date,
      securityCode: ccv,
    };
    axios
      .post("http://localhost:5000/payment", paymentData)
      .then((res) => {
        navigate("/orderconformed");
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <h2 className="mb-0">Payment</h2>
      <p>All transactions are secure and safe.</p>
      <div className="d-flex justify-content-center">
        <Card
          bg={"light"}
          key={"Light"}
          text={"light"}
          style={{ width: "36rem" }}
          className="mb-2"
        >
          <Card.Header
            style={{ backgroundColor: "white" }}
            className="border border-black"
          >
            <div className="d-flex text-black">
              <input
                type="radio"
                name="payment"
                value="creditCard"
                checked={paymentMethod === "creditCard"}
                onChange={handlePaymentMethodChange}
                className="me-2"
              />

              <h6 className="mb-0">credit Card</h6>
              <div className="d-flex ms-4">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1200px-Visa_Inc._logo.svg.png?20170118154621"
                  height={"20rem"}
                  alt="visa"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/2560px-MasterCard_Logo.svg.png"
                  height={"20rem"}
                  alt="visa"
                />
              </div>
            </div>
          </Card.Header>
          <Card.Body style={{ backgroundColor: "#fce4de" }}>
            <input
              type="Number"
              placeholder="Card Number"
              className="border border-1 p-2 mb-3"
              style={{ width: "100%", borderRadius: "5px" }}
              onChange={(e) => setcard(e.target.value)}
            />
            <input
              type="text"
              placeholder="Name on card"
              className="border border-1 p-2 mb-3"
              style={{ width: "100%", borderRadius: "5px" }}
              onChange={(e) => setName(e.target.value)}
            />
            <div className="d-flex">
              <input
                type="date"
                className="border border-1 p-2"
                style={{ width: "50%", borderRadius: "5px" }}
                onChange={(e) => setDate(e.target.value)}
              />
              <input
                type="number"
                placeholder="Security Code"
                className="border border-1 p-2"
                style={{ width: "50%", borderRadius: "5px" }}
                onChange={(e) => setCcv(e.target.value)}
              />
            </div>
          </Card.Body>
          <ToastContainer />
          <Card.Header style={{ backgroundColor: "white" }}>
            <div className="d-flex text-start text-black">
              <input
                type="radio"
                name="payment"
                value="payOnDelivery"
                checked={paymentMethod === "payOnDelivery"}
                onChange={handlePaymentMethodChange}
              />
              <h6 className="mb-0 ms-1">Pay On Delivery</h6>
            </div>
          </Card.Header>
        </Card>
      </div>
      <div class="my-4 d-flex justify-content-center">
        <button
          className="butn"
          style={{ width: "30%" }}
          onClick={handleSubmit}
        >
          Paynow
        </button>
      </div>
    </div>
  );
}
