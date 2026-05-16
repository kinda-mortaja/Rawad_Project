import { useState } from 'react'
import './ServicesSection.css'

const services = [
  {
    id: 1,
    tag: 'التسويق الاكتروني',
    num: '01',
    title: 'التسويق الإلكتروني',
    desc: 'التسويق الإلكتروني يضمن لمشروعك حضوراً قوياً ونتائج قابلة للقياس.',
  },
  {
    id: 2,
    tag: 'إدارة صفحات سوشيال ميديا',
    num: '02',
    title: 'إدارة السوشيال ميديا',
    desc: 'تصاميم السوشيال ميديا المميزة سبب في جذب المتابعين لمنتجاتك!',
  },
  {
    id: 3,
    tag: 'إدارة الحملات الترويجية',
    num: '03',
    title: 'الحملات الترويجية',
    desc: 'إدارة الحملات الترويجية تضمن استثمار ميزانيتك الإعلانية بأفضل النتائج!',
  },
  {
    id: 4,
    tag: 'إنشاء المواقع الالكترونية',
    num: '04',
    title: 'إنشاء المواقع',
    desc: 'خدمة إنشاء المواقع الإلكترونية هي حجر الأساس لأي مشروع يسعى للنجاح.',
  },
  {
    id: 5,
    tag: 'تحسين محركات البحث SEO',
    num: '05',
    title: 'تحسين محركات البحث SEO',
    desc: 'خدمة SEO تضمن لموقعك الظهور في المكان الصحيح أمام الجمهور الصحي!',
  },
]

export default function ServicesSection() {
  const [active, setActive] = useState(1)

  return (
    <section className="services-sec section">
      <div className="container">
        <p className="section-label">خدماتنا</p>
        <h2 className="section-title">
          تفقد خدماتنا المميزة و الرائدة في مجال<br />
          التسويق الرقمي !
        </h2>

        {/* Tags */}
        <div className="services-sec__tags">
          {services.map(s => (
            <button
              key={s.id}
              className={`services-sec__tag ${active === s.id ? 'active' : ''}`}
              onClick={() => setActive(s.id)}
            >
              {s.tag}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}