import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonialData = [
  {
    id: 1,
    name: "Siomaygoreng",
    text: "Enaknyaooooooo",
    img: "https://picsum.photos/seed/1/100/100",
  },
  {
    id: 2,
    name: "Miegorengkuah",
    text: "Makanannya Enak , jadi nagih mau bubarin tempatnya",
    img: "https://picsum.photos/seed/2/100/100",
  },
  {
    id: 3,
    name: "Kurang5Ribu",
    text: "Minumannya pas banget coy rasanya",
    img: "https://picsum.photos/seed/3/100/100",
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  return (
    <div className="py-16 px-4 bg-[#222831] text-white">
      <div className="text-center mb-12 max-w-xl mx-auto">
        <p className="text-sm uppercase text-gray-400 tracking-wide">Testimonial</p>
        <h2 className="text-4xl font-bold mb-2">Testimonial</h2>
        <p className="text-base text-gray-300">
          Send us your testimonial about your experience dining at our restaurant. Gamsahabnida!!
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <Slider {...settings}>
          {testimonialData.map(({ id, name, text, img }) => (
            <div key={id} className="px-4">
              <div className="bg-gray-100 text-black rounded-xl shadow-md p-6 text-center relative min-h-[240px]">
                <img
                  src={img}
                  alt={name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <p className="text-sm text-yellow-700 italic mb-4">"{text}"</p>
                <h3 className="text-lg font-semibold">{name}</h3>
                <p className="text-5xl text-gray-300 absolute top-2 right-4 font-serif">“</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;