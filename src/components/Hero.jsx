export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay" />
      <div className="container hero-content">
        <p className="eyebrow">
          <span className="eyebrow-line" />
          THE GAME IS BETTER LIVE
        </p>
        <h1>
          Experience The
          <br />
          Stadium Energy <span>Live!</span>
        </h1>
        <p className="hero-description">
          Big hits, roaring crowds, unforgettable nights. Find your seat and get
          closer to every moment with Boundary Club.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#matches">
            Explore Matches <span aria-hidden="true">↗</span>
          </a>
          <a className="button button-outline" href="#matches">
            Book Tickets
          </a>
        </div>
        <div className="hero-note">
          <span className="live-dot" />
          Your next matchday starts here
        </div>
      </div>
      <div className="hero-bottom-gradient" />
    </section>
  );
}
