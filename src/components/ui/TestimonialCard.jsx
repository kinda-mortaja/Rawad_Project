import LocationBadge from './LocationBadge'
import './TestimonialCard.css'

export default function TestimonialCard({ text, name, location, img }) {
  return (
    <div className="tcard">

      {/* Quote text */}
      <blockquote className="tcard__quote">
        {text}
      </blockquote>

      {/* Footer: name + avatar + location */}
      <div className="tcard__footer">
        <div className="tcard__author">
          <p className="tcard__name">{name}</p>
          <LocationBadge location={location} />
        </div>
        <img
          src={img}
          alt={name}
          className="tcard__avatar"
        />
      </div>

    </div>
  )
}