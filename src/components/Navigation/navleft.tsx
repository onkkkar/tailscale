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
        <div className="group nav-item">
          <span>Product</span>
          <span className="nav-underline"></span>
          <div className="xl-small:absolute xl-small:flex-row xl-small:gap-[50px] xl-small:px-[30px] invisible top-[57px] left-[-110px] z-[100] flex flex-col justify-between gap-8 rounded-2xl border border-gray-200 bg-white py-[30px] text-[16px] font-semibold opacity-0 shadow-md/5 transition-all duration-200 group-hover:visible group-hover:opacity-100 xl:left-[-40px]">
            <div className="flex-1 lg:min-w-[266px]">
              <div className="t-14 relative z-[10] mb-2 text-gray-500 lg:mb-[15px] lg:ml-3">
                Meet Tailscale
              </div>
              <ul className="group relative whitespace-nowrap">
                <li>
                  <a
                    href="#"
                    className="relative z-[10] inline-block w-full rounded-lg px-1 py-2 hover:bg-gray-50 lg:p-[12px]"
                  >
                    How it Works
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="relative z-[10] inline-block w-full rounded-lg px-1 py-2 hover:bg-gray-50 lg:p-[12px]"
                  >
                    Why Tailscale
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="relative z-[10] inline-block w-full rounded-lg px-1 py-2 hover:bg-gray-50 lg:p-[12px]"
                  >
                    WireGuard® for Enterprises
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="relative z-[10] inline-block w-full rounded-lg px-1 py-2 hover:bg-gray-50 lg:p-[12px]"
                  >
                    Bring Tailscale to Work
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-2 lg:min-w-[266px]">
              <div className="t-14 relative z-[10] mb-2 text-gray-500 lg:mb-[15px] lg:ml-3">
                Explore
              </div>
              <ul className="">
                <li>
                  <a
                    href="#"
                    className="relative z-[10] inline-block w-full rounded-lg px-1 py-2 hover:bg-gray-50 lg:p-[12px]"
                  >
                    Integrations
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="relative z-[10] inline-block w-full rounded-lg px-1 py-2 hover:bg-gray-50 lg:p-[12px]"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="relative z-[10] inline-block w-full rounded-lg px-1 py-2 hover:bg-gray-50 lg:p-[12px]"
                  >
                    Compare Tailscale
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="relative z-[10] inline-block w-full rounded-lg px-1 py-2 hover:bg-gray-50 lg:p-[12px]"
                  >
                    Community Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="relative z-[10] inline-block w-full rounded-lg px-1 py-2 hover:bg-gray-50 lg:p-[12px]"
                  >
                    Partner Skills
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="group nav-item">
          <span>Solutions</span>
          <span className="nav-underline"></span>
          <div className="xl-small:absolute xl-small:flex-row xl-small:gap-[50px] xl-small:px-[30px] invisible top-[57px] left-[-110px] z-[100] flex flex-col justify-between gap-8 rounded-2xl border border-gray-200 bg-white py-[30px] text-[16px] font-semibold opacity-0 shadow-md/5 transition-all duration-200 group-hover:visible group-hover:opacity-100 xl:left-[-40px]">
            <div className="flex-1 lg:min-w-[266px]">
              <div className="t-14 relative z-[10] mb-2 text-gray-500 lg:mb-[15px] lg:ml-3">
                By use-case
              </div>
              <ul>
                <li>
                  <a
                    href="#"
                    className="relative z-[10] inline-block w-full rounded-lg px-1 py-2 hover:bg-gray-50 lg:p-[12px]"
                  >
                    Remote Access
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="relative z-[10] inline-block w-full rounded-lg px-1 py-2 hover:bg-gray-50 lg:p-[12px]"
                  >
                    Site-to-site Networking
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="relative z-[10] inline-block w-full rounded-lg px-1 py-2 hover:bg-gray-50 lg:p-[12px]"
                  >
                    Multi-Cloud Networking
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="relative z-[10] inline-block w-full rounded-lg px-1 py-2 hover:bg-gray-50 lg:p-[12px]"
                  >
                    Kubernetes Networking
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="relative z-[10] inline-block w-full rounded-lg px-1 py-2 hover:bg-gray-50 lg:p-[12px]"
                  >
                    Edge & IoT Deployments
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="relative z-[10] inline-block w-full rounded-lg px-1 py-2 hover:bg-gray-50 lg:p-[12px]"
                  >
                    Zero Trust Networking
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="relative z-[10] inline-block w-full rounded-lg px-1 py-2 hover:bg-gray-50 lg:p-[12px]"
                  >
                    AI Workloads
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="relative z-[10] inline-block w-full rounded-lg px-1 py-2 hover:bg-gray-50 lg:p-[12px]"
                  >
                    Secure SaaS
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="relative z-[10] inline-block w-full rounded-lg px-1 py-2 hover:bg-gray-50 lg:p-[12px]"
                  >
                    Business VPN
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="relative z-[10] inline-block w-full rounded-lg px-1 py-2 hover:bg-gray-50 lg:p-[12px]"
                  >
                    Homelab
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-2 lg:min-w-[266px]">
              <div className="t-14 relative z-[10] mb-2 text-gray-500 lg:mb-[15px] lg:ml-3">
                By role
              </div>
              <ul>
                <li>
                  <a
                    href="#"
                    className="relative z-[10] inline-block w-full rounded-lg px-1 py-2 hover:bg-gray-50 lg:p-[12px]"
                  >
                    DevOps
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="relative z-[10] inline-block w-full rounded-lg px-1 py-2 hover:bg-gray-50 lg:p-[12px]"
                  >
                    IT
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="relative z-[10] inline-block w-full rounded-lg px-1 py-2 hover:bg-gray-50 lg:p-[12px]"
                  >
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="group nav-item">
          <span>Enterprise</span>
          <span className="nav-underline"></span>
        </div>
        <div className="group nav-item">
          <span>Case Studies</span>
          <span className="nav-underline"></span>
        </div>
        <div className="group nav-item">
          <span>Docs</span>
          <span className="nav-underline"></span>
        </div>
        <div className="group nav-item">
          <span>Blog</span>
          <span className="nav-underline"></span>
        </div>
        <div className="group nav-item">
          <span>Pricing</span>
          <span className="nav-underline"></span>
        </div>
      </nav>
    </div>
  );
};

export default NavLeft;
