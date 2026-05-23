import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const Navigate = useNavigate();
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Destinations", path: "/destinations" },
    { name: "Courses", path: "/courses" },
    { name: "Universities", path: "/universities" },
    { name: "Services", path: "/services" },
    { name: "Success Stories", path: "/success-stories" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-[75px]">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-[#0064F0] to-[#35D49F] text-transparent bg-clip-text">
              OverseasEdu
            </h1>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="text-[15px] font-medium text-gray-700 hover:text-[#0064F0] transition"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA + Mobile Button */}
          <div className="flex items-center gap-4">
            {/* CTA */}
            <button className="hidden md:flex px-5 py-2.5 rounded-full bg-gradient-to-r from-[#0064F0] to-[#35D49F] text-white font-medium hover:opacity-90 transition">
              Book Consultation
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="lg:hidden"
            >
              {mobileMenu ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileMenu ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="px-4 pb-6 bg-white border-t border-gray-100">
          <div className="flex flex-col gap-4 pt-4">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="text-gray-700 font-medium py-2 border-b border-gray-100"
                onClick={() => setMobileMenu(false)}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile CTA */}
          <button
            className="w-full mt-6 py-3 rounded-full bg-gradient-to-r from-[#0064F0] to-[#35D49F] text-white font-semibold"
            onClick={() => Navigate("/contact")}
          >
            Book Consultation
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
