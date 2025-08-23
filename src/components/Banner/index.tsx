const Banner = () => {
  return (
    <div className="bg-heading-black z-[20000] flex min-h-[40px] w-full items-center justify-center p-2 px-10 text-center text-white">
      <a
        href="#"
        className="group font-family flex flex-wrap justify-center gap-x-4 text-sm tracking-tight"
      >
        99% of companies want to ditch their VPN. See why in our 2025 Zero Trust
        Report
        <span className="font-bold underline group-hover:no-underline">
          Read more
        </span>
      </a>
    </div>
  );
};

export default Banner;
