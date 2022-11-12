import { useState } from "react";
import nd1 from "../../images/1.png"
import nd2 from "../../images/3.png"
import nd3 from "../../images/4.png"
import { FcPrevious, FcNext } from 'react-icons/fc';
import { BsFillCircleFill } from 'react-icons/bs';

function Caro() {
  const [indexImage, setIndexImage] = useState(0);
  const images = [
    {
      id: 0,
      url: nd1,
    },
    {
      id: 1,
      url: nd2,
    },
    {
      id: 2,
      url: nd3,
    },
  ];

  const handlePrev = () => {
    if (indexImage > 0) {
      setIndexImage(indexImage - 1);
    }
    if (indexImage === 0) {
      setIndexImage(images.length - 1);
    }
  };
  const handleNext = () => {
    if (indexImage < images.length - 1) {
      setIndexImage(indexImage + 1);
    }
    if (indexImage === images.length - 1) {
      setIndexImage(0);
    }
  };
  return (
    <div>
      
      <div  className="list">
        <button className="next" onClick={handlePrev}>
          <FcPrevious/>
        </button>
        <div>
          {images?.map((item) => (item.id === indexImage ? <img className="img" src={item.url} /> : null))}
        </div>
        <button className="next" onClick={handleNext}>
          <FcNext/>
        </button>
      </div>
      
      <div className="px">
        {images.map((item, index) => (
          <span
            onClick={() => setIndexImage(index)}
            className="px-3"
            key={item.url + index}
          >
            <BsFillCircleFill/>
          </span>
        ))}
      </div>
    </div>
  );
}

export default Caro;
