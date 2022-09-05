import Carousel from "react-bootstrap/Carousel";
import cinepolisReopening from "./images/cinepolis-reopening.jpg";
import SubwayCarousel from "./images/Subway-carousel.jpg";
import ChaayosCarousel from "./images/chaayos-carousel.jpg";
import MeeMeeCarousel from "./images/mee-mee.jpg";
import GianisCarousel from "./images/gianis.jpg";

function HomePageCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={GianisCarousel} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={SubwayCarousel}
          alt="Second slide"
        />

        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={cinepolisReopening}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ChaayosCarousel}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={MeeMeeCarousel} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default HomePageCarousel;
