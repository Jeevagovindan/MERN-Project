import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import * as icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export default function ProductSection(props) {
  const { data } = props;
  return (
    <div>
      <section className="position-relative">
        <div class="row gx-0 overflow-scroll  flex-nowrap scroll row-margin">
          {data.map((ele) => {
            return (
              <div class="col-6 col-lg-3">
                <div className="item-card">
                  <div className="text-center position-relative">
                    <Link to="/pdp">
                      <img
                        src={ele.image}
                        alt="image1"
                        className="w-100 h-100"
                      />
                    </Link>
                  </div>
                  <div className="content">
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
                    <div className="pcontainer">
                      <p className="p-holder">{ele.p}</p>
                    </div>
                    <p className="costcolor">
                      {ele.newprice} <span>{ele.oldprice}</span>
                    </p>
                    <button className="butn">{ele.button}</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
