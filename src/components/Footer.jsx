export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <a className="brand footer-brand" href="#home" aria-label="Boundary Club home">
          <span className="brand-mark" aria-hidden="true">
            <span />
          </span>
          <span className="brand-copy">
            <strong>BOUNDARY</strong>
            <span>CLUB</span>
          </span>
        </a>
        <p>© {new Date().getFullYear()} Boundary Club. All rights reserved.</p>
        <a className="back-to-top" href="#home">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
