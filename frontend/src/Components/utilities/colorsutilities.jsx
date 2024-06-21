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
  const [color_id, setID] = useState("");
  const [color_name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    $(".error").remove();
    let error = true;
    if (color_id === "") {
      $("#id").after('<p class="fs-6 error">*This field is required</p>');
      error = false;
    }
    if (color_name.length < 1) {
      $("#colors").after('<p class="fs-6 error">*This field is required</p>');
      error = false;
    } else {
      var regEx = /^[A-Za-z\s]*$/;
      var validName = regEx.test(color_name);
      if (!validName) {
        $("#colors").after('<p class="error">*Invalid</p>');
        error = false;
      }
    }
    if (error) {
      axios
        .post("http://localhost:5000/colorspost", { color_id, color_name })
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
          Fill the details for Colors
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <label className="p-2">
          Id{" "}
          <input
            type="number"
            id="id"
            style={{ width: "150px" }}
            value={color_id}
            onChange={(e) => setID(e.target.value)}
          ></input>
        </label>
        <label className="p-2">
          Color{" "}
          <input
            type="text"
            id="colors"
            style={{ width: "150px" }}
            value={color_name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </label>
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

export default function ColorsUtilities() {
  const [colors, setcolors] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [editId, setEditId] = useState("");
  const [editName, setEditName] = useState("");
  const [showEditModal, setShowEditModal] = useState(false);
  useEffect(() => {
    axios.get("http://localhost:5000/colorsget").then((res) => {
      setcolors(res.data);
    });
  });
  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:5000/colorsget");
  //     setcolors(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const handleEdit = async (id) => {
    const response1 = await axios.get(
      `http://localhost:5000/colorsgetbyid/${id}`
    );

    const data = response1.data;
    setEditId(data[0].color_id);
    setEditName(data[0].color_name);
    setShowEditModal(true);
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    $(".error").remove();
    let error = true;
    if (editName < 1) {
      $("#colorname").after(
        '<p class="fs-6 error">*This field is required</p>'
      );
      error = false;
    } else {
      var regEx = /^[A-Za-z\s]*$/;
      var validName = regEx.test(editName);
      if (!validName) {
        $("#colorname").after('<p class="error">*Invalid</p>');
        error = false;
      }
    }
    if (error) {
      try {
        const response = await axios.put(
          `http://localhost:5000/colorsupdate/${editId}`,
          { name: editName }
        );
        if (response.data === "success") {
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
          `http://localhost:5000/colorsdelete/${id}`
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
      <div class="text-cen p-h-xlg p-v-xlg bg-white p-5">
        <h2 class="fw-semibold text-start">Colors</h2>
        <Table striped className="text-center" style={{ width: "60%" }}>
          <thead style={{ backgroundColor: "#fce4de", color: "#333333" }}>
            <tr>
              <th>S.NO</th>
              <th>Colors</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {colors.map((colors, index) => {
              return (
                <tr
                  style={{ padding: "2rem" }}
                  id={colors.color_id}
                  key={colors.color_id}
                >
                  <th>{colors.color_id}</th>
                  <th className="text-start">{colors.color_name}</th>
                  <td>
                    <icon.PencilSquare
                      width="1.5rem"
                      height="1.5rem"
                      onClick={() => handleEdit(colors.color_id)}
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
                          handleDelete(colors.color_id);
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
                      onClick={() => handleDelete(colors.color_id)}
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
          <Modal.Title>Edit colors</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label className="p-2">
            Color Name{" "}
            <input
              id="colorname"
              type="text"
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

// export default function ColorsUtilities() {
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
//         <h2 class="fw-semibold text-start">Add Colors</h2>
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
//               <th>Colors</th>
//               <th>Delete</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr style={{ padding: "2rem" }} id="color1">
//               <th>Black</th>

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
//                     $("#color1").toggle();
//                   }}
//                 />
//               </td>
//             </tr>
//             <tr style={{ padding: "2rem" }} id="color2">
//               <th>Red</th>
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
//                     $("#color2").toggle();
//                   }}
//                 />
//               </td>
//             </tr>
//             <tr style={{ padding: "2rem" }} id="color3">
//               <th>Pink</th>
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
//                     $("#color3").toggle();
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
