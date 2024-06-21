import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import {
  Instagram,
  Facebook,
  Twitter,
  Google,
  Linkedin,
  Youtube,
} from "react-bootstrap-icons";
import { useState } from "react";
import $ from "jquery";

export default function Footer() {
  const [emailfoot, setEmail] = useState("");
  const handlesubmit = (e) => {
    $(".error").remove();
    if (emailfoot.length < 1) {
      $("#footeremailid").after('<p class="error">*This field is required</p>');
    } else {
      var regExfoot = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
      var validEmailfoot = regExfoot.test(emailfoot);
      if (!validEmailfoot) {
        $("#footeremailid").after('<p class="error">*Enter a valid email</p>');
      }
    }
    e.preventDefault();
  };
  return (
    <div>
      <div id="footersec1">
        <p class="underline hov mb-1">Our 100%PURE™ Promise</p>
        <p>Natural & Organic Beauty Products</p>
      </div>
      <section class="container-md">
        <div class="row gx-0 px-2">
          <div class="col-md-3 col-sm-4 col-6 text-start">
            <div class="fs-6  footer-heading">FEATURED</div>
            <div class="hov">About 100% PURE®</div>
            <div class="hov">Philanthropy</div>
            <div class="hov">Careers</div>
            <div class="hov">Press</div>
            <div class="hov">Store Locations</div>
            <div class="hov">Wholesale US</div>
            <div class="hov">Wholesale CA</div>
            <div class="hov">Student Discount</div>
          </div>

          <div class="col-md-3 col-sm-4 col-6 text-start">
            <div class="fs-6  footer-heading">COMPANY</div>
            <div class="hov">Help & FAQ</div>
            <div class="hov">Returns & Exchanges</div>
            <div class="hov">Promotions T&C</div>
            <div class="hov">Contact Us</div>
            <div class="hov">Accessibility</div>
          </div>

          <div class="col-md-3 col-sm-4 col-6 mt-4 mt-sm-0 text-start">
            <div class="fs-6  footer-heading">INFORMATION</div>
            <div class="hov">Purist Pro</div>
            <div class="hov">Purist Perks</div>
            <div class="hov">Affiliate Program</div>
          </div>

          <div class="col-md-3 col-sm-12 mt-4 mt-sm-0 text-start">
            <div class="fs-6 footer-heading">SUBSCRIBE</div>
            <div class="py-3 d-flex justify-content-center">
              <div class="d-flex flex-column">
                <input
                  type="email"
                  style={{ height: "40px", width: "100%" }}
                  placeholder="Enter your email"
                  class="p-2 border"
                  id="footeremailid"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button
                id="footeremailbtn"
                style={{ height: "40px" }}
                class="bg-black text-white"
                onClick={handlesubmit}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-chevron-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </button>
            </div>
            {/* <div class="message error">This field is required</div>
            <div class="message1 error">Invalid</div> */}
            <div>
              <Instagram className="socialicon" />
              <Facebook className="socialicon" />
              <Twitter className="socialicon" />
              <Google className="socialicon" />
              <Linkedin className="socialicon" />
              <Youtube className="socialicon" />
            </div>
          </div>
        </div>
      </section>
      <div class="d-flex justify-content-center py-4">
        <ul class="d-flex justify-content-center country">
          <li class="border border-danger countryname">
            <a class="p-2" href="USD">
              USD
            </a>
          </li>
          <li class="countryname border">
            <a href="#CAD" class="p-2">
              CAD
            </a>
          </li>
          <li class="countryname border">
            <a href="#GBP" class="p-2">
              GBP
            </a>
          </li>
          <li class="countryname border">
            <a href="#More" class="p-2">
              MORE
            </a>
          </li>
        </ul>
      </div>
      <div class="copyrights">
        <p class="mb-1" style={{ fontfamily: "monospace" }}>
          Australia | Germany
        </p>
        <p>
          Terms & Condition | Privacy Policy | Cookie Policy | Do Not Sell My
          Personal Information | © 2023 100% PURE®
        </p>
        <p style={{ wordspacing: "3px" }}>
          If you are using a screen reader and are having problems using this
          website, please call +1 (844) 787-3100 for assistance.
        </p>
      </div>
    </div>
  );
}
