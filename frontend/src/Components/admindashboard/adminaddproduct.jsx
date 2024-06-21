import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import $ from "jquery";
import "../style.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

export default function Adminaddproduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setcategory] = useState("");
  const [getcategory, setGetcategory] = useState([]);
  const [subcategory, setsubcategory] = useState("");
  const [productid, setProductId] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [stock, setStock] = useState("");
  const [productdescription, setProductDescription] = useState("");
  const [color, setcolor] = useState("");
  const [image, setImage] = useState("");
  const [getcolor, setGetcolor] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/colorsget").then((res) => {
      setGetcolor(res.data);
    });
    axios.get("http://localhost:5000/categoryget").then((res) => {
      setGetcategory(res.data);
    });
  });
  // const handleCategoryChange = async (e) => {
  //   setcategory(e.target.value);
  //   try {
  //     const response = await axios.get(
  //       `http://localhost:5000/getselectsubcat?categoryName=${e.target.value}`
  //     );
  //     setsubcategory(response.data.subcategories);
  //   } catch (error) {
  //     console.log("Error fetching subcategories: ", error);
  //   }
  // };
  const handleCategoryChange = async (e) => {
    setcategory(e.target.value);
    try {
      const response = await axios.get(
        `http://localhost:5000/getselectsubcat?categoryName=${e.target.value}`
      );
      setsubcategory(response.data.subcategories);

      setSelectedSubCategory("");
    } catch (error) {
      console.log("Error fetching subcategories: ", error);
    }
  };

  const handleSubCategoryChange = async (e) => {
    setSelectedSubCategory(e.target.value);
    console.log(e.target.value, "value");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(image, "image");
    $(".error").remove();
    if (name.length < 1) {
      $("#name").after('<p class="fs-6 error">*This field is required</p>');
    } else {
      var regEx = /^[A-Za-z\s]*$/;
      var validName = regEx.test(name);
      if (!validName) {
        $("#name").after('<p class="error">*Invalid</p>');
      }
    }
    var regexnum = /^-?\d+(\.\d+)?$/;
    var testprice = regexnum.test(price);
    if (price === "") {
      $("#price").after('<p class="fs-6 error">*This field is required</p>');
    } else if (!testprice) {
      $("#price").after('<p class="fs-6 error">*Invalid</p>');
    }
    var testproductid = regexnum.test(productid);
    if (productid === "") {
      $("#productid").after(
        '<p class="fs-6 error">*This field is required</p>'
      );
    } else if (!testproductid) {
      $("#productid").after('<p class="fs-6 error">*Invalid</p>');
    }

    var regexstock = /^[1-9]\d*(\.\d+)?$/;
    var teststock = regexstock.test(stock);
    if (stock === "") {
      $("#stock").after('<p class="fs-6 error">*This field is required</p>');
    } else if (!teststock) {
      $("#stock").after('<p class="fs-6 error">*Invalid</p>');
    }

    if (category === "") {
      $("#category").after(
        '<p class="fs-6 error">*please select an option</p>'
      );
    }
    if (subcategory === "") {
      $("#subcategory").after(
        '<p class="fs-6 error">*please select an option</p>'
      );
    }

    if (color === "") {
      $("#color").after('<p class="fs-6 error">*please select an option</p>');
    }

    if (productdescription.length < 5) {
      $("#productdescription").after(
        '<p class="fs-6 error">*minimum 5 characters</p>'
      );
    }
    if (image === "") {
      $("#image").after('<p class="fs-6 error">paste your Image Link</p>');
    }

    // if (cartdescription.length < 5) {
    //   $("#cartdescription").after(
    //     '<p class="fs-6 error">*minimum 5 characters</p>'
    //   );
    // }

    // const fileInput = $("#file")[0];
    // if (!fileInput.files || !fileInput.files[0]) {
    //   $("#image-file").after(
    //     '<div class="error">*Please upload an image file</div>'
    //   );
    // }
    console.log(
      "data",
      name,
      price,
      category,
      productdescription,
      productid,
      color,
      stock,
      selectedSubCategory,
      image
    );
    axios
      .post("http://localhost:5000/addproduct", {
        name,
        price,
        category,
        productdescription,
        productid,
        color,
        stock,
        selectedSubCategory,
        image,
      })
      .then((res) => {
        if (res.data === "success") {
          console.log("Happy");
        } else {
          toast.success("Product Added Successfully", {
            autoClose: 850,
            position: "top-center",
            style: { background: "#fce4de" },
          });
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="">
      <div>
        <div class="text-center p-h-xlg p-v-xlg bg-white p-5">
          <h2 class="fw-bold">Add Product</h2>

          <form action="" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-12 col-lg-6 col-md-6 d-flex flex-column align-items-center">
                <label className="d-flex flex-column text-start mt-1 mb-1">
                  <div>
                    Enter Product Name
                    <span style={{ textDecoration: "none" }}>*</span>
                  </div>

                  <input
                    type="text"
                    id="name"
                    onChange={(e) => setName(e.target.value)}
                    style={{ marginTop: "5px", width: "250px" }}
                  ></input>
                </label>
                <label className="d-flex flex-column text-start mt-1 mb-1">
                  <div>
                    Enter Product Price
                    <span style={{ textDecoration: "none" }}>*</span>
                  </div>
                  <input
                    type="text"
                    id="price"
                    onChange={(e) => setPrice(e.target.value)}
                    style={{ marginTop: "5px", width: "250px" }}
                  ></input>
                </label>
                <label className="d-flex flex-column text-start mt-1 mb-1">
                  Choose Category
                  <select
                    id="category"
                    style={{ marginTop: "5px", width: "250px", height: "2rem" }}
                    onChange={handleCategoryChange}
                    value={category}
                  >
                    <option value="">Select an option</option>
                    {getcategory.map((val, e) => {
                      return (
                        <option
                          key={e}
                          value={val.category_name}
                          id={e.category_id}
                        >
                          {val.category_name}
                        </option>
                      );
                    })}
                  </select>
                </label>
                <label className="d-flex flex-column text-start mt-1 mb-1">
                  Choose Sub-Category
                  <select
                    id="subcategory"
                    style={{ marginTop: "5px", width: "250px", height: "2rem" }}
                    value={selectedSubCategory}
                    onChange={handleSubCategoryChange}
                  >
                    <option value="">Select an option</option>
                    {Array.isArray(subcategory) &&
                      subcategory.map((val, e) => {
                        return (
                          <option key={e} value={val.subcategory_name}>
                            {val.subcategory_name}
                          </option>
                        );
                      })}
                  </select>
                </label>
                <label className="d-flex flex-column text-start mt-1 mb-1">
                  Enter Product Description
                  <textarea
                    style={{
                      marginTop: "5px",
                      width: "250px",
                      height: "4rem",
                      resize: "none",
                    }}
                    rows="4"
                    cols="10"
                    name="comment"
                    form="usrform"
                    onChange={(e) => setProductDescription(e.target.value)}
                    id="productdescription"
                    spellcheck="false"
                  >
                    ...
                  </textarea>
                </label>
                <ToastContainer />
              </div>

              <div className="col-12 col-lg-6 col-md-6 d-flex flex-column align-items-center">
                <label className="d-flex flex-column text-start mt-1 mb-1">
                  <div>
                    Enter Product Id
                    <span style={{ textDecoration: "none" }}>*</span>
                  </div>
                  <input
                    type="text"
                    style={{ marginTop: "5px", width: "250px" }}
                    id="productid"
                    onChange={(e) => setProductId(e.target.value)}
                  ></input>
                </label>
                <label className="d-flex flex-column text-start mt-1 mb-1">
                  Available Stock
                  <input
                    type="number"
                    min="1"
                    id="stock"
                    style={{ marginTop: "5px", width: "250px" }}
                    onChange={(e) => setStock(e.target.value)}
                  ></input>
                </label>
                {/* <label className="d-flex flex-column text-start mt-1 mb-1">
                  Enter Cart Description
                  <textarea
                    style={{
                      marginTop: "5px",
                      width: "250px",
                      height: "2rem",
                      resize: "none",
                    }}
                    rows="4"
                    cols="10"
                    name="comment"
                    form="usrform"
                    id="cartdescription"
                    onChange={(e) => setcartDescription(e.target.value)}
                  >
                    ...
                  </textarea>
                </label> */}
                <label className="d-flex flex-column text-start mt-1 mb-1">
                  Available Product Color
                  <select
                    id="color"
                    style={{ marginTop: "5px", width: "250px", height: "2rem" }}
                    onChange={(e) => setcolor(e.target.value)}
                  >
                    <option value="">Select an option</option>
                    {getcolor.map((val, e) => {
                      return (
                        <option key={e} value={val.color_name} id={e.color_id}>
                          {val.color_name}
                        </option>
                      );
                    })}
                  </select>
                </label>
                <label
                  className="d-flex flex-column text-start mt-1 mb-1"
                  id="image-file"
                >
                  Image
                  <input
                    type="text"
                    id="image"
                    accept="image/png, image/jpeg, image/webp"
                    style={{ marginTop: "5px", width: "250px" }}
                    value={image}
                    onChange={(e) => {
                      setImage(e.target.value);
                    }}
                  ></input>
                </label>
              </div>
            </div>
            <input
              type="submit"
              value="Add"
              className="butn"
              style={{ width: "100px" }}
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
}
