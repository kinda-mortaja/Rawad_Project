import HeroSection         from '../components/sections/HeroSection'
import ServiceCard         from '../components/ui/ServiceCard'
import WhyUsSection        from '../components/sections/WhyUsSection'
import TestimonialsSection from '../components/sections/TestimonialsSection'
import NewsletterSection   from '../components/sections/NewsletterSection'
import './HomePage.css'

const homeCards = [
  { num:'01', title:'تصميم شعارات',  desc:'الشعار الجيد يجذب العملاء، صمم الشعار الخاص بك بطريقة عصرية وجذابة.' },
  { num:'02', title:'تصميم إعلانات', desc:'الإعلان الجيد يجذب عملاء جدد، صممه بطريقة عصرية وجذابة.' },
  { num:'03', title:'تصميم مواقع',   desc:'الفكرة التي تنمو إلى أساس جديد يجذب العملاء و يرسخهم.' },
]

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <section className="home-services-intro">
        <div className="container">
          <p className="section-label">خدماتنا</p>
          <h2 className="section-title">
            يحتاج مشروعك الناشئ تصميم جيد<br />
            ليجذب المستخدمين !
          </h2>
        </div>
      </section>

      <section className="home-services-banner">
        <div className="container">
          <div className="home-services__cards">
            {homeCards.map(c => <ServiceCard key={c.num} {...c} />)}
          </div>
        </div>
      </section>

      <WhyUsSection />
      <TestimonialsSection />
      <NewsletterSection />
    </>
  )
}