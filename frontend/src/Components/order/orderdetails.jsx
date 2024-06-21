import React, { useEffect, useState } from "react";
import axios from "axios";

export default function OrderDetails() {
  const [orderdetails, setOrderdetails] = useState([]);
  const [productcost, setProductcost] = useState(0);
  useEffect(() => {
    axios.get(`http://localhost:5000/getorder`).then((res) => {
      setOrderdetails(res.data);
      let totalCost = res.data.reduce((accumulator, item) => {
        return accumulator + (item.total_cost / item.quantity) * item.quantity;
      }, 0);
      setProductcost(totalCost);
      console.log("total", totalCost);
    });
  }, []);
  return (
    <div>
      {" "}
      <div
        className="row m-2"
        style={{ height: "600px", backgroundColor: "white" }}
      >
        <h5 className="d-flex text-start m-2">Order Summary</h5>
        <hr></hr>
        <p className="d-flex text-start mb-2">
          <b>{orderdetails.length} Items</b>
        </p>
        {orderdetails.map((item) => {
          const { product_name, total_cost, quantity, image } = item;
          return (
            <>
              <div className="row mt-2 mb-3">
                <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                  <img
                    src={image}
                    className="img-fluid"
                    width="100%"
                    alt="orderimage"
                  />
                </div>
                <div className="col-lg-5 col-md-5 col-sm-4 col-4 text-start">
                  {product_name}
                  <p>Quantity : {quantity}</p>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                  ${total_cost}
                </div>
              </div>
            </>
          );
        })}
        <hr></hr>
        <div className="d-flex text-start">
          <input
            type="text"
            placeholder="Gift card or discount code"
            className="border border-1 p-2"
            style={{ width: "70%", borderRadius: "5px" }}
          />
          <button className="butn" style={{ width: "30%" }}>
            Apply
          </button>
        </div>
        <p class="text-start text-body-tertiary" style={{ color: "#f38189" }}>
          Only one discount code can be applied per order
        </p>
        <hr />
        <div className="row">
          <div className="col-6">
            <p className="text-start">Subtotal</p>
            <p className="d-flex justify-content-lg-start">Shipping</p>
            <p className="d-flex justify-content-lg-start">Estimated Tax</p>
          </div>
          <div className="col-6">
            <p className="d-flex justify-content-lg-end">${productcost}</p>
            <p className="d-flex justify-content-lg-end">Free</p>
            <p className="d-flex justify-content-lg-end">$0.00</p>
          </div>
        </div>
        <hr></hr>
        <div className="row">
          <div className="col-6">
            <h5 className="d-flex justify-content-lg-start">Total (USD)</h5>
          </div>
          <div className="col-6">
            <h5 className="d-flex justify-content-lg-end">${productcost}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
