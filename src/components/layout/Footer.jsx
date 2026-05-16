import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">

        {/* Brand */}
        <div className="footer__brand">
          <p className="footer__logo">رواد</p>
          <p className="footer__desc">
            نجمع بين قوة الابتكار والتكنولوجيا لنقدم حلولاً رقمية متكاملة.
            نتمتع بفريق عمل متخصص ومؤهل لنكون جناحك التقني !
          </p>
          <div className="footer__socials">
            <a href="https://wa.me/97259208937" target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="" />
            </a>
            <a href="#" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            <a href="mailto:qasembahaa2003@gmail.com" aria-label="Email">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Pages */}
        <div className="footer__col">
          <h4 className="footer__col-title">الصفحات</h4>
          <ul>
            <li><Link to="/">الرئيسية</Link></li>
            <li><Link to="/services">خدماتنا</Link></li>
            <li><Link to="/contact">تواصل معنا</Link></li>
            <li><Link to="/about">من نحن</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div className="footer__col">
          <h4 className="footer__col-title">الشركة</h4>
          <ul>
            <li><a href="#">سياسة الخصوصية</a></li>
            <li><a href="#">البنود و الظروف</a></li>
          </ul>

          <h4 className="footer__col-title" style={{marginTop: '28px'}}>مجتمعنا</h4>
          <ul>
            <li><a href="#">مساعدة</a></li>
            <li><Link to="/contact">الاستشارات المجانية</Link></li>
            <li><a href="mailto:qasembahaa2003@gmail.com">البريد الالكتروني</a></li>
          </ul>
        </div>

      </div>
    </footer>
  )
}