import { useState } from 'react'
import NewsletterSection from '../components/sections/NewsletterSection'
import ServiceCard from '../components/ui/ServiceCard'
import ServiceTag from '../components/ui/ServiceTag'
import './ServicesPage.css'

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
    images: [
      'src/assets/7.png',  'src/assets/8.png',  'src/assets/9.png',
      'src/assets/10.png', 'src/assets/11.png', 'src/assets/12.png',
    ],
  },
  {
    id: 'digital',
    tag: 'التسويق الاكتروني',
    title: 'التسويق الإلكتروني يضمن لمشروعك حضوراً قوياً ونتائج قابلة للقياس!',
    subtitle: 'التسويق الإلكتروني',
    images: [
      'src/assets/6.png', 'src/assets/5.png', 'src/assets/4.png',
      'src/assets/3.png', 'src/assets/2.png', 'src/assets/1.png',
    ],
  },
  {
    id: 'ads',
    tag: 'إدارة الحملات الترويجية',
    title: 'إدارة الحملات الترويجية تضمن استثمار ميزانيتك الإعلانية بأفضل النتائج!',
    subtitle: 'إدارة الحملات الترويجية',
    images: [
      'src/assets/13.png', 'src/assets/14.png', 'src/assets/15.png',
      'src/assets/16.png', 'src/assets/17.png', 'src/assets/18.png',
    ],
  },
  {
    id: 'web',
    tag: 'إنشاء المواقع الالكترونية',
    title: 'خدمة إنشاء المواقع الإلكترونية هي حجر الأساس لأي مشروع يسعى للنجاح في العالم الرقمي!',
    subtitle: 'إنشاء المواقع الإلكترونية',
    images: [
      'src/assets/19.png', 'src/assets/20.png', 'src/assets/21.png',
      'src/assets/22.png', 'src/assets/23.png', 'src/assets/24.png',
    ],
  },
  {
    id: 'seo',
    tag: 'تحسين محركات البحث SEO',
    title: 'خدمة SEO تضمن لموقعك الظهور في المكان الصحيح أمام الجمهور الصحيح!',
    subtitle: 'تحسين محركات البحث SEO',
    images: [
      'src/assets/25.png', 'src/assets/26.png', 'src/assets/27.png',
      'src/assets/29.png', 'src/assets/30.png', 'src/assets/28.png',
    ],
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