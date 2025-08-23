const Home = () => {
  return (
    <section className="p-top-0 p-bottom-75 is-wide overflow-hidden bg-gray-50">
      <div className="is-wide container space-y-8 md:!space-y-[65px]">
        <div className="space-y-10 pt-24 lg:space-y-[115px] lg:pt-[150px]">
          <div className="container">
            <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
              <h1 className="line w-full text-center leading-[1.18] font-semibold lg:max-w-[750px] lg:text-left">
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
                    <a className="button group inline-flex items-center gap-2">
                      Start connecting devices
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
                        className="lucide"
                      >
                        <path d="M18 8L22 12L18 16" />
                        <path d="M10 12H22" />
                      </svg>
                    </a>
                    <a className="cursor-pointer">Contact sales</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=""></div>
        </div>
        <div className="marquee"></div>
      </div>
    </section>
  );
};

export default Home;
