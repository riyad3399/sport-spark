import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import banner1 from "../../../assets/images/banner (1).jpg";
import banner2 from "../../../assets/images/banner (9).jpg";
import banner3 from "../../../assets/images/banner (8).jpg";
import banner4 from "../../../assets/images/banner (10).jpg";
import banner5 from "../../../assets/images/banner (2).jpg";
import banner6 from "../../../assets/images/banner (5).jpg";

const Banner = () => {
  return (
    <Carousel autoPlay={true} autoFocus={true}>
   
      <div>
        <img src={banner1} />
      </div>
      <div>
        <img src={banner2} />
      </div>
      <div>
        <img src={banner3} />
      </div>
      <div>
        <img src={banner4} />
      </div>
      <div>
        <img src={banner5} />
      </div>
      <div>
        <img src={banner6} />
      </div>
    </Carousel>
  );
};

export default Banner;
