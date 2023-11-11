import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";

const Category = () => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper mb-20"
    >
      <SwiperSlide>
        <img src={slide1} className="w-full" />
        <h3 className="text-4xl text-center -mt-32 font-bold text-white ">
          Salad
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide2} className="w-full" />
        <h3 className="text-4xl text-center -mt-32 font-bold text-white ">
          Pizza
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide3} className="w-full" />
        <h3 className="text-4xl text-center -mt-32 font-bold text-white ">
          Soupe
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide4} className="w-full" />
        <h3 className="text-4xl text-center -mt-32 font-bold text-white ">
          Cake
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide5} className="w-full" />
        <h3 className="text-4xl text-center -mt-32 font-bold text-white ">
          Salad
        </h3>
      </SwiperSlide>
    </Swiper>
  );
};

export default Category;
