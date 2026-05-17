import { Link } from 'react-router-dom'
import './HeroSection.css'
import heroImg from '../../assets/hero.png'


export default function HeroSection() {
  return (
    <section className="hero">
      {/* Decorative blobs */}
      <span className="hero__blob hero__blob--1" />
      <span className="hero__blob hero__blob--2" />

      <div className="hero__inner container">

        <div className="hero__visual">
          <img
            src= {heroImg}  // ← استخدم المتغير
            alt="فريق العمل"
            className="hero__img"
          />
        </div>

        <div className="hero__content">
          <p className="section-label">منصة رواد</p>
          <h1 className="hero__title">
            نجمع بين قوة الابتكار والتكنولوجيا لنقدم حلولاً رقمية متكاملة
            نتمتع بفريق عمل متخصص ومؤهل لنكون <br /> جناحك التقني !

          </h1>
          <p className="hero__desc">
          </p>
          <div className="hero__actions">
            <Link to="/contact" className="btn-dark">انضم الينا!</Link>
          </div>
        </div>

        
      </div>
    </section>
  )
}