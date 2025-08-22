import NavLeft from "./navleft";
import NavRight from "./navright";

const Navigation = () => {
  return (
    <>
      <div className="is-wide xl-small:py-3 container flex items-center justify-between py-4">
        <NavLeft />
        <NavRight />
      </div>
    </>
  );
};

export default Navigation;
