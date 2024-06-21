import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import * as icon from "react-bootstrap-icons";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

// const product = [
//   {
//     image:
//       "https://cdn.no-toxic.com/q_auto:good,c_limit,w_300,f_auto,fl_lossy/l_Badges:badges,w_0.3,y_-0.3,x_0.34,fl_relative,pg_name:2020-readers-clean/l_Badges:badges,w_0.3,y_0.0,x_0.34,fl_relative,pg_name:2019-best-of-beauty-clean/l_Badges:badges,w_0.3,y_0.3,x_0.34,fl_relative,pg_name:2020-certclean-3rd-place/v1614126521/products/1CESSV/1CESS_Eye_Shadow_Vanille_Primary",
//     rating: "(1350)",
//     p: "Fruit Pigmented® Cocoa Butter Matte Lipstick",
//     newprice: "$28",
//     oldprice: "",
//     button: "CHOOSE COLOR",
//     star: <icon.StarFill className="icon"></icon.StarFill>,
//   },
//   {
//     image:
//       "https://cdn.no-toxic.com/q_auto:good,c_limit,w_300,f_auto,fl_lossy/v1579290740/products/1CFPBNP/1CFPBNP_Better_Naked_Palette_Primary",
//     rating: "(35)",
//     p: "Lavender Niacinamide  Pore Minimizer Tonique",
//     price: "$19",
//     oldprice: "$35",
//     button: "NOTIFY ME",
//     star: <icon.StarHalf className="icon" />,
//   },
//   {
//     image:
//       "https://cdn.no-toxic.com/q_auto:good,c_limit,w_300,f_auto,fl_lossy/v1582246714/products/1CNP/1CNP_Pretty_Naked_Palette_Primary",
//     rating: "(4857)",
//     p: "Fruit Pigmented® Ultra lenghting Mascara",
//     newprice: "$28",
//     oldprice: "",
//     button: "CHOOSE COLOR",
//     star: <icon.StarFill className="icon"></icon.StarFill>,
//   },
//   {
//     image:
//       "https://cdn.no-toxic.com/q_auto:good,c_limit,w_300,f_auto,fl_lossy/l_Badges:badges,w_0.3,y_-0.3,x_0.34,fl_relative,pg_name:2020-certclean-3rd-place/v1582238776/products/1CFPRGP/1CFPRGP_Rose_Gold_Palette_Primary",
//     rating: "(50)",
//     p: "Coffee Bean Face Cream",
//     newprice: "$25",
//     oldprice: "$45",
//     button: "NOTIFY ME",
//     star: <icon.StarHalf className="icon" />,
//   },
//   {
//     image:
//       "https://cdn.no-toxic.com/q_auto:good,c_limit,w_300,f_auto,fl_lossy/v1617312374/products/1CFPNIIP/1CFPNIIP_Palette_Berry_Naked_Primary",
//     rating: "(1350)",
//     p: "Fruit Pigmented® Full Coverage Water",
//     newprice: "$48",
//     oldprice: "",
//     button: "CHOOSE COLOR",
//     star: <icon.StarFill className="icon"></icon.StarFill>,
//   },
// ];

export default function PlpProduct(props) {
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
    axios
      .post("http://localhost:5000/getProductCategory", { categoryName })
      .then((res) => {
        setCategory(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  });
  if (categoryName === "Fruit Pegmented Makeup") {
    var image =
      "https://cdn.no-toxic.com/q_auto:best,f_auto,fl_lossy,w_auto,c_limit,dpr_auto/v56//Collection-Banner/CP-T1-FP-mobile";
  } else if (categoryName === "Skin Care") {
    image =
      "https://cdn.no-toxic.com/q_auto:best,f_auto,fl_lossy,w_auto,c_limit,dpr_auto/v56//Collection-Banner/CP-T1-Skin-Care-mobile";
  } else {
    image =
      "https://cdn.no-toxic.com/q_auto:best,f_auto,fl_lossy,w_auto,c_limit,dpr_auto/v56//Collection-Banner/CP-T1-Hair-Body-mobile";
  }

  return (
    <div>
      <div className="mt-2 position-relative">
        <div className="prices2">
          <img
            src={image}
            style={{ width: "100%", height: "20rem" }}
            alt="heroimages"
          />
        </div>
      </div>
      <section className="container position-relative">
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
