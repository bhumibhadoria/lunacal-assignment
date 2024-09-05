import Gallery from "./Gallery";
import Widget from "./Widget";

const Main = () => {
  return (
    <div className="fixed lg:right-10 lg:w-[45%] w-full md:px-5 max-md:px-5 min-h-screen min-w-screen max-h-screen-2xl flex flex-col items-center justify-center gap-5 overflow-hidden">
      <Widget />
      <div className="w-3/4 bg-neutral-700 h-1 shadow-xl shadow-black" />
      <Gallery />
      <div className="w-3/4 bg-neutral-700 h-1 shadow-xl shadow-black" />
    </div>
  );
};

export default Main;
