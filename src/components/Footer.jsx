import "../styles/Footer.css";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Processes", href: "#process" },
  { label: "Contact Us", href: "#contact" },
];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-copy">
          <p className="footer-kicker">Ready to build something intelligent?</p>
          <h2>From edge devices to full products, we can shape the next step with you.</h2>
          <p>
            Neuralis delivers practical AI, embedded systems, and software engineering
            for teams building serious products.
          </p>
        </div>

        <div className="footer-links">
          {footerLinks.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
