import { useState, useEffect } from "react";
import NavLeft from "./navleft";
import NavRight from "./navright";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`is-wide xl-small:py-3 container flex items-center justify-between py-4 ${
          scrolled ? "bg-white" : "bg-transparent"
        }`}
      >
        <NavLeft />
        <NavRight />
      </div>
    </>
  );
};

export default Navigation;
