// Tambahkan parameter { type } di sini
export const AuthTabs = ({ type }) => (
    <div className="d-flex justify-content-center mb-4 w-100">
        <div
            className="px-4 pb-2 fs-6 text-center w-100 border-bottom border-2 border-dark text-dark fw-bold"
            style={{ textTransform: 'capitalize' }}
        >
            {/* Teks akan berubah sesuai prop yang dikirim */}
            {type}
        </div>
    </div>
);