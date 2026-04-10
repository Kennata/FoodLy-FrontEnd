import { useState } from "react";
import { Mail, Lock, Phone } from "lucide-react";
import BgLogin from "../assets/BgLogin.jpg";
import FoodlyLogoIcon from "../assets/FoodlyLoginIcon.svg";
import { InputGroup } from "../components/Auth/InputGroup";
import { AuthTabs } from "../components/Auth/AuthTabs";
import { SocialLogin } from "../components/Auth/SocialLogin";

export default function LoginPage() {
    const [loginMethod, setLoginMethod] = useState('email');

    return (
        <div className="bg-custom-color min-vh-100 overflow-hidden">
            <div className="container-fluid p-0">
                <div className="row g-0 min-vh-100 flex-nowrap">
                    
                    {/* SISI KIRI (Image) */}
                    <div className="col-6 d-none d-md-block" style={{ backgroundImage: `url(${BgLogin})`, backgroundSize: 'cover' }} />

                    {/* SISI KANAN (Form) */}
                    <div className="col-md-6 d-flex p-0">
                        <div className="col d-flex flex-column align-items-center bg-white rounded-start-5 shadow-lg" style={{ zIndex: 1, marginLeft: '-80px', paddingLeft: '30px', minHeight: '100vh' }}>
                            
                            <div className="p-4 w-100" style={{ maxWidth: '450px', marginTop: '80px' }}>
                                {/* Logo & Brand */}
                                <div className="d-flex flex-column align-items-center gap-2 mb-4">
                                    <img src={FoodlyLogoIcon} alt="login" />
                                    <h2 className="fw-bold fs-2" style={{ background: 'linear-gradient(to right, #FF6900, #FB2C36)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontFamily: '"Sora", sans-serif' }}>Foodly</h2>
                                </div>

                                <AuthTabs activeMethod={loginMethod} onChange={setLoginMethod} />

                                <form className="d-flex flex-column gap-2">
                                    {loginMethod === 'email' ? (
                                        <InputGroup icon={Mail} type="email" placeholder="Email" />
                                    ) : (
                                        <InputGroup icon={Phone} type="tel" placeholder="Nomer HP" />
                                    )}
                                    <InputGroup icon={Lock} type="password" placeholder="Password" />
                                    
                                    <div className="text-end mb-3">
                                        <a href="#" className="text-decoration-none text-dark small fw-medium">Lupa password?</a>
                                    </div>

                                    <button type="submit" className="btn py-3 fw-bold text-white rounded-pill shadow-sm" style={{ background: 'linear-gradient(to right, #FF6900, #FB2C36)', border: 'none', fontFamily: '"Sora", sans-serif' }}>
                                        Continue
                                    </button>
                                </form>

                                <SocialLogin />

                                <div className="text-center mt-4">
                                    <span className="text-secondary small">
                                        Belum punya akun? <a href="#" className="text-decoration-none fw-bold" style={{ color: '#FF6900' }}>Daftar</a>
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}