/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "../../../Components/Common/Button/Button";
import Container from "../../../Components/Common/Container/Container";

const ProgramCarousel = ({ projects }) => {
  const settings = {
    arrows: false,
    // dots: true,
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 1, // Ek baar me kitne slides dikhen
    slidesToScroll: 1, // Ek scroll me kitne slides move ho
    autoplay: true, // Auto-scroll
    autoplaySpeed: 3000, // Auto-scroll speed (3s)
    responsive: [
      {
        settings: {
          slidesToShow: 1, // Mobile me ek slide dikhayega
          slidesToScroll: 1,
        },
      },
    ],
  };

  const bgGrads =
    "bg-gradient-to-tl from-white/10 via-transparent via-30% to-white/10 backdrop-blur border border-gray-200 dark:border-gray-700/50 rounded-2xl";

  return (
    <Slider
      {...settings}
      className="w-[360px] flex flex-1 sm:max-w-lg md:max-w-3xl shadow-2xl shadow-gray-300 dark:shadow-gray-950 rounded-2xl"
    >
      {projects.map((item) => (
        <div key={item.id}>
          <div
            className={`cursor-pointer grid md:grid-cols-2 gap-6 p-2 ${bgGrads} group`}
          >
            <div className="h-56 w-full rounded-xl overflow-hidden border-2 border-gray-200 dark:border-gray-700/40">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full origin-center group-hover:scale-110 transition-all duration-700 ease-in-out"
              />
            </div>
            <div className="h-full justify-between flex flex-col gap-4">
              <div className="space-y-4">
                <h3 className="text-gray-800 dark:text-white font-medium whitespace-nowrap">
                  {item.title}
                </h3>
                <p className="my-1 max-w-md text-sm text-gray-500">
                  {item.description}
                </p>
              </div>
              <div>
                <Button variant="secondary" size="sm">
                  Apply now
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default ProgramCarousel;
