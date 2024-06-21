import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import $ from "jquery";
import "../style.css";

export default function Updateproduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setcategory] = useState("");
  const [subcategory, setsubcategory] = useState("");
  const [productid, setProductId] = useState("");
  const [stock, setStock] = useState("");
  const [productdescription, setProductDescription] = useState("");
  const [cartdescription, setcartDescription] = useState("");
  const [color, setcolor] = useState("");
  const handleSubmit = (e) => {
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
    if (cartdescription.length < 5) {
      $("#cartdescription").after(
        '<p class="fs-6 error">*minimum 5 characters</p>'
      );
    }
    const fileInput = $("#file")[0];
    if (!fileInput.files || !fileInput.files[0]) {
      $("#image-file").after(
        '<div class="error">*Please upload an image file</div>'
      );
    }

    e.preventDefault();
  };

  return (
    <div className="">
      <header
        class="text-center p-2 fw-bold text-uppercase"
        style={{ backgroundColor: "#fce4de" }}
      >
        100percentpure
      </header>
      <div>
        <div
          class="container-fluid text-center p-h-xlg p-v-xlg bg-white p-5"
          style={{ width: "800px" }}
        >
          <h2 class="fw-bold">Update Products</h2>

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
                    onChange={(e) => setcategory(e.target.value)}
                  >
                    <option value="">Select an option</option>
                    <option value="1">Fruit Pegmented Makeup</option>
                    <option value="2">Skin Care</option>
                    <option value="3">Hair & Body</option>
                  </select>
                </label>
                <label className="d-flex flex-column text-start mt-1 mb-1">
                  Choose Sub-Category
                  <select
                    id="subcategory"
                    style={{ marginTop: "5px", width: "250px", height: "2rem" }}
                    onChange={(e) => setsubcategory(e.target.value)}
                  >
                    <option value="">Select an option</option>
                    <option value="1">Palettes</option>
                    <option value="2">Nail Polish</option>
                    <option value="3">Brushes & Tools</option>
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
                <label className="d-flex flex-column text-start mt-1 mb-1">
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
                </label>
                <label className="d-flex flex-column text-start mt-1 mb-1">
                  Available Product Color
                  <select
                    id="color"
                    style={{ marginTop: "5px", width: "250px", height: "2rem" }}
                    onChange={(e) => setcolor(e.target.value)}
                  >
                    <option value="">Select an option</option>
                    <option value="1">Red</option>
                    <option value="2">Pink</option>
                    <option value="3">Blue</option>
                  </select>
                </label>
                <label
                  className="d-flex flex-column text-start mt-1 mb-1"
                  id="image-file"
                >
                  Upload product Image
                  <input
                    type="file"
                    id="file"
                    accept="image/png, image/jpeg, image/webp"
                    style={{ marginTop: "5px", width: "250px" }}
                  ></input>
                </label>
              </div>
            </div>
            <input
              type="submit"
              value="Update"
              className="butn"
              style={{ width: "100px" }}
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
}

// import "bootstrap/dist/css/bootstrap.min.css";
// import React, { useState } from "react";
// import $ from "jquery";
// import "../style.css";

// export default function AddProduct() {
//   const [name, setName] = useState("");
//   const [price, setPrice] = useState("");
//   const [category, setcategory] = useState("");
//   const [subcategory, setsubcategory] = useState("");
//   const [productid, setProductId] = useState("");
//   const [stock, setStock] = useState("");
//   const [productdescription, setProductDescription] = useState("");
//   const [cartdescription, setcartDescription] = useState("");
//   const [color, setcolor] = useState("");
//   const handleSubmit = (e) => {
//     $(".error").remove();
//     if (name.length < 1) {
//       $("#name").after('<p class="fs-6 error">*This field is required</p>');
//     } else {
//       var regEx = /^[A-Za-z\s]*$/;
//       var validName = regEx.test(name);
//       if (!validName) {
//         $("#name").after('<p class="error">*Invalid</p>');
//       }
//     }
//     var regexnum = /^-?\d+(\.\d+)?$/;
//     var testprice = regexnum.test(price);
//     if (price === "") {
//       $("#price").after('<p class="fs-6 error">*This field is required</p>');
//     } else if (!testprice) {
//       $("#price").after('<p class="fs-6 error">*Invalid</p>');
//     }
//     var testproductid = regexnum.test(productid);
//     if (productid === "") {
//       $("#productid").after(
//         '<p class="fs-6 error">*This field is required</p>'
//       );
//     } else if (!testproductid) {
//       $("#productid").after('<p class="fs-6 error">*Invalid</p>');
//     }

//     var regexstock = /^[1-9]\d*(\.\d+)?$/;
//     var teststock = regexstock.test(stock);
//     if (stock === "") {
//       $("#stock").after('<p class="fs-6 error">*This field is required</p>');
//     } else if (!teststock) {
//       $("#stock").after('<p class="fs-6 error">*Invalid</p>');
//     }

//     if (category === "") {
//       $("#category").after(
//         '<p class="fs-6 error">*please select an option</p>'
//       );
//     }
//     if (subcategory === "") {
//       $("#subcategory").after(
//         '<p class="fs-6 error">*please select an option</p>'
//       );
//     }
//     if (color === "") {
//       $("#color").after('<p class="fs-6 error">*please select an option</p>');
//     }

//     if (productdescription.length < 5) {
//       $("#productdescription").after(
//         '<p class="fs-6 error">*minimum 5 characters</p>'
//       );
//     }
//     if (cartdescription.length < 5) {
//       $("#cartdescription").after(
//         '<p class="fs-6 error">*minimum 5 characters</p>'
//       );
//     }
//     const fileInput = $("#file")[0];
//     if (!fileInput.files || !fileInput.files[0]) {
//       $("#image-file").after(
//         '<div class="error">*Please upload an image file</div>'
//       );
//     }

//     e.preventDefault();
//   };

//   return (
//     <div className="">
//       <header
//         class="text-center p-2 fw-bold text-uppercase"
//         style={{ backgroundColor: "#fce4de" }}
//       >
//         100percentpure
//       </header>
//       <div>
//         <div
//           class="container-fluid text-center p-h-xlg p-v-xlg bg-white p-5"
//           style={{ width: "800px" }}
//         >
//           <h2 class="fw-bold">Update Products</h2>

//           <form action="" onSubmit={handleSubmit}>
//             <div className="row">
//               <div className="col-12 col-lg-6 col-md-6 d-flex flex-column align-items-center">
//                 <label className="d-flex flex-column text-start mt-1 mb-1">
//                   <div>
//                     Enter Product Name
//                     <span style={{ textDecoration: "none" }}>*</span>
//                   </div>

//                   <input
//                     type="text"
//                     id="name"
//                     onChange={(e) => setName(e.target.value)}
//                     style={{ marginTop: "5px", width: "250px" }}
//                   ></input>
//                 </label>
//                 <label className="d-flex flex-column text-start mt-1 mb-1">
//                   <div>
//                     Enter Product Price
//                     <span style={{ textDecoration: "none" }}>*</span>
//                   </div>
//                   <input
//                     type="text"
//                     id="price"
//                     onChange={(e) => setPrice(e.target.value)}
//                     style={{ marginTop: "5px", width: "250px" }}
//                   ></input>
//                 </label>
//                 <label className="d-flex flex-column text-start mt-1 mb-1">
//                   Choose Category
//                   <select
//                     id="category"
//                     style={{ marginTop: "5px", width: "250px", height: "2rem" }}
//                     onChange={(e) => setcategory(e.target.value)}
//                   >
//                     <option value="">Select an option</option>
//                     <option value="1">Fruit Pegmented Makeup</option>
//                     <option value="2">Skin Care</option>
//                     <option value="3">Hair & Body</option>
//                   </select>
//                 </label>
//                 <label className="d-flex flex-column text-start mt-1 mb-1">
//                   Choose Sub-Category
//                   <select
//                     id="subcategory"
//                     style={{ marginTop: "5px", width: "250px", height: "2rem" }}
//                     onChange={(e) => setsubcategory(e.target.value)}
//                   >
//                     <option value="">Select an option</option>
//                     <option value="1">Palettes</option>
//                     <option value="2">Nail Polish</option>
//                     <option value="3">Brushes & Tools</option>
//                   </select>
//                 </label>
//                 <label className="d-flex flex-column text-start mt-1 mb-1">
//                   Enter Product Description
//                   <textarea
//                     style={{
//                       marginTop: "5px",
//                       width: "250px",
//                       height: "4rem",
//                       resize: "none",
//                     }}
//                     rows="4"
//                     cols="10"
//                     name="comment"
//                     form="usrform"
//                     onChange={(e) => setProductDescription(e.target.value)}
//                     id="productdescription"
//                     spellcheck="false"
//                   >
//                     ...
//                   </textarea>
//                 </label>
//               </div>
//               <div className="col-12 col-lg-6 col-md-6 d-flex flex-column align-items-center">
//                 <label className="d-flex flex-column text-start mt-1 mb-1">
//                   <div>
//                     Enter Product Id
//                     <span style={{ textDecoration: "none" }}>*</span>
//                   </div>
//                   <input
//                     type="text"
//                     style={{ marginTop: "5px", width: "250px" }}
//                     id="productid"
//                     onChange={(e) => setProductId(e.target.value)}
//                   ></input>
//                 </label>
//                 <label className="d-flex flex-column text-start mt-1 mb-1">
//                   Available Stock
//                   <input
//                     type="number"
//                     min="1"
//                     id="stock"
//                     style={{ marginTop: "5px", width: "250px" }}
//                     onChange={(e) => setStock(e.target.value)}
//                   ></input>
//                 </label>
//                 <label className="d-flex flex-column text-start mt-1 mb-1">
//                   Enter Cart Description
//                   <textarea
//                     style={{
//                       marginTop: "5px",
//                       width: "250px",
//                       height: "2rem",
//                       resize: "none",
//                     }}
//                     rows="4"
//                     cols="10"
//                     name="comment"
//                     form="usrform"
//                     id="cartdescription"
//                     onChange={(e) => setcartDescription(e.target.value)}
//                   >
//                     ...
//                   </textarea>
//                 </label>
//                 <label className="d-flex flex-column text-start mt-1 mb-1">
//                   Available Product Color
//                   <select
//                     id="color"
//                     style={{ marginTop: "5px", width: "250px", height: "2rem" }}
//                     onChange={(e) => setcolor(e.target.value)}
//                   >
//                     <option value="">Select an option</option>
//                     <option value="1">Red</option>
//                     <option value="2">Pink</option>
//                     <option value="3">Blue</option>
//                   </select>
//                 </label>
//                 <label
//                   className="d-flex flex-column text-start mt-1 mb-1"
//                   id="image-file"
//                 >
//                   Upload product Image
//                   <input
//                     type="file"
//                     id="file"
//                     accept="image/png, image/jpeg, image/webp"
//                     style={{ marginTop: "5px", width: "250px" }}
//                   ></input>
//                 </label>
//               </div>
//             </div>
//             <input
//               type="submit"
//               value="Update"
//               className="butn"
//               style={{ width: "100px" }}
//             ></input>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
