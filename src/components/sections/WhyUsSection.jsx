import './WhyUsSection.css'
import aboutImg from '../assets/about.png'

export default function WhyUsSection() {
  return (
    <section className="why section">
      <div className="why__inner container">

        <div className="why__content">
          <p className="section-label">لماذا نحن ؟</p>
          <h2 className="section-title">
            نقدم حلولاً مبتكرة و مؤثقة لتلبية<br />
            احتياجات عملك بكفاءة و جودة عالية !
          </h2>
          <p className="why__desc">
            شركتنا تبرز بفخر كوجهة مثالية لاحتياجاتك في مجالات التسويق الرقمي
            و انشاء المواقع الالكترونية و تطبيقات الهاتف النقال وإدارة صفحات
            السوشيال ميديا وإدراة الحملات الترويجية وتحسين محركات البحث!
          </p>
        </div>

        <div className="why__visual">
          <img
            src={aboutImg}
            alt="لماذا نحن"
            className="why__img"
          />
        </div>

      </div>
    </section>
  )
}