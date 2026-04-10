export const ListSection = ({ title, items, isStep = false }) => (
  <div className={isStep ? "" : "mb-5"}>
    <h5 className="fw-bold mb-4">{title}</h5>
    <div className="d-flex flex-column gap-3">
      {items.map((item, index) => (
        <div key={index} className={`d-flex gap-3 ${isStep ? 'align-items-start' : 'align-items-center'}`}>
          <div 
            className={`rounded-circle text-white d-flex justify-content-center align-items-center fw-medium ${isStep ? 'mt-1' : ''}`}
            style={{ backgroundColor: '#fd7e14', width: '28px', height: '28px', fontSize: '13px', flexShrink: 0 }}
          >
            {index + 1}
          </div>
          <span className="text-secondary">{item}</span>
        </div>
      ))}
    </div>
  </div>
);