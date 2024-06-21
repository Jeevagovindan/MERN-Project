import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import * as icon from "react-bootstrap-icons";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function Featured(props) {
  const { categoryName } = props;
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();
  const handlecart = (ele) => {
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
        name: ele.product_name,
        price: ele.product_price,
        product_id: ele.product_id,
        image: ele.image,
      })
      .then(() => {
        toast.success("Added to Cart Successfully!!", {
          autoClose: 850,
          position: "top-center",
          style: { background: "#fce4de" },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    axios.get("http://localhost:5000/products").then((res) => {
      setCategory(res.data);
    });
  }, []);
  return (
    <div>
      <div className="mt-2">
        <div className="prices2">
          <img
            src="https://cdn.no-toxic.com/q_auto:best,f_auto,fl_lossy,w_auto,c_limit,dpr_auto/v56//Collection-Banner/CP-T1-best-sellers-Mobile"
            style={{ width: "100%" }}
            alt="heroimages"
          />
        </div>
      </div>
      <section className="container position-relative mt-3">
        <div class="row">
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
                      {/* <span>{ele.oldprice}</span> */}
                    </p>
                    <button className="butn" onClick={(e) => handlecart(ele)}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
