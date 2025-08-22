const NavRight = () => {
  return (
    <>
      <div className="xl-small:flex xl-small:items-center xl-small:gap-[25px] hidden">
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

          <button className="group bg-heading-black/95 xs: font-body border-heading-black hover:border-hray-900 flex w-auto shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-lg border px-[17px] py-2 text-[16px] leading-[1.46] font-medium tracking-[-0.16px] text-white transition-colors hover:bg-gray-900">
            <span>Get Started - it's free!</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default NavRight;
