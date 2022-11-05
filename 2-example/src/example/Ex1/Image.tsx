import Carousel from 'react-bootstrap/Carousel';
import nd from "../../images/1.png"
import nd2 from "../../images/4.png"
import nd3 from "../../images/3.png"

function Image() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= {nd}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="d-block w-100"
          src= {nd2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= {nd3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Image;