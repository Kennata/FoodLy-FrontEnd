import { FcGoogle } from "react-icons/fc";

export const SocialLogin = () => (
    <>
        <div className="text-center mt-5 mb-4 text-secondary small fs-6">
            Masuk dengan
        </div>
        <div className="d-flex justify-content-center gap-3">
            <button
                type="button"
                className="btn border rounded-circle shadow-sm d-flex align-items-center justify-content-center"
                style={{ width: '50px', height: '50px', backgroundColor: '#ffffff' }}
            >
                <FcGoogle size={28} />
            </button>
        </div>
    </>
);