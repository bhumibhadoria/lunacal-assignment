import { FaRegQuestionCircle } from "react-icons/fa";
import SquareBox from "./SquareBox";
import { useEffect, useRef, useState } from "react";
import {
  AboutMeWidgetData,
  ExperienceWidgetData,
  RecommendedWidgetData,
} from "./widgetsData";

const Widget = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [indicatorStyle, setIndicatorStyle] = useState({});

  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [hoverIndicatorStyle, setHoverIndicatorStyle] = useState({});

  const navLinksRef = useRef<HTMLDivElement>(null);

  const links = ["About Me", "Experience", "Recommended"];

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  const handleMouseEnter = (index: number) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  useEffect(() => {
    const activeLink =
      activeIndex !== null
        ? (navLinksRef.current?.children[activeIndex] as HTMLButtonElement)
        : null;
    if (activeLink) {
      setIndicatorStyle({
        width: activeLink.offsetWidth + "px",
        left: activeLink.offsetLeft + "px",
        opacity: 1,
      });
    }
  }, [activeIndex]);

  useEffect(() => {
    if (hoverIndex !== null) {
      const hoverLink =
        hoverIndex !== null
          ? (navLinksRef.current?.children[hoverIndex] as HTMLButtonElement)
          : null;
      if (hoverLink) {
        setHoverIndicatorStyle({
          width: hoverLink.offsetWidth + "px",
          left: hoverLink.offsetLeft + "px",
          opacity: 1,
        });
      } else {
        setHoverIndicatorStyle({
          width: 0,
          opacity: 0,
          right: 0,
        });
      }
    } else {
      setHoverIndicatorStyle({
        width: 0,
        opacity: 0,
        left: 0,
      });
    }
  }, [hoverIndex]);

  return (
    <div className="relative flex items-center bg-neutral-700 py-4 rounded-3xl w-full shadow-md shadow-black gap-2 px-3">
      <SquareBox />
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="flex item-center justify-center rounded-3xl bg-neutral-900 p-2 w-full relative">
          <div
            ref={navLinksRef}
            className="flex justify-center relative gap-3 w-full"
            onMouseLeave={handleMouseLeave}
          >
            {links.map((link, index) => (
              <button
                key={index}
                onClick={() => handleClick(index)}
                className={`relative transition-colors duration-300 z-10 p-3 rounded-3xl text-lg w-1/3 text-center cursor-pointer font-bold ${
                  activeIndex === index
                    ? "bg-neutral-800 shadow-2xl shadow-black text-neutral-200"
                    : "text-neutral-400"
                }`}
                onMouseEnter={() => handleMouseEnter(index)}
              >
                {link}
              </button>
            ))}
            {/* on mouse click indicator */}
            <span
              className="absolute top-0 h-full bg-neutral-800 shadow-2xl rounded-3xl shadow-black text-neutral-200 z-0 transition-all duration-500 ease-in-out"
              style={indicatorStyle}
            />
            {/* on mouse enter indicator */}
            <span
              className="absolute top-0 h-full bg-[#1c1c1c] rounded-3xl z-0 transition-all duration-500 ease-in-out"
              style={hoverIndicatorStyle}
            />
          </div>
        </div>
        <div className="p-2 text-lg text-neutral-400">
          {activeIndex === 0 && <AboutMeWidgetData />}
          {activeIndex === 1 && <ExperienceWidgetData />}
          {activeIndex === 2 && <RecommendedWidgetData />}
        </div>
      </div>
      <div className="relative flex flex-col gap-1 p-2 h-full">
        <div className="w-2 h-16 rounded-lg bg-neutral-600 shadow-lg shadow-black bg-gradient-to-b from-neutral-400 to-neutral-600" />
      </div>
      <FaRegQuestionCircle className="absolute top-5 left-3 text-3xl text-neutral-500" />
    </div>
  );
};

export default Widget;
