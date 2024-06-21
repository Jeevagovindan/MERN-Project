import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";
import Ordersummary from "./ordersummary";

export default function Odercontent() {
  return (
    <>
      <div className="container-fluid registration">
        <div className="contentwrap">
          <div class="text-center p-h-xlg p-v-xlg bg-white p-5">
            <FontAwesomeIcon
              icon={faCheckCircle}
              size="5x"
              color="green"
              className="mb-3"
            />
            <h2 class="fw-bold space">Order Confirmed</h2>
            <h4 class="fw-bold">
              Thank you for your order! Your order has been confirmed.
            </h4>

            <p>
              An email with the order details has been sent to your registered
              email address.
            </p>
            <p>
              If you have any questions or need further assistance, please
              contact our customer support.
            </p>
            <p>Enjoy your purchase!</p>
            <Ordersummary />
          </div>
        </div>
      </div>
    </>
  );
}
