import { useState } from 'react'
import NewsletterSection from '../components/sections/NewsletterSection'
import ServiceCard from '../components/ui/ServiceCard'
import ServiceTag from '../components/ui/ServiceTag'
import './ServicesPage.css'
import img1  from '../assets/1.png'
import img2  from '../assets/2.png'
import img3  from '../assets/3.png'
import img4  from '../assets/4.png'
import img5  from '../assets/5.png'
import img6  from '../assets/6.png'
import img7  from '../assets/7.png'
import img8  from '../assets/8.png'
import img9  from '../assets/9.png'
import img10 from '../assets/10.png'
import img11 from '../assets/11.png'
import img12 from '../assets/12.png'
import img13 from '../assets/13.png'
import img14 from '../assets/14.png'
import img15 from '../assets/15.png'
import img16 from '../assets/16.png'
import img17 from '../assets/17.png'
import img18 from '../assets/18.png'
import img19 from '../assets/19.png'
import img20 from '../assets/20.png'
import img21 from '../assets/21.png'
import img22 from '../assets/22.png'
import img23 from '../assets/23.png'
import img24 from '../assets/24.png'
import img25 from '../assets/25.png'
import img26 from '../assets/26.png'
import img27 from '../assets/27.png'
import img28 from '../assets/28.png'
import img29 from '../assets/29.png'
import img30 from '../assets/30.png'

const bannerCards = [
  { num: '01', title: 'تحسين محركات البحث SEO', desc: 'نرفع ظهور موقعك في نتائج البحث، لزيادة الزيارات وتحقيق نمو مستدام.' },
  { num: '02', title: 'إدارة الحملات الإعلانية', desc: 'نخطط وننفذ حملات إعلانية مدروسة، تصل إلى جمهورك المستهدف.' },
  { num: '03', title: 'إدارة حسابات التواصل', desc: 'نصنع محتوى جذاب يعكس هوية علامتك التجارية، ونّدير حساباتك باحتراف.' },
]

const services = [
  {
    id: 'social',
    tag: 'إدارة صفحات سوشيال ميديا',
    title: 'تصاميم السوشيال ميديا المميزة سبب في جذب المتابعين لمنتجاتك!',
    subtitle: 'إدارة صفحات السوشيال ميديا',
    images: [img7, img8, img9, img10, img11, img12],
  },
  {
    id: 'digital',
    tag: 'التسويق الاكتروني',
    title: 'التسويق الإلكتروني يضمن لمشروعك حضوراً قوياً ونتائج قابلة للقياس!',
    subtitle: 'التسويق الإلكتروني',
    images: [img6, img5, img4, img3, img2, img1],
  },
  {
    id: 'ads',
    tag: 'إدارة الحملات الترويجية',
    title: 'إدارة الحملات الترويجية تضمن استثمار ميزانيتك الإعلانية بأفضل النتائج!',
    subtitle: 'إدارة الحملات الترويجية',
    images: [img13, img14, img15, img16, img17, img18],
  },
  {
    id: 'web',
    tag: 'إنشاء المواقع الالكترونية',
    title: 'خدمة إنشاء المواقع الإلكترونية هي حجر الأساس لأي مشروع يسعى للنجاح!',
    subtitle: 'إنشاء المواقع الإلكترونية',
    images: [img19, img20, img21, img22, img23, img24],
  },
  {
    id: 'seo',
    tag: 'تحسين محركات البحث SEO',
    title: 'خدمة SEO تضمن لموقعك الظهور في المكان الصحيح أمام الجمهور الصحيح!',
    subtitle: 'تحسين محركات البحث SEO',
    images: [img25, img26, img27, img29, img30, img28],
  },
]

export default function ServicesPage() {
  const [active, setActive] = useState('social')
  const current = services.find(s => s.id === active)

  return (
    <>
      <div className="srvpage">

        <div className="srvpage__tags-wrap section">
          <div className="container">

            <p className="section-label">خدماتنا</p>
            <h2 className="section-title">
              تفقد خدماتنا المميزة و الرائدة في مجال<br />
              التسويق الرقمي !
            </h2>

            <div className="srvpage__tags">
              {services.map(s => (
                <ServiceTag
                  key={s.id}
                  label={s.tag}
                  active={active === s.id}
                  onClick={() => setActive(s.id)}
                  fullWidth={s.id === 'seo'}
                />
              ))}
            </div>

            <div className="srvpage__header">
              <span className="section-label">{current.subtitle}</span>
              <h1 className="srvpage__title">{current.title}</h1>
            </div>

            <div className="srvpage__gallery">
              {current.images.map((img, i) => (
                <div key={i} className="srvpage__gallery-item">
                  <img src={img} alt="" />
                </div>
              ))}
            </div>

          </div> 
        </div>   

        <section className="srvpage-bottom-section">
          <div className="container">
            <div className="srvpage__banner-header">
              <p className="section-label">خدماتنا</p>
              <h2 className="section-title">
                يحتاج مشروعك الجديد إلى تسويق جيد<br />
                ليصبح من مجرد فكرة إلى بداية مشرقة !
              </h2>
            </div>
          </div>

          <div className="srvpage-green-banner">
            <div className="container">
              <div className="home-services__cards">
                {bannerCards.map(c => (
                  <ServiceCard key={c.num} {...c} />
                ))}
              </div>
            </div>
          </div>
        </section>

      </div>

      <NewsletterSection />
    </>
  )
}