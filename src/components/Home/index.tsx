const Home = () => {
  return (
    <section className="p-top-0 p-bottom-75 is-wide overflow-hidden bg-gray-50">
      <div className="is-wide container space-y-8 md:!space-y-[65px]">
        <div className="space-y-10 pt-24 lg:space-y-[115px] lg:pt-[150px]">
          <div className="container">
            <div className="flex flex-col justify-between gap-5 px-[40px] lg:flex-row lg:items-end">
              <h1 className="line w-full text-center leading-[1.18] font-[550] tracking-tighter lg:max-w-[750px] lg:text-left">
                <span className="t-72">
                  Your legacy VPN
                  <span className="block">belongs in the past</span>
                </span>
              </h1>
              <div className="text-body-black mx-auto text-left md:max-w-[441px] lg:mx-0">
                <div className="mb-5 text-[1.25rem] lg:mb-9">
                  <div className="">
                    <p>
                      Fast, seamless device connectivity — no hardware, no
                      firewall rules, no wasted time.
                    </p>
                  </div>
                </div>
                <div className="xs:w-auto flex w-full justify-start">
                  <div className="xs:w-auto xs:flex-row xs:items-center xs:space-x-5 flex w-full flex-row items-center md:space-x-[30px]">
                    <a className="button group bg-head inline-flex items-center gap-2 overflow-hidden">
                      Start connecting devices
                      <span className="relative inline-flex h-6 w-6">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide arrow-out absolute top-0 left-0"
                          style={{ pointerEvents: "none" }}
                          aria-hidden="true"
                        >
                          <path d="M18 8L22 12L18 16" />
                          <path d="M10 12H22" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide arrow-in absolute top-0 left-0"
                          style={{ pointerEvents: "none" }}
                          aria-hidden="true"
                        >
                          <path d="M18 8L22 12L18 16" />
                          <path d="M10 12H22" />
                        </svg>
                      </span>
                    </a>
                    <a className="font-inter text-subheading-black cursor-pointer font-medium tracking-tight">
                      Contact sales
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[1360px] overflow-hidden rounded-2xl bg-gray-900 will-change-transform md:aspect-[1360/725]">
            <img
              src="/images/home.svg"
              className="img-fluid rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle"
              alt=""
            />
          </div>
          <div className="mt-[65px]">
            <h2 className="font-mdio text-subheading-black mb-4 text-center uppercase">
              Trusted by 10,000+ companies
            </h2>
          </div>
        </div>
        <div className="marquee"></div>
      </div>
    </section>
  );
};

export default Home;
