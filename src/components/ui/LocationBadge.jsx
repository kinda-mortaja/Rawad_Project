import './LocationBadge.css'

export default function LocationBadge({ location = 'فلسطين، غزة' }) {
  return (
    <div className="location-badge">
      <span className="location-badge__icon">
        {/* Map pin icon */}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      </span>
      <span className="location-badge__text">{location}</span>
    </div>
  )
}