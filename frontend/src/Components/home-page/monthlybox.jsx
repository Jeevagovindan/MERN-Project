import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import * as icon from "react-bootstrap-icons";

const Box = [
  {
    image:
      "https://cdn.no-toxic.com/q_auto:good,c_limit,w_300,f_auto,fl_lossy/v1679407011/products/1BODMFCMHOCT2022/PDP_IMAGES1",
    rating: "(22)",
    p: "Monthly Box ($39 worth $100+)",
    newprice: "$39",
    oldprice: "($112 value)",
    button: "ADD TO TOTE",
    star: <icon.StarFill className="icon"></icon.StarFill>,
  },
  {
    image:
      "https://cdn.no-toxic.com/q_auto:good,c_limit,w_300,f_auto,fl_lossy/v1679407093/products/1BODMNFCMHOCT2022/PDP_IMAGES2",
    rating: "(9)",
    p: "Monthly Box ($69 worth $200+)",
    newprice: "$69",
    oldprice: "($212 value)",
    button: "ADD TO TOTE",
    star: <icon.StarFill className="icon" />,
  },
  {
    image:
      "https://cdn.no-toxic.com/q_auto:good,c_limit,w_300,f_auto,fl_lossy/v1679407139/products/1BODHTSCMHOCT2022/PDP_IMAGES3",
    rating: "(18)",
    p: "Monthly Box ($159 worth $500+)",
    newprice: "$159",
    oldprice: "($520 value)",
    button: "ADD TO TOTE",
    star: <icon.StarFill className="icon"></icon.StarFill>,
  },
];

export default function MonthlyBox() {
  return (
    <div style={{ marginTop: "3rem" }}>
      <div class="row gx-0 overflow-scroll flex-nowrap  row-margin scroll position-relative">
        {Box.map((ele) => {
          return (
            <div class="col-6 col-md-4 px-3">
              <div class="item-card">
                <div class="text-center position-relative">
                  <img src={ele.image} alt="img1" class="w-100 h-100" />
                </div>
                <div class="content mt-2">
                  <div className="d-inline" style={{ fontSize: "1rem" }}>
                    <div>
                      <icon.StarFill className="icon" />
                      <icon.StarFill className="icon" />
                      <icon.StarFill className="icon" />
                      <icon.StarFill className="icon" />
                      {ele.star}
                      {ele.rating}
                    </div>
                  </div>
                  <div class="">
                    <p class="p-holder">{ele.p}</p>
                  </div>
                  <div class="mt-3 d-flex justify-content-center">
                    <p style={{ fontweight: "900" }}>{ele.newprice}</p>
                    <p style={{ fontweight: "lighter", fontsize: "x-small" }}>
                      {" "}
                      {ele.oldprice}
                    </p>
                  </div>
                  <button class="butn">{ele.button}</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
