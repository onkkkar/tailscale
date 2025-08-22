import Logo from "./logo";

const NavLeft = () => {
  return (
    <div className="flex gap-[35px]">
      <a
        href="/"
        className="text-heading-black w-[110px] transition-colors duration-200"
      >
        <Logo />
      </a>
      <nav className="xl-small:flex relative hidden lg:gap-6">
        <div className="group text-heading-black/80 hover:text-heading-black/100 relative cursor-pointer text-[14px] leading-normal font-semibold tracking-[-.28px]">
          <span>Product</span>
          <span className="bg-heading-black/80 absolute right-0 bottom-[-6px] left-[25%] flex h-[3px] w-[50%] rounded-[5px] opacity-0 transition-opacity duration-200 group-hover:opacity-100"></span>
        </div>
        <div className="group text-heading-black/80 hover:text-heading-black/100 relative cursor-pointer text-[14px] leading-normal font-semibold tracking-[-.28px]">
          <span>Solutions</span>
          <span className="bg-heading-black/80 absolute right-0 bottom-[-6px] left-[25%] flex h-[3px] w-[50%] rounded-[5px] opacity-0 transition-opacity duration-200 group-hover:opacity-100"></span>
        </div>
        <div className="group text-heading-black/80 hover:text-heading-black/100 relative cursor-pointer text-[14px] leading-normal font-semibold tracking-[-.28px]">
          <span>Enterprise</span>
          <span className="bg-heading-black/80 absolute right-0 bottom-[-6px] left-[25%] flex h-[3px] w-[50%] rounded-[5px] opacity-0 transition-opacity duration-200 group-hover:opacity-100"></span>
        </div>
        <div className="group text-heading-black/80 hover:text-heading-black/100 relative cursor-pointer text-[14px] leading-normal font-semibold tracking-[-.28px]">
          <span>Case Studies</span>
          <span className="bg-heading-black/80 absolute right-0 bottom-[-6px] left-[25%] flex h-[3px] w-[50%] rounded-[5px] opacity-0 transition-opacity duration-200 group-hover:opacity-100"></span>
        </div>
        <div className="group text-heading-black/80 hover:text-heading-black/100 relative cursor-pointer text-[14px] leading-normal font-semibold tracking-[-.28px]">
          <span>Docs</span>
          <span className="bg-heading-black/80 absolute right-0 bottom-[-6px] left-[25%] flex h-[3px] w-[50%] rounded-[5px] opacity-0 transition-opacity duration-200 group-hover:opacity-100"></span>
        </div>
        <div className="group text-heading-black/80 hover:text-heading-black/100 relative cursor-pointer text-[14px] leading-normal font-semibold tracking-[-.28px]">
          <span>Blog</span>
          <span className="bg-heading-black/80 absolute right-0 bottom-[-6px] left-[25%] flex h-[3px] w-[50%] rounded-[5px] opacity-0 transition-opacity duration-200 group-hover:opacity-100"></span>
        </div>
        <div className="group text-heading-black/80 hover:text-heading-black/100 relative cursor-pointer text-[14px] leading-normal font-semibold tracking-[-.28px]">
          <span>Pricing</span>
          <span className="bg-heading-black/80 absolute right-0 bottom-[-6px] left-[25%] flex h-[3px] w-[50%] rounded-[5px] opacity-0 transition-opacity duration-200 group-hover:opacity-100"></span>
        </div>
      </nav>
    </div>
  );
};

export default NavLeft;
