import './ServiceTag.css'

export default function ServiceTag({ label, active = false, onClick, fullWidth = false }) {
  return (
    <button
      className={`service-tag ${active ? 'service-tag--active' : ''} ${fullWidth ? 'service-tag--full' : ''}`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}