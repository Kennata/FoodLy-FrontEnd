// src/components/Form/InputGroup.jsx
export default function InputGroup({ label, icon, ...props }) {
  return (
    <div className="mb-4">
      <label className="form-label fw-bold">{label} *</label>
      <div className="input-group">
        {icon && (
          <span className="input-group-text bg-light border-0 rounded-start-3 text-muted">
            <i className={`bi ${icon}`}></i>
          </span>
        )}
        <input 
          {...props} 
          className={`form-control bg-light border-0 py-2 ${icon ? 'rounded-end-3' : 'rounded-3'}`} 
        />
      </div>
    </div>
  );
}
