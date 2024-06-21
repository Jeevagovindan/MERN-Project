import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminProfilePage() {
  const [admin, setAdmin] = useState({});
  const navigate = useNavigate();
  // const { email, password } = props;
  const email = localStorage.getItem("adminemail");

  useEffect(() => {
    fetchAdminData();
  }, []);
  // if (!email) {
  //   navigate("/login");
  // }

  const fetchAdminData = async () => {
    try {
      console.log(email, "admin");
      const response = await axios.post(`http://localhost:5000/adminProfile`, {
        email,
      });
      const adminData = response.data;
      console.log(adminData, "admindata");
      setAdmin(adminData);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="text-center p-h-xlg p-v-xlg bg-white p-5">
      <Table striped className="text-start" style={{ width: "60%" }}>
        <thead>
          <tr>
            <th># profile</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>First Name </td>
            <td>{admin.firstName}</td>
          </tr>
          <tr>
            <td>Last Name</td>
            <td> {admin.lastName}</td>
          </tr>
          <tr>
            <td>Email </td>
            <td>{admin.email}</td>
          </tr>
          <tr>
            <td>Role </td>
            <td>{admin.role}</td>
          </tr>
          <tr>
            <td>Mobile No</td>
            <td>{admin.mobileNo}</td>
          </tr>
          <tr>
            <td>Age </td>
            <td>{admin.age}</td>
          </tr>
          <tr>
            <td>Address</td>
            <td>{admin.address}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default AdminProfilePage;

// import React, { useState, useEffect } from "react";
// import Table from "react-bootstrap/Table";

// function AdminProfilePage() {
//   const [admin, setAdmin] = useState({});

//   useEffect(() => {
//     const adminData = {
//       firstName: "Mukesh",
//       lastName: "Kumar",
//       email: "Mukesh@admin.com",
//       role: "Admin",
//       Phone: "6361819739",
//       age: "30",
//       address: "3rd street,Nanjappa Naga,Coimbatore",
//     };

//     setAdmin(adminData);
//   }, []);

//   return (
//     <div className="text-center p-h-xlg p-v-xlg bg-white p-5">
//       <Table striped className="text-start" style={{ width: "60%" }}>
//         <thead>
//           <tr>
//             <th># profile</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>First Name </td>
//             <td>{admin.firstName}</td>
//           </tr>
//           <tr>
//             <td>Last Name</td>
//             <td> {admin.lastName}</td>
//           </tr>
//           <tr>
//             <td>Email </td>
//             <td>{admin.email}</td>
//           </tr>
//           <tr>
//             <td>Role </td>
//             <td>{admin.role}</td>
//           </tr>
//           <tr>
//             <td>Mobile No</td>
//             <td>{admin.Phone}</td>
//           </tr>
//           <tr>
//             <td>Age </td>
//             <td>{admin.age}</td>
//           </tr>
//           <tr>
//             <td>Address</td>
//             <td>{admin.address}</td>
//           </tr>
//         </tbody>
//       </Table>
//     </div>
//   );
// }

// export default AdminProfilePage;
