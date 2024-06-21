import React from "react";
import { Link } from "react-router-dom";
import OrderDetails from "../order/orderdetails";
import PaymentContent from "./paymentcontent";

export default function Payment() {
  return (
    <>
      <div className="container-fluid">
        <header class="startheader head text-center p-2 fw-bold text-uppercase text-xxs bg-100-1 l-s">
          Get 2 Free samples with Any $25 purchase
        </header>
        <div className="row d-flex justify-content-center">
          <div className="col-lg-7 mt-2 flex-column p-2 border-end">
            <div>
              <Link to="/">
                <img
                  src="./Images/100percentpure/100percentpure.webp"
                  alt="100percentpure"
                  height={"50rem"}
                />
              </Link>
            </div>
            <div class="d-inline-flex mt-3">
              <p>
                <Link
                  to="/"
                  href="./index.html"
                  class="text-body-tertiary"
                  style={{ textDecoration: "none", color: "#f38189" }}
                >
                  Home <span className="text-decoration-none">{">"}</span>
                </Link>
              </p>
              <p>
                <Link
                  to="/plp"
                  class="ms-1 text-body-tertiary"
                  style={{ textDecoration: "none", color: "#f38189" }}
                >
                  Cart <span className="text-decoration-none">{">"}</span>
                </Link>
              </p>
              <p>
                <Link
                  to="/Shipping"
                  class="ms-1 text-body-tertiary"
                  style={{ textDecoration: "none", color: "#f38189" }}
                >
                  Shipping<span className="text-decoration-none">{">"}</span>
                </Link>
              </p>

              <p
                class="fw-semibold fs-6 ms-1 text-body-tertiary"
                style={{ color: "black" }}
              >
                Payment{" "}
              </p>
            </div>
            <div className="d-flex justify-content-center">
              <hr style={{ width: "90%" }} />
            </div>
            <div className="m-3 d-flex flex-column justify-content-center text-start">
              <PaymentContent />
            </div>
          </div>
          <div className="col-lg-5 d-flex flex-column">
            <OrderDetails />
          </div>
        </div>
      </div>
    </>
  );
}
