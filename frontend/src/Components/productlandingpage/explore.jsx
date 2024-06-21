import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import * as icon from "react-bootstrap-icons";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function Explore() {
  return (
    <div>
      <section className="container position-relative">
        <div className="mt-2 position-relative">
          <div className="prices2">
            <img
              src="https://cdn.no-toxic.com/q_auto:best,f_auto,fl_lossy,w_auto,c_limit,dpr_auto/v56/pure_temporary/ingredient_glossary_banner"
              style={{ width: "100%" }}
              alt="heroimages"
            />
            <div
              class="centered fw-semibold display-6"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              Ingredient Glossary
            </div>
          </div>
        </div>
        <div className="row mt-3 px-4">
          <div className="col-3">
            <img
              src={process.env.PUBLIC_URL + "/1.png"}
              style={{ width: "14rem", marginBottom: "2rem" }}
              alt="heroimages"
            />
            <h3>Guaranteed PURE</h3>
            <p>
              All 100% PURE™ formulations adhere to strict purity standards and
              will never contain harsh or toxic ingredients
            </p>
          </div>
          <div className="col-3">
            <img
              src={process.env.PUBLIC_URL + "/2.png"}
              style={{ width: "14rem", marginBottom: "2rem" }}
              alt="heroimages"
            />
            <h3>Naturally Pigmented</h3>
            <p>
              We source pigments from fruit, vegetables, tea, cocoa, and
              minerals to avoid commonly used heavy metal dyes and lakes
            </p>
          </div>
          <div className="col-3">
            <img
              src={process.env.PUBLIC_URL + "/3.png"}
              style={{ width: "14rem", height: "12rem", marginBottom: "2rem" }}
              alt="heroimages"
            />
            <h3>Completely Cruelty-Free</h3>
            <p>
              Our commitment to animal welfare means that we will never, EVER
              test on animals – and that our products will always be certified
              cruelty-free
            </p>
          </div>
          <div className="col-3">
            <img
              src={process.env.PUBLIC_URL + "/4.png"}
              style={{ width: "14rem", height: "10rem", marginBottom: "4rem" }}
              alt="heroimages"
            />
            <h3>Ingredient Sourcing</h3>
            <p>
              We go through a painstaking process to avoid animal-sourced
              ingredients and opt for vegan, cruelty-free alternatives
            </p>
          </div>
        </div>
        {/* <div class="row">
          {category.map((ele) => {
            return (
              <div class="col-6 col-lg-3">
                <div className="item-card">
                  <div className="text-center position-relative">
                    <Link
                      to={{
                        pathname: "/pdp",
                        search: `?param1=${ele.product_id}`,
                      }}
                    >
                      <img
                        src={ele.image}
                        alt="image1"
                        className="w-100 h-100"
                      />
                    </Link>
                  </div>
                  <div className="content">
                    <div className="d-inline" style={{ fontSize: "1rem" }}>
                      <div>
                        <ToastContainer />
                        <icon.StarFill className="icon" />
                        <icon.StarFill className="icon" />
                        <icon.StarFill className="icon" />
                        <icon.StarFill className="icon" />
                      </div>
                    </div>
                    <div className="pcontainer">
                      <p className="p-holder">{ele.product_name}</p>
                    </div>
                    <p className="costcolor">
                      ${ele.product_price}
                    </p>
                    <button className="butn" onClick={(e) => handlecart(ele)}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div> */}
      </section>
    </div>
  );
}
