import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div style={{ top: "30px", zIndex: "1000" }} id="header">
      <section className="navsection">
        <nav className="navbar">
          <ul className="nav-link text-center">
            <li className="nav-linkli">
              <Link
                to={{
                  pathname: "/plp",
                  search: `?param1=FEATURED`,
                }}
                style={{ textDecoration: "none", color: "black" }}
              >
                <p id="navitem" className="nav">
                  FEATURED
                </p>
              </Link>
            </li>
          </ul>
          <ul className="nav-link text-center">
            <li className="nav-linkli">
              <Link
                to={{
                  pathname: "/plp",
                  search: `?param1=Fruit Pegmented Makeup`,
                }}
                style={{ textDecoration: "none", color: "black" }}
              >
                <p id="navitem" className="nav">
                  FRIUT PIGMENTED MAKEUP
                </p>
              </Link>
            </li>
          </ul>
          <ul className="nav-link text-center">
            <li className="nav-linkli">
              <Link
                to={{ pathname: "/plp", search: `?param1=Skin Care` }}
                style={{ textDecoration: "none", color: "black" }}
              >
                <p id="navitem" className="nav">
                  SKIN CARE
                </p>
              </Link>
            </li>
          </ul>
          <ul className="nav-link text-center">
            <li className="nav-linkli">
              <Link
                to={{ pathname: "/plp", search: `param1=Hair and Body` }}
                style={{ textDecoration: "none", color: "black" }}
              >
                <p id="navitem" className="nav">
                  HAIR & BODY
                </p>
              </Link>
            </li>
          </ul>
          {/* <ul className="nav-link text-center">
            <li className="nav-linkli">
              <Link
                to="/plp"
                style={{ textDecoration: "none", color: "black" }}
              >
                <p id="navitem" className="nav">
                  GIFTS
                </p>
              </Link>
            </li>
          </ul> */}
          <ul className="nav-link text-center">
            <li className="nav-linkli">
              <Link
                to={{
                  pathname: "/plp",
                  search: `?param1=Explore`,
                }}
                style={{ textDecoration: "none", color: "black" }}
              >
                <p id="navitem" className="nav">
                  EXPLORE
                </p>
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
}
