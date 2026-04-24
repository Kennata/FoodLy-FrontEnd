export default function InputGroup(props){
    // Ambil icon dan simpan ke variabel dengan huruf kapital (Wajib untuk JSX)
    const { icon: Icon, ...rest } = props;

    return (
        <div className="position-relative mb-3">
            {/* Pastikan Icon tidak null sebelum dipanggil */}
            {Icon && (
                <Icon
                    className="position-absolute top-50 translate-middle-y ms-3 text-secondary"
                    size={20}
                    strokeWidth={1.5}
                />
            )}
            <input
                {...rest}
                className="form-control py-3 ps-5 rounded-pill border-light-subtle shadow-sm"
                style={{ fontSize: '0.9rem', fontFamily: '"Sora", sans-serif' }}
            />
        </div>
    );
};