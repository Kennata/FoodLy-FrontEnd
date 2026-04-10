export const AuthTabs = ({ activeMethod, onChange }) => (
    <div className="d-flex justify-content-between gap-4 mb-4 w-100">
        {['email', 'phone'].map((method) => (
            <div
                key={method}
                onClick={() => onChange(method)}
                className={`px-4 pb-2 fs-6 text-center w-50 ${activeMethod === method ? 'border-bottom border-2 border-dark text-dark' : 'text-secondary'}`}
                style={{ cursor: 'pointer', minWidth: '120px', textTransform: 'capitalize' }}
            >
                {method === 'email' ? 'E-mail' : 'Nomer HP'}
            </div>
        ))}
    </div>
);