import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import React from "react";
import { useState } from "react";
import Table from "react-bootstrap/esm/Table";
import * as icon from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Concerns = [
  { id: "01", concern: "Acne" },
  { id: "02", concern: "Anti-Aging" },
  { id: "03", concern: "Brightening" },
  { id: "04", concern: "Sensitive Skin" },
  { id: "05", concern: "Dry Skin" },
  { id: "06", concern: "Oily Skin" },
  { id: "07", concern: "Combination skin" },
];
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Fill the details for Concern
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <label className="p-2">
          Id <input type="number" style={{ width: "150px" }}></input>
        </label>
        <label className="p-2">
          Concern <input type="text" style={{ width: "150px" }}></input>
        </label>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={props.onHide}
          className="butn"
          style={{ width: "150px" }}
        >
          Update
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function ConcernUtilities() {
  const [modalShow, setModalShow] = React.useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div class="text-cen p-h-xlg p-v-xlg bg-white p-5">
        <h2 class="fw-semibold text-start">Concern</h2>
        <Table striped className="text-center" style={{ width: "60%" }}>
          <thead style={{ backgroundColor: "#fce4de", color: "#333333" }}>
            <tr>
              <th>S.NO</th>
              <th>Concern</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {Concerns.map((ele) => {
              return (
                <tr style={{ padding: "2rem" }} id="color1">
                  <th>{ele.id}</th>
                  <th>{ele.concern}</th>
                  <td>
                    <icon.PencilSquare
                      width="1.5rem"
                      height="1.5rem"
                      onClick={() => setModalShow(true)}
                      style={{
                        backgroundColor: "#fce4de",
                        color: "#333333",
                        border: "10px",
                        cursor: "pointer",
                      }}
                    />
                  </td>
                  <Modal
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
                        onClick={handleClose}
                      >
                        yes
                      </Button>
                    </Modal.Footer>
                  </Modal>
                  <td>
                    <icon.Trash3
                      width="1.5rem"
                      height="1.5rem"
                      onClick={handleShow}
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
    </div>
  );
}
// export default function ConcernUtilities() {
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
//         <h2 class="fw-semibold text-start">Add Concern</h2>
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
//               <th>Concern</th>
//               <th>Delete</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr style={{ padding: "2rem" }} id="concern1">
//               <th>Acne</th>
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
//                     $("#concern1").toggle();
//                   }}
//                 />
//               </td>
//             </tr>
//             <tr style={{ padding: "2rem" }} id="concern2">
//               <th>Anti-Aging</th>
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
//                     $("#concern2").toggle();
//                   }}
//                 />
//               </td>
//             </tr>
//             <tr style={{ padding: "2rem" }} id="concern3">
//               <th>Brightening</th>
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
//                     $("#concern3").toggle();
//                   }}
//                 />
//               </td>
//             </tr>
//             <tr style={{ padding: "2rem" }} id="concern4">
//               <th>Sensitive Skin</th>
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
//                     $("#concern4").toggle();
//                   }}
//                 />
//               </td>
//             </tr>
//             <tr style={{ padding: "2rem" }} id="concern5">
//               <th>Dry Skin</th>
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
//                     $("#concern5").toggle();
//                   }}
//                 />
//               </td>
//             </tr>
//             <tr style={{ padding: "2rem" }} id="concern6">
//               <th>Oily Skin</th>
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
//                     $("#concern6").toggle();
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
