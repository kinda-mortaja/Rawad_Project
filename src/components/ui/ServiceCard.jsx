import './ServiceCard.css'

export default function ServiceCard({ num, title, desc, cta = 'اطلبك تصميمك الان !' }) {
  return (
    <div className="service-card">
      <span className="service-card__num">{num}</span>
      <hr className="service-card__divider" />
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__desc">{desc}</p>
      <button className="service-card__cta btn-dark">{cta}</button>
    </div>
  )
}