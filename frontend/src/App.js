import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./Components/home-page/homepage";
import Login from "./Components/userlogin/login";
import Forgot from "./Components/forgotpassword/forgotpassword";
import Registration from "./Components/userregistration/registration";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLogin from "./Components/admin/adminlogin";
import AdminDashboard from "./Components/admindashboard/admindashboard";
import Adminaddproduct from "./Components/admindashboard/adminaddproduct";
import Updateproduct from "./Components/admindashboard/updateproduct";
import Shipping from "./Components/shipping/shipping";
import Payment from "./Components/payment/payment";
import ProductLandingPage from "./Components/productlandingpage/productlandingpage";
import PdpPage from "./Components/productdescriptionpage/pdppage";
import Header from "./Components/header/header";
import Footer from "./Components/footer/footer";
import Odercontent from "./Components/orderconfirmed/orderconfirmedcontent";
import Passwordset from "./Components/forgotpassword/passwordset";
import Search from "./Components/search/search";

function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <div>
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <Header />
                  <Homepage />
                  <Footer />
                </div>
              }
            />
            <Route
              path="/login"
              element={
                <div>
                  <Header />
                  <Login />
                  <Footer />
                </div>
              }
            />
            <Route
              path="/forgot"
              element={
                <div>
                  <Header />
                  <Forgot />
                  <Footer />
                </div>
              }
            />
            <Route
              path="/passwordset"
              element={
                <div>
                  <Header />
                  <Passwordset />
                  <Footer />
                </div>
              }
            />
            <Route
              path="/registration"
              element={
                <div>
                  <Header />
                  <Registration />
                  <Footer />
                </div>
              }
            />
            <Route
              path="/pdp"
              element={
                <div>
                  <Header />
                  <PdpPage />
                  <Footer />
                </div>
              }
            />
            <Route
              path="/orderconformed"
              element={
                <div>
                  <Header />
                  <Odercontent />
                  <Footer />
                </div>
              }
            />
            <Route
              path="/adminlogin"
              element={
                <div>
                  <AdminLogin />
                </div>
              }
            />
            <Route
              path="/shipping"
              element={
                <div>
                  <Shipping />
                </div>
              }
            />
            <Route
              path="/payment"
              element={
                <div>
                  <Payment />
                </div>
              }
            />
            {/* <Route
              path="/search"
              element={
                <div>
                  <Header />
                  <Search />
                  <Footer />
                </div>
              }
            /> */}
            <Route path="/forgot" element={<Forgot />} />
            <Route path="/addproduct" element={<Adminaddproduct />} />
            <Route path="/updateproduct" element={<Updateproduct />} />
            <Route path="/admindashboard" element={<AdminDashboard />} />

            <Route
              path="/plp"
              element={
                <div>
                  <Header />
                  <ProductLandingPage />
                  <Footer />
                </div>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
