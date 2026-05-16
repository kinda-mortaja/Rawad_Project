import NewsletterSection from '../components/sections/NewsletterSection'
import './AboutPage.css'
import asImg from '../assets/as.png' 


export default function AboutPage() {
  return (
    <>
      <section className="about section">
        <div className="about__inner container">

          <div className="about__content">
            <p className="section-label">من نحن ؟</p>
            <h1 className="about__title">
              <span className="about__highlight">منصة رواد</span>
            </h1>
            <p className="about__text">
                رواد هي منصة رقمية متكاملة تهدف إلى مساعدة الشركات الصغيرة
                والمتوسطة، ورواد الأعمال، ومدراء التسويق على بناء حضور رقمي قوي
                وفعّال. توفر المنصة خدمات تصميم وتطوير المواقع الإلكترونية،
                تطوير تطبيقات الجوال، إدارة صفحات السوشيال ميديا، إدارة الحملات
                الترويجية، وتحسين محركات البحث (SEO)، مع التركيز على تقديم نتائج
                ملموسة وقابلة للقياس.</p>
          </div>

          <div className="about__visual">
            <img
              src={asImg}
              alt="منصة رواد"
              className="about__img"
            />
          </div>
        </div>
      </section>

      <NewsletterSection />
    </>
  )
}