const navItems = [
  { label: "Home", href: "#home" },
  { label: "What We Do", href: "#services" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

function Header() {
  return (
    <header className="site-header">
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
