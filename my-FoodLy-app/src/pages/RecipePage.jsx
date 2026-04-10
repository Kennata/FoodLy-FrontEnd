import React, { useState } from 'react';
import InputGroup from '../components/InputGroup';
import DynamicInput from '../components/DynamicInput';

export default function RecipePage() {
  const [ingredients, setIngredients] = useState(['']);
  const [steps, setSteps] = useState(['']);
  const primaryColor = '#f26835';

  return (
    <div className="bg-light min-vh-100 py-4">
      <div className="container" style={{ maxWidth: '800px' }}>
        
        {/* Tombol Kembali Tetap di Sini */}
        <div className="mb-3">
          <button className="btn btn-link text-dark text-decoration-none px-0 fw-semibold d-flex align-items-center gap-2">
            <i className="bi bi-arrow-left"></i> Kembali
          </button>
        </div>

        <div className="card shadow-sm border-0 rounded-4">
          <div className="card-body p-4 p-md-5">
            <h2 className="fw-bold mb-4">Buat Resep Baru</h2>

            <form>
              <InputGroup label="Judul Resep" placeholder="Contoh: Nasi Goreng Spesial" />
              
              <InputGroup 
                label="URL Gambar" 
                type="url" 
                icon="bi-image" 
                placeholder="https://example.com/image.jpg" 
              />

              <InputGroup label="Jumlah Kalori" type="number" placeholder="Contoh: 450" />

              <DynamicInput 
                label="Bahan-Bahan" 
                items={ingredients} 
                onAdd={() => setIngredients([...ingredients, ''])} 
                placeholder="Bahan" 
              />

              <DynamicInput 
                label="Cara Membuat" 
                items={steps} 
                onAdd={() => setSteps([...steps, ''])} 
                placeholder="Langkah" 
                isTextArea 
                showNumber 
              />

              {/* Action Buttons */}
              <div className="row g-3">
                <div className="col-12 col-md-5">
                  <button type="button" className="btn btn-outline-secondary w-100 py-2 rounded-3 text-dark">Batal</button>
                </div>
                <div className="col-12 col-md-7">
                  <button type="submit" className="btn w-100 py-2 rounded-3 text-white fw-bold" style={{ backgroundColor: primaryColor }}>
                    Buat Resep
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}