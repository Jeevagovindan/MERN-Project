import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import { useState, useEffect } from "react";
import { Bag, X, DashCircle, PlusCircle } from "react-bootstrap-icons";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, Col, Row } from "react-bootstrap";

export default function Cart() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartitems, setCartitems] = useState([]);
  const [count, setCount] = useState(true);
  const [productcost, setProductcost] = useState(0);
  // var countvalue = localStorage.getItem("countvalue");
  // const [bagcount, setBagcount] = useState(true);
  // const quantity = localStorage.getItem("quantity");
  const handleMinus = (id, quantity, product_price) => {
    if (quantity > 1) {
      axios
        .put(`http://localhost:5000/cartupdate/${id}`, {
          quantity: quantity - 1,
          product_price: (product_price * (quantity - 1)) / quantity,
        })
        .then((res) => {
          setCount((prevState) => !prevState);
          // setProductcost((prevCost) => prevCost - product_price / quantity);
        });
    }
  };
  const handlePlus = (id, quantity, product_price) => {
    axios
      .put(`http://localhost:5000/cartupdate/${id}`, {
        quantity: quantity + 1,
        product_price: (product_price * (quantity + 1)) / quantity,
      })
      .then((res) => {
        setCount((prevState) => !prevState);
        // setProductcost((prevCost) => prevCost + product_price / quantity);
      });
  };
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:5000/getcart").then((res) => {
      setCartitems(res.data);
      let totalCost = res.data.reduce((accumulator, item) => {
        return (
          accumulator + (item.product_price / item.quantity) * item.quantity
        );
      }, 0);
      setProductcost(totalCost);
    });
  });
  const handleCartIconClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleCloseClick = () => {
    setIsCartOpen(false);
  };
  const handleSubmit = (product) => {
    // setBagcount(false);
    const orderData = cartitems.map((item) => ({
      product_id: item.product_id,
      product_name: item.product_name,
      total_cost: item.product_price,
      quantity: item.quantity,
      image: item.image,
    }));
    axios
      .post("http://localhost:5000/orderpost", {
        orderData,
      })
      .then((res) => {
        console.log("sucess");
      });
    navigate("/shipping");
    axios.delete("http://localhost:5000/cartdelete").then((res) => {
      console.log("deleted");
    });
  };
  const handleDelete = async (id) => {
    console.log(id, "deleteid");
    try {
      const confirmed = window.confirm(
        "Are you sure you want to delete this product?"
      );
      if (confirmed) {
        const response = await axios.delete(
          `http://localhost:5000/cartremove/${id}`
        );
        if (response.data === "success") {
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="position-relative">
        <Bag
          className="fs-4"
          onClick={handleCartIconClick}
          style={{ cursor: "pointer" }}
        />
        <div
          style={{
            width: "25px",
            height: "25px",
            right: "-15px",
            top: "-5px",
          }}
          className="position-absolute fw-bold text-center fs-6 text-white bg-100 rounded rounded-circle"
        >
          {cartitems.length}
        </div>
      </div>
      {isCartOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            width: "30%",
            height: "100%",
            backgroundColor: "#fff",
            zIndex: "5",
            padding: "1rem",
          }}
        >
          <div
            className="d-flex align-items-center justify-content-center row"
            style={{
              fontSize: "2vw",
              fontWeight: "bold",
              backgroundColor: "#fce4de",
            }}
          >
            <h3 className="col-8">Your Tote</h3>
            <X
              className="fw-bold display-6 col-4"
              onClick={handleCloseClick}
              style={{ cursor: "pointer" }}
            />
          </div>

          <div className="text-center p-1 cartbordercolor">
            <h6>FREE GIFT</h6>
            <p className="mb-0">Multi-Vitamin PM Serum ($72 value)</p>
            <h6
              style={{
                textDecoration: "underline",
                letterSpacing: "2px",
                marginTop: "0",
              }}
            >
              SPEND $75 MORE TO UNLOCK
            </h6>
          </div>
          <div
            className="text-center mt-2 p-2 cartcolor"
            style={{ backgroundColor: "#f38189" }}
          >
            <h6>FREE SAMPLE</h6>
            <p className="mb-0">Get 2 free samples</p>
          </div>
          <div
            className="overflow-scroll-y"
            style={{
              maxHeight: "250px",
              overflowY: "scroll",
              overflowX: "hidden",
            }}
          >
            {cartitems.length > 0 ? (
              <>
                {cartitems.map((item) => {
                  const {
                    id,
                    product_id,
                    product_name,
                    product_price,
                    quantity,
                    image,
                  } = item;
                  console.log(image, "carts");

                  return (
                    <>
                      <div className="row mt-2 mb-3" key={id}>
                        <div className="col-lg-3 col-md-4 col-sm-4 col-4">
                          <img
                            src={image}
                            className="img-fluid"
                            width="100%"
                            alt="orderimage"
                          />
                        </div>

                        <div className="col-lg-4 col-md-5 col-sm-4 col-4 text-start">
                          {product_name}
                          <div className="d-flex align-items-center">
                            <DashCircle
                              id="minus"
                              onClick={(e) =>
                                handleMinus(id, quantity, product_price)
                              }
                            />
                            <div
                              className="px-1 fw-bold"
                              id="pcount"
                              style={{
                                fontWeight: "bold",
                              }}
                            >
                              {quantity}
                            </div>

                            <PlusCircle
                              id="plus"
                              onClick={(e) =>
                                handlePlus(id, quantity, product_price)
                              }
                            />
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-3 col-3 text-start">
                          <h4 className="fw-semibold">${product_price}</h4>
                          <button
                            onClick={() => handleDelete(product_id)}
                            style={{
                              backgroundColor: "#fce4de",
                              border: "none",
                              borderRadius: 2,
                              color: "black",
                              padding: "0 0.4rem",
                            }}
                          >
                            REMOVE
                          </button>
                        </div>
                      </div>
                      <div
                        className="bottom-0 position-fixed m-4 w-25"
                        style={{ backgroundColor: "white" }}
                      >
                        <hr style={{ width: "100%" }} />
                        <Row className="align-items-center text-start">
                          <Col xs={6}>
                            <h6 className="fw-semibold">TOTAL COST</h6>
                          </Col>
                          <Col xs={6} className="text-end">
                            <h4 className="fw-semibold">${productcost}</h4>
                          </Col>
                        </Row>
                        <Button
                          className="butn fw-bold"
                          onClick={() => {
                            handleSubmit(cartitems);
                          }}
                        >
                          Quick Checkout
                        </Button>
                      </div>
                    </>
                  );
                })}
              </>
            ) : (
              <div className="text-center mt-5">
                <h3 className="fw-semibold">Your tote is currently empty</h3>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
