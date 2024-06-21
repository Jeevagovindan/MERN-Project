import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import React, { useState, useEffect, useRef } from "react";
import * as icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import $ from "jquery";
import { useDownloadExcel } from "react-export-table-to-excel";

export default function ProductList() {
  const [show, setShow] = useState(false);
  const [productslist, setProductlist] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [editId, setEditId] = useState("");
  const [editName, setEditName] = useState("");
  const [editPrice, setEditPrice] = useState("");
  const [editCategory, setEditCategory] = useState("");
  const [editSubCategory, setEditSubCategory1] = useState("");
  const [editColor, setEditColor] = useState("");
  const [editDes, setEditDes] = useState("");
  const [editStock, setEditStock] = useState("");
  const [getcategory, setGetcategory] = useState([]);
  const [getSubcategory, setEditSubCategory] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [getcolor, setGetcolor] = useState([]);
  const tableRef = useRef(null);
  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: "Tasksheet",
    sheet: "Users",
  });
  useEffect(() => {
    axios.get("http://localhost:5000/products").then((res) => {
      setProductlist(res.data);
    });

    axios.get("http://localhost:5000/categoryget").then((res) => {
      setGetcategory(res.data);
    });

    axios.get("http://localhost:5000/subcategoryget").then((res) => {
      setEditSubCategory(res.data);
    });
    axios.get("http://localhost:5000/colorsget").then((res) => {
      setGetcolor(res.data);
    });
  });

  const handleEdit = async (id) => {
    try {
      const response1 = await axios.get(
        `http://localhost:5000/getproductbyid/${id}`
      );

      const data = response1.data;
      setEditId(data.product_id);
      setEditName(data.product_name);
      setEditPrice(data.product_price);
      setEditCategory(data.category);
      setEditSubCategory1(data.subcategory);
      setEditColor(data.color);
      setEditDes(data.product_description);
      setEditStock(data.quantity);
      setShowEditModal(true);
    } catch (err) {
      console.log(err);
    }
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    $(".error").remove();
    let error = true;
    if (editName.length < 1) {
      $("#editName").after('<p class="fs-6 error">*This field is required</p>');
      error = false;
    } else {
      var regEx = /^[A-Za-z\s]*$/;
      var validName = regEx.test(editName);
      if (!validName) {
        $("#editName").after('<p class="error">*Invalid</p>');
        error = false;
      }
    }
    var regexnum = /^-?\d+(\.\d+)?$/;
    var testprice = regexnum.test(editPrice);
    if (editPrice === "") {
      $("#prices").after('<p class="fs-6 error">*This field is required</p>');
      error = false;
    } else if (!testprice) {
      $("#prices").after('<p class="fs-6 error">*Invalid</p>');
      error = false;
    }
    var testproductid = regexnum.test(editId);
    if (editId === "") {
      $("#editIds").after('<p class="fs-6 error">*This field is required</p>');
      error = false;
    } else if (!testproductid) {
      $("#editIds").after('<p class="fs-6 error">*Invalid</p>');
      error = false;
    }

    var regexstock = /^[1-9]\d*(\.\d+)?$/;
    var teststock = regexstock.test(editStock);
    if (editStock === "") {
      $("#stocks").after('<p class="fs-6 error">*This field is required</p>');
      error = false;
    } else if (!teststock) {
      $("#stocks").after('<p class="fs-6 error">*Invalid</p>');
      error = false;
    }

    if (editCategory === "") {
      $("#categorys").after(
        '<p class="fs-6 error">*please select an option</p>'
      );
      error = false;
    }
    if (editSubCategory === "") {
      $("#subcategorys").after(
        '<p class="fs-6 error">*please select an option</p>'
      );
      error = false;
    }

    if (editColor === "") {
      $("#colors").after('<p class="fs-6 error">*please select an option</p>');
      error = false;
    }

    if (editDes.length < 5) {
      $("#des").after('<p class="fs-6 error">*minimum 5 characters</p>');
      error = false;
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
    if (error) {
      try {
        const response = await axios.put(
          `http://localhost:5000/productupdate/${editId}`,
          {
            product_name: editName,
            product_price: editPrice,
            category: editCategory,
            subcategory: editSubCategory,
            color: editColor,
            product_description: editDes,
            quantity: editStock,
          }
        );
        if (response.data === "success") {
          // setCategories((prevCategories) =>
          //   prevCategories.map((category) =>
          //     category.category_id === editId
          //       ? { ...category, category_name: editName }
          //       : category
          //   )
          // );
          setShowEditModal(false);
        }
      } catch (error) {
        console.log(error);
      }
      setShowEditModal(false);
    }
  };
  const handleDelete = async (id) => {
    try {
      const confirmed = window.confirm(
        "Are you sure you want to delete this product?"
      );
      if (confirmed) {
        const response = await axios.delete(
          `http://localhost:5000/productdelete/${id}`
        );
        if (response.data === "success") {
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const defaultOption = { value: "", label: "All" };
  const [selectedOption, setSelectedOption] = useState("");
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const uniqueCategories = [
    ...new Set(productslist.map((task) => task.category)),
  ];
  const filteredTasks = productslist.filter((task) => {
    return selectedOption === "" || task.category === selectedOption;
  });
  return (
    <div>
      <div className="text-center p-h-xlg p-v-xlg bg-white py-2 px-2">
        <div className="d-flex justify-content-between mt-1 mb-1">
          <div className="">
            <select
              className="py-2 p-1 mx-2"
              id="category-selector"
              value={selectedOption}
              onChange={(e) => handleOptionChange(e)}
            >
              <option value={defaultOption.value}>{defaultOption.label}</option>
              {uniqueCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="">
            <button
              onClick={onDownload}
              className="butn"
              style={{ width: "150px" }}
            >
              Download
            </button>
          </div>
        </div>

        <table
          ref={tableRef}
          className="table "
          style={{ overflowX: "auto", width: "" }}
        >
          <thead style={{ backgroundColor: "#fce4de", color: "#333333" }}>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Category</th>
              <th>Color</th>
              <th>Price</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {filteredTasks.map((ele) => {
              return (
                <tr>
                  <td>{ele.product_id}</td>
                  <td className="text-start">{ele.product_name}</td>
                  <td className="text-start">{ele.category}</td>
                  <td className="text-start">{ele.color}</td>
                  <td>{ele.product_price}</td>
                  <td>
                    <icon.PencilSquare
                      width="1.5rem"
                      height="1.5rem"
                      onClick={() => handleEdit(ele.product_id)}
                      style={{
                        backgroundColor: "#fce4de",
                        color: "#333333",
                        border: "10px",
                      }}
                    />
                  </td>
                  {/* <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                  >
                    <Modal.Header closeButton></Modal.Header>
                    <Modal.Body>Are you Sure ?</Modal.Body>
                    <Modal.Footer>
                      <Button variant="Dark" onClick={handleClose}>
                        No
                      </Button>
                      <Button
                        className="butn"
                        style={{ width: "150px" }}
                        onClick={() => {
                          handleDelete(ele.product_id);
                          handleClose();
                        }}
                      >
                        Yes
                      </Button>
                    </Modal.Footer>
                  </Modal> */}
                  <td>
                    <icon.Trash3
                      onClick={() => handleDelete(ele.product_id)}
                      width="1.5rem"
                      height="1.5rem"
                      style={{
                        backgroundColor: "#fce4de",
                        color: "#333333",
                        border: "10px",
                        cursor: "pointer",
                      }}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row text-start align-items-center">
            <div className="col-4">
              <label className="p-2">Product Id{"      "}</label>
            </div>

            <div className="col-8">
              <input
                className=""
                disabled
                id="editIds"
                type="number"
                value={editId}
                style={{ marginTop: "5px", width: "250px", height: "2rem" }}
                onChange={(e) => setEditId(e.target.value)}
              />
            </div>
          </div>
          <div className="row text-start align-items-center">
            <div className="col-4">
              <label className="p-2">Product Name </label>
            </div>
            <div className="col-8">
              <input
                id="editName"
                type="text"
                value={editName}
                style={{ marginTop: "5px", width: "250px", height: "2rem" }}
                onChange={(e) => setEditName(e.target.value)}
              />
            </div>
          </div>
          <div className="row text-start align-items-center">
            <div className="col-4">
              <label className="p-2">Product Prize </label>
            </div>
            <div className="col-8">
              <input
                id="prices"
                type="number"
                value={editPrice}
                style={{ marginTop: "5px", width: "250px", height: "2rem" }}
                onChange={(e) => setEditPrice(e.target.value)}
              />
            </div>
          </div>
          <div className="row text-start align-items-center">
            <div className="col-4">
              <label className="p-2">Category </label>
            </div>
            <div className="col-8">
              <select
                id="categorys"
                style={{ marginTop: "5px", width: "250px", height: "2rem" }}
                onChange={(e) => setEditCategory(e.target.value)}
                value={editCategory}
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
            </div>
          </div>
          <div className="row text-start align-items-center">
            <div className="col-4">
              <label className="p-2">SubCategory </label>
            </div>
            <div className="col-8">
              <select
                id="subcategorys"
                style={{ marginTop: "5px", width: "250px", height: "2rem" }}
                onChange={(e) => setEditSubCategory1(e.target.value)}
                value={editSubCategory}
              >
                <option value="">Select an option</option>
                {Array.isArray(getSubcategory) &&
                  getSubcategory.map((val, e) => {
                    return (
                      <option
                        key={e}
                        value={val.subcategory_name}
                        id={e.subcategory_id}
                      >
                        {val.subcategory_name}
                      </option>
                    );
                  })}
              </select>
            </div>
          </div>
          <div className="row text-start align-items-center">
            <div className="col-4">
              <label className="p-2">Product Color </label>
            </div>
            <div className="col-8">
              <select
                id="colors"
                style={{ marginTop: "5px", width: "250px", height: "2rem" }}
                onChange={(e) => setEditColor(e.target.value)}
                value={editColor}
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
            </div>
          </div>{" "}
          <div className="row text-start align-items-center">
            <div className="col-4">
              <label className="p-2">Product Description{"      "}</label>
            </div>

            <div className="col-8">
              <input
                className=""
                id="des"
                type="text"
                value={editDes}
                style={{ marginTop: "5px", width: "250px", height: "2rem" }}
                onChange={(e) => setEditDes(e.target.value)}
              />
            </div>
          </div>
          <div className="row text-start align-items-center">
            <div className="col-4">
              <label className="p-2">Available Stock{"      "}</label>
            </div>

            <div className="col-8">
              <input
                className=""
                id="stocks"
                type="number"
                value={editStock}
                style={{ marginTop: "5px", width: "250px", height: "2rem" }}
                onChange={(e) => setEditStock(e.target.value)}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="Dark" onClick={() => setShowEditModal(false)}>
            Cancel
          </Button>
          <Button
            className="butn"
            style={{ width: "150px" }}
            onClick={handleUpdate}
          >
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
