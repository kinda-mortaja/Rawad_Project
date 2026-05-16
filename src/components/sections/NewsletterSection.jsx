import { useState } from 'react'
import './NewsletterSection.css'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')

  return (
    <section className="newsletter">
      <div className="newsletter__inner container">
        <h2 className="newsletter__title">هل تريد ان تصلك عروضنا ؟</h2>
        <div className="newsletter__form">
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="البريد الالكتروني"
            className="newsletter__input"
          />
        <button className="btn-dark">انضم الينا</button>

        </div>
      </div>
    </section>
  )
}