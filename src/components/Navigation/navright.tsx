const NavRight = () => {
  return (
    <>
      <div className="xl-small:flex xl-small:items-center xl-small:gap-[25px] hidden">
        <div className="group nav-item">
          <span>Download</span>
        </div>
        <div className="group nav-item">
          <span>Login</span>
        </div>
        <div className="group nav-item">
          <span>Contact Sales</span>
        </div>

        <button className="button group xs:font-body">
          <span>Get Started - it's free!</span>
        </button>
      </div>
    </>
  );
};

export default NavRight;
