import {useState} from "react";
import BgLogin from "../assets/BgLogin.jpg";
import FoodlyLogoIcon from "../assets/FoodlyLoginIcon.svg";

export default function LoginPage() {
  const [loginMethod, setLoginMethod] = useState('email');

  return (
    <div className="bg-custom-color min-vh-100 overflow-hidden">
      <div className="container-fluid p-0">
        <div className="row g-0 min-vh-100 flex-nowrap">
          
          {/* SISI KIRI */}
          <div 
            className="col-6 d-none d-md-block" 
            style={{
              backgroundImage: `url(${BgLogin})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
          </div>

          {/* SISI KANAN */}
            <div className="col-md-6 d-flex p-0">
                <div 
                    className="col d-flex flex-column align-items-center  bg-white rounded-start-5 shadow-lg"
                    style={{ 
                    zIndex: 1, 
                    marginLeft: '-80px', // Menarik kotak putih ke kiri menimpa gambar
                    paddingLeft: '30px', // Menyeimbangkan konten agar tetap di tengah
                    minHeight: '100vh'
                    }}
                >
                    {/* Wrapper konten */}
                    <div className="p-4 w-100 mt-5" style={{ maxWidth: '450px' }}>
                    <div className="d-flex flex-column align-items-center gap-2 mb-4">
                        <img src={FoodlyLogoIcon} alt="login" />
                        <p className="h4 pb-2 fs-2 fw-bold"
                            style={{
                                background: 'linear-gradient(to right, #FF6900, #FB2C36)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                color: 'transparent'
                            }}>Foodly
                        </p>
                    </div>

                    <div className="d-flex justify-content-between gap-4 mb-4 w-100">
  
                        {/* Tab E-mail */}
                        <div 
                            onClick={() => setLoginMethod('email')}
                            className={`px-4 pb-2 fs-6 text-center w-50 ${loginMethod === 'email' ? 'border-bottom border-2 border-dark text-dark' : 'text-secondary'}`}
                            style={{ cursor: 'pointer', minWidth: '120px' }}
                        >
                            E-mail
                        </div>

                        {/* Tab Nomer HP */}
                        <div 
                            onClick={() => setLoginMethod('phone')}
                            className={`px-4 pb-2 fs-6 text-center w-50 ${loginMethod === 'phone' ? 'border-bottom border-2 border-dark text-dark' : 'text-secondary'}`}
                            style={{ cursor: 'pointer', minWidth: '120px' }}
                        >
                            Nomer HP
                        </div>

                    </div>

                    <form className="d-flex flex-column gap-3">
                        <input type="email" className="form-control py-3" placeholder="Email" />
                        <input type="password" className="form-control py-3" placeholder="Password" />
                        <button type="submit" className="btn btn-primary py-2 mt-3 fw-bold">Login</button>
                    </form>
                </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
}