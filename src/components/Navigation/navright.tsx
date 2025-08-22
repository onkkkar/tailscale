const NavRight = () => {
  return (
    <>
      <div className="xl-small:flex xl-small:items-center xl-small:gap-[25px] hidden">
        <div className="xl-small:flex xl-small:items-center xl-small:gap-[25px] hidden">
          <div className="group text-heading-black/80 hover:text-heading-black/100 relative cursor-pointer text-[14px] leading-normal font-semibold tracking-[-.28px]">
            <span>Download</span>
            <span className="bg-heading-black/80 absolute right-0 bottom-[-6px] left-[25%] flex h-[3px] w-[50%] justify-center rounded-[5px] opacity-0 transition-opacity duration-200 group-hover:opacity-100"></span>
          </div>
          <div className="group text-heading-black/80 hover:text-heading-black/100 relative cursor-pointer text-[14px] leading-normal font-semibold tracking-[-.28px]">
            <span>Login</span>
            <span className="bg-heading-black/80 absolute right-0 bottom-[-6px] left-[25%] flex h-[3px] w-[50%] justify-center rounded-[5px] opacity-0 transition-opacity duration-200 group-hover:opacity-100"></span>
          </div>
          <div className="group text-heading-black/80 hover:text-heading-black/100 relative cursor-pointer text-[14px] leading-normal font-semibold tracking-[-.28px]">
            <span>Contact</span>
            <span className="bg-heading-black/80 absolute right-0 bottom-[-6px] left-[25%] flex h-[3px] w-[50%] justify-center rounded-[5px] opacity-0 transition-opacity duration-200 group-hover:opacity-100"></span>
          </div>
          <div className="group text-heading-black/80 hover:text-heading-black/100 relative cursor-pointer text-[14px] leading-normal font-semibold tracking-[-.28px]">
            <span>Sales</span>
            <span className="bg-heading-black/80 absolute right-0 bottom-[-6px] left-[25%] flex h-[3px] w-[50%] justify-center rounded-[5px] opacity-0 transition-opacity duration-200 group-hover:opacity-100"></span>
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
