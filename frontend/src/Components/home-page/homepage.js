import "bootstrap/dist/css/bootstrap.min.css";
import HeroCarousel from "./herocarousel";
import ProductSection from "./productsection";
import HeroImages from "./heroimages";
// import MonthlyBox from "./monthlybox";
import MonthlyBox from "./monthlybox";
// import Blog from "./blog";
import Blog from "./blog";
import ProductSection1 from "./productsection1";
// import { useLocation } from "react-router-dom";
// import Dummydata from "../dummydata/dummydata";
import * as icon from "react-bootstrap-icons";
import ProductSection2 from "./productsection2";
// import HeroSection from "../header/herosection";
// import Header from "../header/header";
// import Footer from "../footer/footer";

const products = [
  {
    image:
      "https://cdn.no-toxic.com/q_auto:good,c_limit,w_300,f_auto,fl_lossy/l_Badges:badges,w_0.3,y_-0.3,x_0.34,fl_relative,pg_name:2019-think-dirty/v1574895176/products/1CCBMLPC/1CCBMLPC_Matte_Lipstick_Pink_Canyon_Primary",
    rating: "(1350)",
    p: "Fruit Pigmented® Cocoa Butter Matte Lipstick",
    newprice: "$28",
    oldprice: "",
    button: "CHOOSE COLOR",
    star: <icon.StarFill className="icon"></icon.StarFill>,
  },
  {
    image:
      "https://cdn.no-toxic.com/q_auto:good,c_limit,w_300,f_auto,fl_lossy/v1665003229/products/FG1FLNPMT/FG1FLNPMT_PRIMARY",
    rating: "(35)",
    p: "Lavender Niacinamide  Pore Minimizer Tonique",
    newprice: "$19",
    oldprice: "$35",
    button: "NOTIFY ME",
    star: <icon.StarHalf className="icon" />,
  },
  {
    image:
      "https://cdn.no-toxic.com/q_auto:good,c_limit,w_300,f_auto,fl_lossy/v1675441400/products/1CMBL7G/1CMBL7G_FP_Ultra_Lengthing_Mascara_Blueberry_Primary2",
    rating: "(4857)",
    p: "Fruit Pigmented® Ultra lenghting Mascara",
    newprice: "$28",
    oldprice: "",
    button: "CHOOSE COLOR",
    star: <icon.StarFill className="icon"></icon.StarFill>,
  },
  {
    image:
      "https://cdn.no-toxic.com/q_auto:good,c_limit,w_300,f_auto,fl_lossy/v1664997202/products/FGFCBFC/FGFCBFC_Primary",
    rating: "(50)",
    p: "Coffee Bean Face Cream",
    newprice: "$25",
    oldprice: "$45",
    button: "NOTIFY ME",
    star: <icon.StarHalf className="icon" />,
  },
  {
    image:
      "https://cdn.no-toxic.com/q_auto:good,c_limit,w_300,f_auto,fl_lossy/l_Badges:badges,w_0.3,y_-0.3,x_0.34,fl_relative,pg_name:2019-elite-beauty/v1582045931/products/1CFPWFN1.0/1CFPWFN1.0_Full_Coverage_Water_Foundation_Neutral_1.0_Primary",
    rating: "(1350)",
    p: "Fruit Pigmented® Full Coverage Water",
    newprice: "$48",
    oldprice: "",
    button: "CHOOSE COLOR",
    star: <icon.StarFill className="icon"></icon.StarFill>,
  },
  {
    image:
      "https://cdn.no-toxic.com/q_auto:good,c_limit,w_300,f_auto,fl_lossy/l_Badges:badges,w_0.3,y_-0.3,x_0.34,fl_relative,pg_name:2021-nl/l_Badges:badges,w_0.3,y_0.0,x_0.34,fl_relative,pg_name:2020-bogb/l_Badges:badges,w_0.3,y_0.3,x_0.34,fl_relative,pg_name:2020-bsl/v1579109319/products/1FMCBEC/1FMCBEC_Coffee_Bean_Caffeine_Eye_Cream_Primary",
    rating: "(4152)",
    p: "Coffee Bean Caffeine Eye Cream",
    newprice: "$16",
    oldprice: "$29",
    button: "CHOOSE COLOR",
    star: <icon.StarHalf className="icon" />,
  },
  {
    image:
      "https://cdn.no-toxic.com/q_auto:good,c_limit,w_300,f_auto,fl_lossy/v1670244538/products/FG1FSBBM/Bkchl_Mstrz_Primary02_SQ",
    rating: "(70)",
    p: "Bakuchoil Moisturizer",
    newprice: "$25",
    oldprice: "$68",
    button: "CHOOSE COLOR",
    star: <icon.StarFill className="icon"></icon.StarFill>,
  },
];

export default function Homepage() {
  return (
    <div>
      <HeroCarousel />
      <ProductSection1 />
      <HeroImages
        image={{
          img1: "https://www.100percentpure.com/cdn/shop/files/Intro_Packaging_-_Home_Page_Hero_Banner_-_Desktop_1920x.png?v=1714028495",
          img2: "https://cdn.no-toxic.com/q_auto:best,f_auto,fl_lossy,w_auto,c_limit,dpr_auto/v56//Collection-Banner/Introductory_Pricing_Collection_Page_Banner_-_Mobile_EXPORT_AT_2X.png",
        }}
      />
      <ProductSection2 />
      <HeroImages
        image={{
          img1: "https://cdn.no-toxic.com/image/fetch/q_auto:good,f_auto,fl_lossy,w_1270,c_limit/https://cdn.shopify.com/s/files/1/0648/1955/files/April_sub._boxes_Home_Page_Hero_Banner_-_Desktop.png?v=1679408831",
          img2: "https://cdn.no-toxic.com/image/fetch/q_auto:best,f_auto,fl_lossy,w_1270,c_limit,dpr_2.0000000596046448/https://cdn.shopify.com/s/files/1/0648/1955/files/April_sub._boxes_Home_Page_Hero_Banner_-_Mobile.png?v=1679408857",
        }}
      />

      <MonthlyBox />
      <Blog />
    </div>
  );
}
