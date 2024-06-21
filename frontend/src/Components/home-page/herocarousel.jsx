import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import "../style.css";

export default function HeroCarousel() {
  return (
    <div>
      <section className="hero-container">
        <Carousel>
          <Carousel.Item interval={10000}>
            <img
              className="d-block w-100"
              src="https://cdn.no-toxic.com/image/fetch/q_auto:good,f_auto,fl_lossy,w_1300,c_limit/https://cdn.shopify.com/s/files/1/0648/1955/files/Buy_More_Save_More_Home_Page_Hero_Banner_-_Desktop_1.png?v=1679322639"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://cdn.no-toxic.com/image/fetch/q_auto:good,f_auto,fl_lossy,w_1300,c_limit/https://cdn.shopify.com/s/files/1/0648/1955/files/April_sub._boxes_Home_Page_Hero_Banner_-_Desktop.png?v=1679408831"
              alt="Second slide"
            />
          </Carousel.Item>
        </Carousel>
      </section>
      <section className="hero-containerone">
        <Carousel>
          <Carousel.Item interval={10000}>
            <img
              className="d-block w-100"
              src="https://cdn.no-toxic.com/image/fetch/q_auto:best,f_auto,fl_lossy,w_1300,c_limit,dpr_1.5/https://cdn.shopify.com/s/files/1/0648/1955/files/Buy_More_Save_More_Home_Page_Hero_Banner_-_Mobile_1.png?v=1679322655"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://cdn.no-toxic.com/image/fetch/q_auto:best,f_auto,fl_lossy,w_700,c_limit,dpr_1.5/https://cdn.shopify.com/s/files/1/0648/1955/files/April_sub._boxes_Home_Page_Hero_Banner_-_Mobile.png?v=1679408857"
              alt="Second slide"
            />
          </Carousel.Item>
        </Carousel>
      </section>
    </div>
  );
}
