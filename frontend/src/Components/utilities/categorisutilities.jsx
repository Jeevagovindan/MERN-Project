import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import React from "react";
import { useState } from "react";
import Table from "react-bootstrap/esm/Table";
import * as icon from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { useEffect } from "react";
import $ from "jquery";

function MyVerticallyCenteredModal(props) {
  const [id, setID] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    $(".error").remove();
    let error = true;
    if (id === "") {
      $("#id").after('<p class="fs-6 error">*This field is required</p>');
      error = false;
    }
    if (name.length < 1) {
      $("#id2").after('<p class="fs-6 error">*This field is required</p>');
      error = false;
    } else {
      var regEx = /^[A-Za-z\s]*$/;
      var validName = regEx.test(name);
      if (!validName) {
        $("#id2").after('<p class="error">*Invalid</p>');
        error = false;
      }
    }
    if (error) {
      axios
        .post("http://localhost:5000/categorypost", { id, name })
        .then((res) => {
          if (res.data === "success") {
            console.log("Happy");
            props.onHide();
          } else {
            console.log("added");
            props.onHide();
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Fill the details for Category
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex mb-2">
          <label className="p-2 text-start" style={{ marginLeft: "6rem" }}>
            Id{" "}
          </label>
          <input
            id="id"
            type="number"
            min="1"
            value={id}
            onChange={(e) => setID(e.target.value)}
          />
        </div>
        <div className="d-flex">
          <label className="p-2">Category Name </label>
          <input
            id="id2"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="butn"
          style={{ width: "150px" }}
          onClick={handleSubmit}
        >
          Add
        </Button>
        <Button onClick={props.onHide} variant="Dark">
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function CategoriesUtilities() {
  const [categories, setCategories] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [editId, setEditId] = useState("");
  const [editName, setEditName] = useState("");
  const [showEditModal, setShowEditModal] = useState(false);
  useEffect(() => {
    axios.get("http://localhost:5000/categoryget").then((res) => {
      setCategories(res.data);
    });
  });
  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:5000/categoryget");
  //     setCategories(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const handleEdit = async (id) => {
    const response1 = await axios.get(
      `http://localhost:5000/categorygetbyid/${id}`
    );

    const data = response1.data;
    console.log(data);
    setEditId(data[0].category_id);
    setEditName(data[0].category_name);
    setShowEditModal(true);
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    $(".error").remove();
    let error = true;
    if (editName < 1) {
      $("#categories").after(
        '<p class="fs-6 error">*This field is required</p>'
      );
      error = false;
    } else {
      var regEx = /^[A-Za-z\s]*$/;
      var validName = regEx.test(editName);
      if (!validName) {
        $("#categories").after('<p class="error">*Invalid</p>');
        error = false;
      }
    }
    if (error) {
      try {
        const response = await axios.put(
          `http://localhost:5000/categoryupdate/${editId}`,
          { name: editName }
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
          // fetchData();
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
          `http://localhost:5000/categorydelete/${id}`
        );
        if (response.data === "success") {
          // fetchData();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div class="text-center p-h-xlg p-v-xlg bg-white p-5">
        <h2 class="fw-semibold text-start">Categories</h2>
        <Table striped className="text-center" style={{ width: "60%" }}>
          <thead style={{ backgroundColor: "#fce4de", color: "#333333" }}>
            <tr>
              <th>S.NO</th>
              <th>Categories</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => {
              return (
                <tr style={{ padding: "2rem" }} id="subcategories1">
                  <th>{category.category_id}</th>

                  <th className="text-start">{category.category_name}</th>
                  <td>
                    <icon.PencilSquare
                      width="1.5rem"
                      height="1.5rem"
                      onClick={() => handleEdit(category.category_id)}
                      style={{
                        backgroundColor: "#fce4de",
                        color: "#333333",
                        border: "10px",
                        cursor: "pointer",
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
                          handleDelete(category.category_id);
                          handleClose();
                        }}
                      >
                        Yes
                      </Button>
                    </Modal.Footer>
                  </Modal> */}
                  <td>
                    <icon.Trash3
                      width="1.5rem"
                      height="1.5rem"
                      onClick={() => handleDelete(category.category_id)}
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
        </Table>
        <div className="d-flex justify-content-center">
          <button
            className="butn"
            onClick={() => setModalShow(true)}
            style={{ width: "100px" }}
          >
            Add
          </button>
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div>
      </div>
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label className="p-2">
            Category Name{" "}
            <input
              type="text"
              id="categories"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
            />
          </label>
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
