import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  // { label: "Capabilities", href: "#capabilities" },
  { label: "Processes", href: "#process" },
  { label: "Contact Us", href: "#contact" },
];

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}>
      <div className="container header-inner">
        <a className="brand" href="#home" aria-label="Neuralis home">
          <span className="brand-mark" />
          <span className="brand-copy">
            <strong>Neuralis</strong>
            <span>AI, IoT & Software Systems</span>
          </span>
        </a>

        <nav className="site-nav" aria-label="Section navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
