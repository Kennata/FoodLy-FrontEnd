import React from 'react';
import { BsArrowLeft, BsPerson, BsHeartFill, BsCalendar3 } from 'react-icons/bs';
import { FaFire } from 'react-icons/fa';
import { ListSection } from '../components/ListSection';
import { RecipeBadge } from '../components/RecipeBadge';

export default function DetailRecipePage() {
  const bahanBahan = ["500g ayam", "Kunyit", "Jahe", "Serai", "Daun jeruk", "Bawang merah", "Bawang putih"];
  const caraMembuat = ["Rebus ayam hingga empuk", "Tumis bumbu halus", "Campurkan ke kuah kaldu", "Masak hingga harum", "Sajikan dengan pelengkap"];

  return (
    <div className="bg-light min-vh-100 py-4">
      <div className="container" style={{ maxWidth: '900px' }}>
        
        <button className="btn btn-link text-decoration-none text-dark fw-medium mb-3 d-flex align-items-center gap-2 px-0">
          <BsArrowLeft size={20} /> Kembali
        </button>

        <div className="card border-0 shadow-sm rounded-4 mb-5">
          <div className="card-body p-4 p-md-5">
            
            <img src="https://images.unsplash.com/..." alt="Soto" className="w-100 rounded-4 mb-4" style={{ height: '350px', objectFit: 'cover' }} />

            <h2 className="fw-bold mb-2">Soto Ayam</h2>
            <div className="text-secondary d-flex align-items-center gap-2 mb-4">
              <BsPerson size={18} /> <span>oleh mama_siti</span>
            </div>

            <div className="d-flex flex-wrap align-items-center gap-4 text-secondary mb-4 small">
              <RecipeBadge icon={FaFire} text="320 kalori" colorClass="text-warning" />
              <RecipeBadge icon={BsHeartFill} text="204 like" colorClass="text-danger" />
              <RecipeBadge icon={BsCalendar3} text="30 Maret 2026" />
            </div>

            <button className="btn btn-danger rounded-pill px-3 py-1 mb-4" style={{ fontSize: '14px', backgroundColor: '#FF4D4F', border: 'none' }}>
              <BsHeartFill size={14} /> Tidak Suka
            </button>

            <div className="mb-4">
              <h5 className="fw-bold mb-3">Deskripsi</h5>
              <p className="text-secondary">Soto ayam kuah kuning yang segar dan hangat</p>
            </div>

            <ListSection title="Bahan-Bahan" items={bahanBahan} />
            
            <ListSection title="Cara Membuat" items={caraMembuat} isStep={true} />

          </div>
        </div>
      </div>
    </div>
  );
}