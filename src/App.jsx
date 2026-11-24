import { useState } from "react";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import MatchCard from "./components/MatchCard.jsx";
import Navbar from "./components/Navbar.jsx";
import { matches } from "./data/matches.js";
import "./App.css";

export default function App() {
  const [showMatches, setShowMatches] = useState(true);
  const [bookedMatches, setBookedMatches] = useState([]);
  const [bookingMessage, setBookingMessage] = useState("");

  function handleBook(match) {
    setBookedMatches((currentBookings) => {
      if (currentBookings.some((booking) => booking.id === match.id)) {
        return currentBookings;
      }

      return [...currentBookings, match];
    });
    setBookingMessage(`${match.team1} vs ${match.team2} added to My Bookings.`);
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <section className="matches-section section-pad" id="matches">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow section-eyebrow">PICK YOUR MATCHDAY</p>
                <h2>Upcoming <span>matches</span></h2>
                <p className="section-description">
                  Find your team, choose your seat, and feel every delivery.
                </p>
              </div>
              <button
                className="button button-toggle"
                type="button"
                onClick={() => setShowMatches((isVisible) => !isVisible)}
                aria-expanded={showMatches}
                aria-controls="match-list"
              >
                {showMatches ? "Hide Matches" : "Show Matches"}
                <span aria-hidden="true">{showMatches ? "−" : "+"}</span>
              </button>
            </div>

            <p className="demo-notice">
              Illustrative demo listings only — dates and fixtures are not
              official.
            </p>

            {showMatches && (
              <div className="match-grid" id="match-list">
                {matches.map((match) => (
                  <MatchCard
                    key={match.id}
                    match={match}
                    isBooked={bookedMatches.some(
                      (booking) => booking.id === match.id,
                    )}
                    onBook={handleBook}
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="booking-section section-pad" id="bookings">
          <div className="container booking-panel">
            <div className="booking-heading">
              <div>
                <p className="eyebrow section-eyebrow">YOUR MATCHDAY PLANS</p>
                <h2>My <span>Bookings</span></h2>
              </div>
              <span className="booking-count">
                {bookedMatches.length}{" "}
                {bookedMatches.length === 1 ? "match" : "matches"}
              </span>
            </div>
            {bookingMessage && (
              <p className="booking-message" role="status">
                {bookingMessage}
              </p>
            )}
            {bookedMatches.length > 0 ? (
              <ul className="booking-list">
                {bookedMatches.map((match) => (
                  <li className="booking-item" key={match.id}>
                    <span>
                      {match.team1} <span className="booking-vs">vs</span>{" "}
                      {match.team2}
                    </span>
                    <span>{match.date}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="empty-bookings">
                Your saved matches will appear here. Pick a match above to get
                started.
              </p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
