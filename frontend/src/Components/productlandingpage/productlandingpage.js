import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import React from "react";
import PlpProduct from "./plpproduct";
import { useLocation } from "react-router-dom";
import Featured from "./featured";
import Explore from "./explore";

export default function Product() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const categoryName = searchParams.get("param1");
  return (
    <div>
      <p className="text-start ms-4" style={{ color: "#909294" }}>
        <Link
          to="/"
          className="text-decoration-none"
          style={{ color: "#909294" }}
        >
          Home {">"}
        </Link>{" "}
        {categoryName}
      </p>

      {categoryName === "FEATURED" ? (
        <>
          <Featured />
        </>
      ) : categoryName === "Explore" ? (
        <>
          <Explore />
        </>
      ) : (
        <>
          <PlpProduct categoryName={categoryName} />
        </>
      )}

      <div class="text-center ms-3 me-3 mt-4 mb-1">
        <p class="fs-6">
          When you need the best all natural cosmetics jam-packed with vitamins,
          minerals, and ethically sourced ingredients, you need 100% PURE™.
          Rather than robbing your skin of its essential nutrients, our line of
          fruit-dyed natural eye and
          <a
            href="https://www.100percentpure.com/collections/face-makeup"
            class="text-muted hov"
          >
            face makeup
          </a>
          is made with nourishing ingredients to help hydrated-looking skin
          while accentuating your natural features. Complete your clean beauty
          routine and give your all natural makeup a smooth, stunning surface to
          work on with our natural skincare products
        </p>
      </div>
      <div class="text-center">READ MORE</div>
      <div class="text-center mt-2">
        Related blog post: 100% PURE Legacy Story: Fruit Pigmented® Makeup
      </div>
    </div>
  );
}
