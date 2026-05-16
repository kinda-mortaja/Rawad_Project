import TestimonialCard from '../ui/TestimonialCard'
import './TestimonialsSection.css'

const testimonials = [
  {
    id: 1,
    text: '" تجربتي مع هذه الشركة كانت استثنائية بكل معنى الكلمة! خدماتهم في مجالات التسويق والتصميم تفوق كل التوقعات، وأنا فخورة بأنني اخترتهم لتحويل أفكاري إلى واقع رائع! "',
    name: 'سارة محمد',
    location: 'فلسطين، غزة',
    img: 'src/assets/sara.png',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="testimonials section">
      <div className="container">
        <p className="section-label">آراء عملائنا</p>
        <h2 className="section-title">
          إبداعنا في مجالاتنا يلهم الثقة، نحن<br />
          هنا لنبني مستقبلك الرقمي !
        </h2>

        <div className="testimonials__list">
          {testimonials.map(t => (
            <TestimonialCard key={t.id} {...t} />
          ))}
        </div>
      </div>
    </section>
  )
}