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
  const [id, setId] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [category, setCategory] = useState("");
  const [getcategory, setGetcategory] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/categoryget").then((res) => {
      setGetcategory(res.data);
    });
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    $(".error").remove();
    let error = true;
    if (id === "") {
      $("#id").after('<p class="fs-6 error">*This field is required</p>');
      error = false;
    }
    if (subcategory.length < 1) {
      $("#subcategorys").after(
        '<p class="fs-6 error">*This field is required</p>'
      );
      error = false;
    } else {
      var regEx = /^[A-Za-z\s]*$/;
      var validName = regEx.test(subcategory);
      if (!validName) {
        $("#subcategorys").after('<p class="error">*Invalid</p>');
        error = false;
      }
    }
    if (category === "") {
      $("#categorys").after('<p class="error">*Please Select One</p>');
    }
    if (error) {
      axios
        .post("http://localhost:5000/subcategorypost", {
          id,
          subcategory,
          category,
        })
        .then((res) => {
          if (res.data === "success") {
            console.log("Happy");
            props.onHide();
          } else {
            console.log("added");
            props.onHide();
            // alert("Data addedd Successfully");
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
          Fill the details for Sub-Category
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <label className="p-2">
          Id{" "}
          <input
            id="id"
            type="number"
            min="1"
            style={{ width: "150px" }}
            value={id}
            onChange={(e) => setId(e.target.value)}
          ></input>
        </label>
        <label className="p-2">
          SubCategory{" "}
          <input
            id="subcategorys"
            type="text"
            style={{ width: "150px" }}
            value={subcategory}
            onChange={(e) => setSubcategory(e.target.value)}
          ></input>
        </label>
        <label className="p-2">
          Category{" "}
          <select
            id="categorys"
            style={{ width: "150px", height: "2rem" }}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select an option</option>
            {getcategory.map((val, e) => {
              return (
                <option key={e} value={val.category_name} id={e.category_id}>
                  {val.category_name}
                </option>
              );
            })}
          </select>
        </label>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={handleSubmit}
          className="butn"
          style={{ width: "150px" }}
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

export default function SubCategoriesUtilities() {
  const [subcategories, setSubcategories] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [editId, setEditId] = useState("");
  const [editName, setEditName] = useState("");
  const [showEditModal, setShowEditModal] = useState(false);
  useEffect(() => {
    // fetchData();
    axios.get("http://localhost:5000/subcategoryget").then((res) => {
      setSubcategories(res.data);
    });
  });
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/subcategoryget");
      setSubcategories(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleEdit = async (id) => {
    const response1 = await axios.get(
      `http://localhost:5000/subcategorygetbyid/${id}`
    );

    const data = response1.data;
    // console.log("subcategoru_id", data[0].subcategory_id);
    // console.log(data);
    setEditId(data[0].subcategory_id);
    setEditName(data[0].subcategory_name);
    setShowEditModal(true);
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    $(".error").remove();
    let error = true;
    if (editName < 1) {
      $("#subcategory1").after(
        '<p class="fs-6 error">*This field is required</p>'
      );
      error = false;
    } else {
      var regEx = /^[A-Za-z\s]*$/;
      var validName = regEx.test(editName);
      if (!validName) {
        $("#subcategory1").after('<p class="error">*Invalid</p>');
        error = false;
      }
    }
    if (error) {
      try {
        const response = await axios.put(
          `http://localhost:5000/subcategoryupdate/${editId}`,
          { name: editName }
        );
        if (response.data === "success") {
          // setSubcategories((prevCategories) =>
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
          `http://localhost:5000/subcategorydelete/${id}`
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
        <h2 class="fw-semibold text-start">sub-Categories</h2>

        <Table striped className="text-center" style={{ width: "60%" }}>
          <thead style={{ backgroundColor: "#fce4de", color: "#333333" }}>
            <tr>
              <th>S.NO</th>
              <th className="text-center">Sub-Categories</th>
              <th>Categories</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {subcategories.map((subcategory, index) => {
              return (
                <tr style={{ padding: "2rem" }} id="subcategories1">
                  <th>{subcategory.subcategory_id}</th>
                  <th className="text-start">{subcategory.subcategory_name}</th>
                  <th className="text-start">{subcategory.category_name}</th>
                  <td>
                    <icon.PencilSquare
                      width="1.5rem"
                      height="1.5rem"
                      onClick={() => handleEdit(subcategory.subcategory_id)}
                      style={{
                        backgroundColor: "#fce4de",
                        color: "#333333",
                        border: "10px",
                        cursor: "pointer",
                      }}
                    />
                  </td>
                  <td>
                    <icon.Trash3
                      width="1.5rem"
                      height="1.5rem"
                      onClick={() => handleDelete(subcategory.subcategory_id)}
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
                          handleDelete(subcategory.subcategory_id);
                          handleClose();
                        }}
                      >
                        Yes
                      </Button>
                    </Modal.Footer>
                  </Modal> */}
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
            Subcategory Name{" "}
            <input
              type="text"
              id="subcategory1"
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

// import "bootstrap/dist/css/bootstrap.min.css";
// import "./style.css";
// import React from "react";
// import { useState } from "react";
// import $ from "jquery";
// import Table from "react-bootstrap/esm/Table";
// import * as icon from "react-bootstrap-icons";

// export default function SubCategoriesUtilities() {
//   const [inputValue, setInputValue] = useState("");
//   const [tableData, setTableData] = useState([]);
//   function handleInputChange(event) {
//     setInputValue(event.target.value);
//   }
//   function handleSubmit(event) {
//     event.preventDefault();
//     setTableData([...tableData, inputValue]);
//     setInputValue("");
//   }
//   const handleDeleteButtonClick = (index) => {
//     const newData = [...tableData];
//     newData.splice(index, 1);
//     setTableData(newData);
//   };
//   return (
//     <div>
//       <div class="text-cen p-h-xlg p-v-xlg bg-white p-5">
//         <h2 class="fw-semibold text-start">Add sub Categories</h2>
//         <form
//           onSubmit={handleSubmit}
//           className="text-start mb-2"
//           style={{ width: "80%" }}
//         >
//           <input type="text" value={inputValue} onChange={handleInputChange} />
//           <input type="submit" value="Add"></input>
//         </form>
//         <Table striped className="text-center" style={{ width: "60%" }}>
//           <thead style={{ backgroundColor: "#fce4de", color: "#333333" }}>
//             <tr>
//               <th className="text-center">Sub-Categories</th>
//               <th>Delete</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr style={{ padding: "2rem" }} id="subcategories1">
//               <th>Palettes</th>
//               <td>
//                 <icon.Trash3
//                   width="1.5rem"
//                   height="1.5rem"
//                   style={{
//                     backgroundColor: "#fce4de",
//                     color: "#333333",
//                     border: "10px",
//                     cursor: "pointer",
//                   }}
//                   onClick={(e) => {
//                     $("#subcategories1").toggle();
//                   }}
//                 />
//               </td>
//             </tr>
//             <tr style={{ padding: "2rem" }} id="subcategories2">
//               <th>Nail Polish</th>
//               <td>
//                 <icon.Trash3
//                   width="1.5rem"
//                   height="1.5rem"
//                   style={{
//                     backgroundColor: "#fce4de",
//                     color: "#333333",
//                     border: "10px",
//                     cursor: "pointer",
//                   }}
//                   onClick={(e) => {
//                     $("#subcategories2").toggle();
//                   }}
//                 />
//               </td>
//             </tr>
//             <tr style={{ padding: "2rem" }} id="subcategories3">
//               <th>Brushes & Tools</th>
//               <td>
//                 <icon.Trash3
//                   width="1.5rem"
//                   height="1.5rem"
//                   style={{
//                     backgroundColor: "#fce4de",
//                     color: "#333333",
//                     border: "10px",
//                     cursor: "pointer",
//                   }}
//                   onClick={(e) => {
//                     $("#subcategories3").toggle();
//                   }}
//                 />
//               </td>
//             </tr>
//             <tr style={{ padding: "2rem" }} id="subcategories4">
//               <th>Cleanser</th>
//               <td>
//                 <icon.Trash3
//                   width="1.5rem"
//                   height="1.5rem"
//                   style={{
//                     backgroundColor: "#fce4de",
//                     color: "#333333",
//                     border: "10px",
//                     cursor: "pointer",
//                   }}
//                   onClick={(e) => {
//                     $("#subcategories4").toggle();
//                   }}
//                 />
//               </td>
//             </tr>
//             <tr style={{ padding: "2rem" }} id="subcategories5">
//               <th>Toner</th>
//               <td>
//                 <icon.Trash3
//                   width="1.5rem"
//                   height="1.5rem"
//                   style={{
//                     backgroundColor: "#fce4de",
//                     color: "#333333",
//                     border: "10px",
//                     cursor: "pointer",
//                   }}
//                   onClick={(e) => {
//                     $("#subcategories5").toggle();
//                   }}
//                 />
//               </td>
//             </tr>
//             {tableData.map((value, index) => (
//               <tr style={{ padding: "2rem" }} key={index}>
//                 <th>{value}</th>
//                 <td>
//                   <icon.Trash3
//                     width="1.5rem"
//                     height="1.5rem"
//                     style={{
//                       backgroundColor: "#fce4de",
//                       color: "#333333",
//                       border: "10px",
//                       cursor: "pointer",
//                     }}
//                     onClick={() => handleDeleteButtonClick(index)}
//                   />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </div>
//     </div>
//   );
// }
