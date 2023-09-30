import "./Modal.css"

export default function Modal({show, onClose, children}) {
  if (!show) return null

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('modal')) return;
    onClose()
  }

  return (
    <div className="modal-overlay" onClick={handleBackdropClick}>
      <div className="modal">
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  )
}
