import Banner from "./banner";
import NavLeft from "./navleft";
import NavRight from "./navright";

const Navigation = () => {
  return (
    <>
      <Banner />
      <header className="sticky top-0 right-0 left-0 z-[100] h-[60px] transition-colors duration-300">
        <div className="is-wide xl-small:py-3 container flex items-center justify-between py-4">
          <NavLeft />
          <NavRight />
        </div>
      </header>
    </>
  );
};

export default Navigation;
