import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

export default function Orderummary() {
  const [orderdetails, setOrderdetails] = useState([]);
  const [shippingdetails, setShippingdetails] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get(`http://localhost:5000/getshipping`).then((res) => {
      setShippingdetails(res.data);
      // console.log(shippingdetails);
    });
    axios.get(`http://localhost:5000/getorder`).then((res) => {
      setOrderdetails(res.data);
    });
  }, []);
  const handleDelete = async () => {
    try {
      await axios.delete("http://localhost:5000/deleteOrder").then((res) => {
        console.log("deleted");
        navigate("/");
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Card body bg="light" text="black" className="text-start">
        <h2 className="text-center">Order Summary</h2>
        {shippingdetails.map((ele, index) => (
          <div key={index}>
            <h4 className="fs-3">Shipping Address:</h4>
            <Card body className="mt-3">
              <p className="fs-5">
                {ele.fname} {ele.lname}
              </p>
              <p className="fs-5">
                {ele.address}, {ele.city}, {ele.state}, {ele.country}, {ele.pin}
              </p>
              <p className="fs-5">Phone Number: {ele.mobile}</p>
            </Card>

            <h4 className="fs-3 mt-4">Item Details:</h4>
            <Card body className="mt-3">
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
            </Card>
            <div className="d-flex justify-content-end mt-3">
              <button
                onClick={() => {
                  handleDelete();
                }}
                className="butn"
                style={{ width: "40%" }}
              >
                Continue Shopping
              </button>
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
}
