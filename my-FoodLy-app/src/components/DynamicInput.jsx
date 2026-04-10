// src/components/Form/DynamicInput.jsx
export default function DynamicInput({ label, items, onAdd, isTextArea, showNumber, placeholder }) {
  const primaryColor = '#f26835';

  return (
    <div className="mb-4">
      <label className="form-label fw-bold">{label} *</label>
      {items.map((_, index) => (
        <div className="d-flex gap-3 mb-2" key={index}>
          {showNumber && (
            <div 
              className="text-white d-flex align-items-center justify-content-center rounded-2 flex-shrink-0" 
              style={{ width: '42px', height: '42px', backgroundColor: primaryColor }}
            >
              {index + 1}
            </div>
          )}
          
          {isTextArea ? (
            <textarea 
              className="form-control bg-light border-0 py-2 rounded-3" 
              rows="2" 
              placeholder={`${placeholder} ${index + 1}`}
            ></textarea>
          ) : (
            <input 
              type="text" 
              className="form-control bg-light border-0 py-2 rounded-3" 
              placeholder={`${placeholder} ${index + 1}`} 
            />
          )}
        </div>
      ))}
      
      <button 
        type="button" 
        className="btn btn-outline-secondary w-100 mt-2 py-2 rounded-3 text-dark border-light-subtle"
        onClick={onAdd}
      >
        <i className="bi bi-plus"></i> Tambah {label.split('-')[0]}
      </button>
    </div>
  );
}