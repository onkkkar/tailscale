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
          <div className="nav-item-hover">
            <div className="flex-1 lg:min-w-[266px]">
              <div className="t-14 relative z-[10] mb-2 text-gray-500 lg:mb-[15px] lg:ml-3">
                Meet Tailscale
              </div>
              <ul className="group relative whitespace-nowrap">
                <li>
                  <a href="#" className="nav-link">
                    How it Works
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link">
                    Why Tailscale
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link">
                    WireGuard® for Enterprises
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link">
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
                  <a href="#" className="nav-link">
                    Integrations
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link">
                    Compare Tailscale
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link">
                    Community Projects
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link">
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
          <div className="nav-item-hover">
            <div className="flex-1 lg:min-w-[266px]">
              <div className="t-14 relative z-[10] mb-2 text-gray-500 lg:mb-[15px] lg:ml-3">
                By use-case
              </div>
              <ul>
                <li>
                  <a href="#" className="nav-link">
                    Remote Access
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link">
                    Site-to-site Networking
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link">
                    Multi-Cloud Networking
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link">
                    Kubernetes Networking
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link">
                    Edge & IoT Deployments
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link">
                    Zero Trust Networking
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link">
                    AI Workloads
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link">
                    Secure SaaS
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link">
                    Business VPN
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link">
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
                  <a href="#" className="nav-link">
                    DevOps
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link">
                    IT
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link">
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
