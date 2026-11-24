const navigationLinks = [
  { label: "Home", href: "#home" },
  { label: "Matches", href: "#matches" },
  { label: "Book Tickets", href: "#matches", featured: true },
  { label: "My Bookings", href: "#bookings" },
];

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label="Boundary Club home">
          <span className="brand-mark" aria-hidden="true">
            <span />
          </span>
          <span className="brand-copy">
            <strong>BOUNDARY</strong>
            <span>CLUB</span>
          </span>
        </a>

        <div className="nav-links">
          {navigationLinks.map(({ label, href, featured }) => (
            <a
              className={featured ? "nav-link nav-link-featured" : "nav-link"}
              href={href}
              key={label}
            >
              {label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
