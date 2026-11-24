function formatPrice(price) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
}

export default function MatchCard({ match, isBooked, onBook }) {
  const { team1, team2, team1Logo, team2Logo, date, time, venue, price } =
    match;

  return (
    <article className="match-card">
      <div className="match-card-topline">
        <span className="match-label">
          <span className="live-dot" />
          IPL SHOWDOWN
        </span>
        <span className="match-date">{date}</span>
      </div>

      <div className="teams">
        <div className="team">
          <img className="team-logo" src={team1Logo} alt={`${team1} mark`} />
          <span>{team1}</span>
        </div>
        <span className="versus" aria-label="versus">
          VS
        </span>
        <div className="team team-away">
          <img className="team-logo" src={team2Logo} alt={`${team2} mark`} />
          <span>{team2}</span>
        </div>
      </div>

      <div className="match-details">
        <p>
          <span className="detail-icon" aria-hidden="true">
            ◷
          </span>
          {time}
        </p>
        <p>
          <span className="detail-icon" aria-hidden="true">
            ◎
          </span>
          {venue}
        </p>
      </div>

      <div className="match-card-footer">
        <div className="ticket-price">
          <span>Tickets from</span>
          <strong>{formatPrice(price)}</strong>
        </div>
        <button
          className={isBooked ? "button button-booked" : "button button-small"}
          type="button"
          onClick={() => onBook(match)}
          aria-pressed={isBooked}
        >
          {isBooked ? "Added ✓" : "Book Ticket"}
        </button>
      </div>
    </article>
  );
}
