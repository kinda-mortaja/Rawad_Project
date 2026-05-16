import { useState } from 'react'
import './ContactPage.css'
import pinIcon from '../assets/pin.png' 
import phoneIcon from '../assets/phone.png'
import mailIcon from '../assets/mail.png'


export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value })
  const submit  = e => { e.preventDefault(); alert('تم إرسال رسالتك بنجاح!') }

  return (
    <section className="contact section">
      <div className="container">
        <div className="contact__box">
          {/* Form side */}
          <div className="contact__right">
            <h1 className="contact__title">تواصل معنا !</h1>
            <p className="contact__sub">
              نحن هنا لمساعدتك، فلا تتردد في التواصل و الاستفسار !
            </p>

            <form className="contact__form" onSubmit={submit}>
              <input
                name="name"
                value={form.name}
                onChange={handle}
                type="text"
                placeholder="أدخل اسمك من فضلك"
                className="contact__input"
                required
              />
              <input
                name="email"
                value={form.email}
                onChange={handle}
                type="email"
                placeholder="أدخل البريد الإلكتروني"
                className="contact__input"
                required
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handle}
                placeholder="أكتب رسالتك..."
                className="contact__textarea"
                rows={5}
                required
              />
              <button type="submit" className="btn-dark contact__submit">
                أرسل
              </button>
            </form>
          </div>

          {/* Map side */}
          <div className="contact__left">
            <div className="contact__map">
              <iframe
                title="Gaza Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108765.72440489!2d34.37!3d31.52!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502781a0c39ec2f%3A0x8ac4215fdf1d0af8!2sGaza!5e0!3m2!1sen!2s!4v1680000000000"
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="contact__info">
              <div className="contact__info-item">
                <span className="contact__info-icon">
                <img src={pinIcon} alt="location" />
                </span>
                <span>فلسطين، غزة</span>
              </div>
              <div className="contact__info-item">
                <span className="contact__info-icon">
                  <img src={phoneIcon} alt="phone" />
                </span>
                <span dir="ltr">+972 59-208-9037</span>
              </div>
              <div className="contact__info-item">
                <span className="contact__info-icon">
                  <img src={mailIcon} alt="email" />
                </span>
                <span>qasembahaa2003@gmail.com</span>
              </div>
            </div>
          </div>

          

        </div>
      </div>
    </section>
  )
}