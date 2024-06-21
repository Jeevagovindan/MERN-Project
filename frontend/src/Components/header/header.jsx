import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import HeroSection from "./herosection";
import NavBar from "./navbar";
// import React, { useEffect } from "react";

export default function Header() {
  return (
    <div>
      <header class="startheader head text-center p-2 fw-bold text-uppercase text-xxs bg-100-1 l-s">
        Get 2 Free samples with Any $25 purchase
      </header>

      <HeroSection />
      <NavBar />
    </div>
  );
}
