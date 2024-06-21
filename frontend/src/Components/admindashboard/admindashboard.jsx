import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import ProductList from "./productlist";
import { useLocation } from "react-router-dom";
import AdminProfilePage from "./adminprofile";
import Adminaddproduct from "./adminaddproduct";
import CategoriesUtilities from "../utilities/categorisutilities";
import SubCategoriesUtilities from "../utilities/subcategories";
import ColorsUtilities from "../utilities/colorsutilities";
import ConcernUtilities from "../utilities/concernutilities";
import $ from "jquery";
import * as icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

export default function AdminDashboard() {
  // const location = useLocation();
  // const { email, password } = location.state;
  const divRef = useRef(null);
  const divRef1 = useRef(null);
  const divprofile = useRef(null);
  const divadd = useRef(null);
  const divview = useRef(null);
  const divcategories = useRef(null);
  const divsubcategories = useRef(null);
  const divcolors = useRef(null);
  const divconcern = useRef(null);
  const adminemail = localStorage.getItem("adminemail");
  const word = localStorage.getItem("adminname");
  const cleanedWord = word ? word.replace(/[.,!]/g, "") : "";
  const name = cleanedWord.charAt(0).toUpperCase() + cleanedWord.slice(1);
  // const name = word.charAt(0).toUpperCase() + word.slice(1);
  const navigate = useNavigate();
  React.useEffect(() => {
    if (adminemail === null) {
      navigate("/login");
    }
  }, [adminemail, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isLog");
    localStorage.removeItem("adminname");
    localStorage.removeItem("adminemail");
    navigate("/adminlogin");
  };

  function handleClick() {
    $(divRef.current).toggle();
  }
  function utilitieshandleclick() {
    $(divRef1.current).toggle();
  }

  function profilehandleclick() {
    $(divadd.current).hide();
    $(divcategories.current).hide();
    $(divsubcategories.current).hide();
    $(divview.current).hide();
    $(divcolors.current).hide();
    $(divconcern.current).hide();
    $(divprofile.current).toggle();
  }
  function addhandleclick() {
    $(divprofile.current).hide();
    $(divview.current).hide();
    $(divcategories.current).hide();
    $(divsubcategories.current).hide();
    $(divcolors.current).hide();
    $(divconcern.current).hide();
    $(divadd.current).toggle();
  }
  function viewhandleclick() {
    $(divprofile.current).hide();
    $(divadd.current).hide();
    $(divcategories.current).hide();
    $(divsubcategories.current).hide();
    $(divcolors.current).hide();
    $(divconcern.current).hide();
    $(divview.current).toggle();
  }
  function categorieshandleclick() {
    $(divprofile.current).hide();
    $(divadd.current).hide();
    $(divview.current).hide();
    $(divsubcategories.current).hide();
    $(divcolors.current).hide();
    $(divconcern.current).hide();
    $(divcategories.current).toggle();
  }
  function subcategorieshandleclick() {
    $(divprofile.current).hide();
    $(divadd.current).hide();
    $(divview.current).hide();
    $(divcategories.current).hide();
    $(divcolors.current).hide();
    $(divconcern.current).hide();
    $(divsubcategories.current).toggle();
  }
  function colorshandleclick() {
    $(divprofile.current).hide();
    $(divadd.current).hide();
    $(divview.current).hide();
    $(divcategories.current).hide();
    $(divsubcategories.current).hide();
    $(divconcern.current).hide();
    $(divcolors.current).toggle();
  }
  // function concernhandleclick() {
  //   $(divprofile.current).hide();
  //   $(divadd.current).hide();
  //   $(divview.current).hide();
  //   $(divcategories.current).hide();
  //   $(divsubcategories.current).hide();
  //   $(divcolors.current).hide();
  //   $(divconcern.current).toggle();
  // }

  return (
    <div>
      <div className="container-fluid">
        <div className="">
          <div class="text-center">
            <div className="row">
              <div
                className="col-12 col-sm-3 overflow-scroll p-4"
                style={{ backgroundColor: "#fce4de", height: "100vh" }}
              >
                <div className="d-flex flex-column">
                  {/* <div>
                      <Container className="position-relative min-vh-100">
                        <button
                          className="position-fixed bottom-0 start-0 mb-3 ms-3 btn btn-outline-light border border-danger border-1 fw-semibold space"
                          onClick={handleLogout}
                          style={{
                            textDecoration: "none",
                            color: "black",
                            cursor: "pointer",
                          }}
                        >
                          <icon.ArrowLeftCircle
                            className="align-self-baseline"
                            width={"1.4rem"}
                            height={"1.4rem"}
                          />
                          Logout
                        </button>
                      </Container>
                    </div> */}
                  <div className="d-flex align-items-center text-start mt-3">
                    <Link
                      to="/ "
                      className="d-flex align-items-center"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <button
                        className="start-0 mb-3 btn btn-outline-light border border-danger border-1 fw-semibold space"
                        style={{
                          textDecoration: "none",
                          color: "black",
                          cursor: "pointer",
                        }}
                      >
                        <icon.ArrowLeftCircle
                          className="align-self-baseline"
                          width={"1.4rem"}
                          height={"1.4rem"}
                        />
                        Home
                      </button>
                    </Link>
                  </div>
                  <div className="align-middle">
                    <img
                      className="fs-3"
                      src="./Images/100percentpure/profile.png"
                      alt="100percentpure"
                      style={{ width: "30px", height: "30px" }}
                    />
                    <h2 className="fw-semibold space mt-2">Welcome {name}!</h2>
                    <hr className="" style={{ width: "100%" }} />

                    <button
                      className="fw-semibold space mt-2"
                      id="buttn"
                      style={{
                        textDecoration: "none",
                        color: "black",
                        cursor: "pointer",
                      }}
                      onClick={profilehandleclick}
                    >
                      profile
                    </button>

                    <hr className="" style={{ width: "100%" }} />

                    <button
                      id="buttn"
                      className="fw-semibold space mt-2 "
                      style={{
                        textDecoration: "none",
                        color: "black",
                        cursor: "pointer",
                      }}
                      onClick={handleClick}
                    >
                      products
                    </button>

                    <div ref={divRef} style={{ display: "none" }}>
                      <div className="d-flex flex-column align-items-center">
                        <hr className="" style={{ width: "100%" }} />

                        <button
                          type="button"
                          className="btn btn-outline-light border border-danger border-1 fw-semibold space mt-2"
                          style={{
                            textDecoration: "none",
                            width: "40%",
                            color: "black",
                            cursor: "pointer",
                          }}
                          onClick={addhandleclick}
                        >
                          Add
                        </button>

                        <button
                          className="btn btn-outline-light border border-danger border-1 fw-semibold space mt-2"
                          style={{
                            textDecoration: "none",
                            width: "40%",
                            color: "black",
                            cursor: "pointer",
                          }}
                          onClick={viewhandleclick}
                        >
                          View
                        </button>
                      </div>
                    </div>

                    <hr className="" style={{ width: "100%" }} />

                    <button
                      id="buttn"
                      className="fw-semibold space mt-2"
                      style={{
                        textDecoration: "none",
                        color: "black",
                        cursor: "pointer",
                      }}
                      onClick={utilitieshandleclick}
                    >
                      Utilities
                    </button>
                    <div ref={divRef1} className="" style={{ display: "none" }}>
                      <div className="d-flex flex-column align-items-center">
                        <hr class="" style={{ width: "100%" }} />

                        <button
                          className="btn btn-outline-light border border-danger border-1 fw-semibold space mt-2"
                          style={{
                            textDecoration: "none",
                            color: "black",
                            cursor: "pointer",
                          }}
                          onClick={categorieshandleclick}
                        >
                          Categories
                        </button>

                        <button
                          className="btn btn-outline-light border border-danger border-1 fw-semibold space mt-2"
                          style={{
                            textDecoration: "none",
                            color: "black",
                            cursor: "pointer",
                          }}
                          onClick={subcategorieshandleclick}
                        >
                          SubCategories
                        </button>
                        <button
                          className="btn btn-outline-light border border-danger border-1 fw-semibold space mt-2"
                          style={{
                            textDecoration: "none",
                            color: "black",
                            cursor: "pointer",
                          }}
                          onClick={colorshandleclick}
                        >
                          Colors
                        </button>
                        {/* <button
                          class="btn btn-outline-light border border-danger border-1 fw-semibold space mt-2"
                          style={{
                            textDecoration: "none",
                            color: "black",
                            cursor: "pointer",
                          }}
                          onClick={concernhandleclick}
                        >
                          Concern
                        </button> */}
                      </div>
                    </div>
                    <div>
                      <Container className="position-relative min-vh-100">
                        <button
                          className="position-fixed bottom-0 start-0 mb-3 ms-3 btn btn-outline-light border border-danger border-1 fw-semibold space"
                          onClick={handleLogout}
                          style={{
                            textDecoration: "none",
                            color: "black",
                            cursor: "pointer",
                          }}
                        >
                          <icon.ArrowLeftCircle
                            className="align-self-baseline"
                            width={"1.4rem"}
                            height={"1.4rem"}
                          />
                          Logout
                        </button>
                      </Container>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-9 overflow-scroll flex-nowrap  row-margin scroll position-relative p-0">
                <header
                  className="text-center p-2 fw-bold text-uppercase"
                  style={{ backgroundColor: "#fce4de" }}
                >
                  100percentpure
                </header>
                <div className="container-fluid position-absolute p-0">
                  <div ref={divprofile} style={{ display: "none" }}>
                    <AdminProfilePage />
                  </div>

                  <div ref={divadd} style={{ display: "none" }}>
                    <Adminaddproduct />
                  </div>

                  <div ref={divview} style={{ display: "none" }}>
                    <ProductList />
                  </div>
                  <div ref={divcategories} style={{ display: "none" }}>
                    <CategoriesUtilities />
                  </div>
                  <div ref={divsubcategories} style={{ display: "none" }}>
                    <SubCategoriesUtilities />
                  </div>
                  <div ref={divcolors} style={{ display: "none" }}>
                    <ColorsUtilities />
                  </div>
                  <div ref={divconcern} style={{ display: "none" }}>
                    <ConcernUtilities />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
