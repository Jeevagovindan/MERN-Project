import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import React from "react";
import * as icon from "react-bootstrap-icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function PdpPage() {
  const [productslist, setProductlist] = useState([{}]);
  const [quantity, setQuantity] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const product_id = searchParams.get("param1");
  // const [editId, setEditId] = useState("");
  // const [editName, setEditName] = useState("");
  // const [editPrice, setEditPrice] = useState("");
  // const editid = 1905072;
  useEffect(() => {
    axios
      .get(`http://localhost:5000/getproductbyid/${product_id}`)
      .then((res) => {
        setProductlist(res.data);
        console.log(res.data);
      });
    // setProductlist(res.data);
    // console.log(productslist[0].product_id, "id");
  }, []);
  const handleClick = () => {
    if (!localStorage.getItem("username")) {
      toast.success("Please Login to access Cart", {
        autoClose: 850,
        position: "top-center",
        style: { background: "#fce4de" },
      });
      navigate("/login");
      return;
    }

    axios
      .post(`http://localhost:5000/addcart`, {
        name: productslist.product_name,
        price: productslist.product_price,
        product_id: productslist.product_id,
        image: productslist.image,
      })
      .then(() => {
        toast.success("Added to Cart Successfully!!", {
          autoClose: 850,
          position: "top-center",
          style: { background: "#fce4de" },
        });
        localStorage.setItem("quantity", quantity);
        localStorage.setItem("countvalue", 1);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div class="container">
      <div class="row text-start">
        <div class="d-inline-flex column-gap-3 ms-3">
          <p>
            <Link
              to="/"
              href="./index.html"
              class="fw-semibold fs-6 text-body-tertiary"
              style={{ textDecoration: "none", color: "#909294" }}
            >
              Home {">"}
            </Link>
          </p>
          {/* <p>
            <Link
              to="/plp"
              class="fw-semibold fs-6 text-body-tertiary"
              style={{ textDecoration: "none", color: "#909294" }}
            >
              Cosmetics {">"}
            </Link>
          </p> */}
          <p
            class="fw-semibold fs-6 text-body-tertiary"
            style={{ color: "#909294" }}
          >
            Product{" "}
          </p>
        </div>
        <div class="col">
          <img
            width="350px"
            src={productslist.image}
            class="productpageimage"
            alt=""
          ></img>
        </div>
        <div class="col">
          <div class="i-container">
            <ToastContainer />
            <icon.StarFill style={{ color: "#F38188" }} />
            <icon.StarFill style={{ color: "#F38188" }} />
            <icon.StarFill style={{ color: "#F38188" }} />
            <icon.StarFill style={{ color: "#F38188" }} />
            <icon.StarHalf style={{ color: "#F38188" }} />
            (636)
          </div>
          <h1 class="fw-semibold">{productslist.product_name}</h1>
          <p class="fs-6">{productslist.product_description}</p>
          <p class="fw-lighter">
            Fruit Pigmented®Natural ®Natural Cruelty ®Cruelty FreeGluten ®Gluten
            FreeGluten ®Made in USAMom's Choice ®Mom's Choice
          </p>
          <hr class="mb-1" style={{ width: "95%" }} />
          <div class="flex d-inline-flex mt-2">
            <p
              id="price"
              class="mb-0 me-2"
              style={{ color: "rgb(186, 99, 99)" }}
            >
              ${productslist.product_price}
            </p>
            <div class="vertical-divider"></div>
            {/* <p class="mb-0 text-center">Quantity</p>
            <input
              type="number"
              style={{ height: "20px", width: "50px" }}
              min="1"
              class="count me-2 ms-2 mt-1"
              value={quantity}
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
            ></input> */}
            <p id="price">Shop now. Pay with Klarna. Learn more</p>
          </div>
          <button
            class="fw-bold butn"
            style={{ height: "4rem" }}
            onClick={handleClick}
          >
            Add to Cart
          </button>
          <p
            class="test-reset"
            style={{ textdecoration: "underline", cursor: "pointer" }}
          >
            Love it or your money back.
          </p>
        </div>
      </div>
      <div class="text-center mt-3">
        <h4>Watch Our Video</h4>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ajmJVxmtHBQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <h6 class="hov">Product Highlights</h6>
      </div>
    </div>
  );
}
