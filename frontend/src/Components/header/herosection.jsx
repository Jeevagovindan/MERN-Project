import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import { Link } from "react-router-dom";
import { List, PersonFillLock } from "react-bootstrap-icons";
import Cart from "../cart/cart";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const value = localStorage.getItem("username");

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    navigate("/login");
  };

  return (
    <div
      style={{ top: "30px", zindex: "1000" }}
      className="header"
      id="mb-header"
    >
      <section name="mobile-header">
        <div
          style={{ height: "60px" }}
          className="bg-white row align-items-center justify-content-center w-100 p-2 px-4 g-0"
        >
          <div className="col-2 col-sm-1 d-md-none">
            <List className="fs-2" />
          </div>
          <div className="col-1 col-sm-1 text-md-center">
            <svg
              style={{ cursor: "pointer" }}
              className="fs-5"
              id="search-button"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </div>
          <div id="search-form" className="container position-absolute ps-4">
            <div className="input-group">
              <i className="fs-5 bi bi-search" id="search-icon"></i>
              <input
                type="text"
                placeholder="Search"
                className="ms-2 border-0"
              ></input>
            </div>
          </div>
          <div className="col-7 col-sm-9 col-md-10 h-100 text-center">
            <Link to="/">
              <img
                className="h-100"
                src="./Images/100percentpure/100percentpure.webp"
                alt="100percentpure"
              />
            </Link>
            <percentimage />
          </div>
          <div className="col-2 col-sm-1 text-end">
            <div className="d-flex align-items-center justify-content-between flex-row-reverse">
              <div className="position-relative ms-3">
                <Link
                  to="/adminlogin"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <PersonFillLock className="fs-4" />
                </Link>
              </div>
              <Cart />

              <div className="position-relative">
                <img
                  className="d-none d-md-block fs-3 bi bi-person"
                  onClick={toggleDropdown}
                  src="./Images/100percentpure/profile.png"
                  alt="100percentpure"
                  style={{ width: "20px", height: "20px", cursor: "pointer" }}
                />
                <div
                  className="text-start bg-white p-2"
                  id="profile"
                  style={{
                    position: "absolute",
                    zIndex: "12",
                    cursor: "pointer",
                    display: isDropdownOpen ? "block" : "none",
                  }}
                  onMouseLeave={() => {
                    setIsDropdownOpen(false);
                  }}
                >
                  {value ? (
                    <>
                      <p className="profilehovcontent">Welcome,{value}!</p>
                      <p className="profilehovcontent" onClick={handleLogout}>
                        Logout
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="profilehovcontent">
                        <Link
                          to="/login"
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          Login
                        </Link>
                      </p>
                      <p className="profilehovcontent">
                        <Link
                          to="/registration"
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          Registration
                        </Link>
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
