// src/pages/RecipePage.jsx
import React, { useState } from 'react';
import InputGroup from '../components/InputGroup';
import DynamicInput from '../components/DynamicInput';

export default function RecipePage() {
  // State untuk field biasa
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [calories, setCalories] = useState('');

  // State untuk dynamic field (Array)
  const [ingredients, setIngredients] = useState(['']);
  const [steps, setSteps] = useState(['']);
  
  const primaryColor = '#f26835';

  // Fungsi untuk mengupdate satu item di dalam array ingredients
  const handleIngredientChange = (index, value) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = value;
    setIngredients(newIngredients);
  };

  // Fungsi untuk mengupdate satu item di dalam array steps
  const handleStepChange = (index, value) => {
    const newSteps = [...steps];
    newSteps[index] = value;
    setSteps(newSteps);
  };

  // Fungsi saat tombol submit ditekan
  const handleSubmit = async (e) => {
  e.preventDefault();

  // Ambil token tepat sebelum fetch
  const savedToken = localStorage.getItem('token'); 
  
  if (!savedToken) {
    alert("Token tidak ditemukan. Silakan login ulang.");
    return;
  }

  const payload = {
    title,
    description,
    ingredients: ingredients.filter(i => i.trim() !== '').join(', '),
    steps: steps.filter(s => s.trim() !== '').map((s, i) => `${i + 1}. ${s}`).join('\n'),
    image_url: imageUrl,
    calories: parseInt(calories)
  };

  try {
    const response = await fetch('http://127.0.0.1:8000/api/recipes', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${savedToken}` // Pastikan variabelnya benar
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();

    if (response.ok) {
      alert('Resep berhasil dibuat!');
    } else {
      console.error("Backend Error Detail:", data);
      alert(`Gagal: ${data.message || 'Cek konsol'}`);
    }
  } catch (error) {
    console.error("Network Error:", error);
  }
};

  return (
    <div className="bg-light min-vh-100 py-4">
      <div className="container" style={{ maxWidth: '800px' }}>
        
        <div className="mb-3">
          <button className="btn btn-link text-dark text-decoration-none px-0 fw-semibold d-flex align-items-center gap-2">
            <i className="bi bi-arrow-left"></i> Kembali
          </button>
        </div>

        <div className="card shadow-sm border-0 rounded-4">
          <div className="card-body p-4 p-md-5">
            <h2 className="fw-bold mb-4">Buat Resep Baru</h2>

            <form onSubmit={handleSubmit}>
              <InputGroup 
                label="Judul Resep" 
                placeholder="Contoh: Nasi Goreng Spesial" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />

              <InputGroup 
                label="Deskripsi" 
                placeholder="Deskripsi singkat resep ini..." 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
              
              <InputGroup 
                label="URL Gambar" 
                type="url" 
                icon="bi-image" 
                placeholder="https://example.com/image.jpg" 
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                required
              />

              <InputGroup 
                label="Jumlah Kalori" 
                type="number" 
                placeholder="Contoh: 450" 
                value={calories}
                onChange={(e) => setCalories(e.target.value)}
                required
              />

              <DynamicInput 
                label="Bahan-Bahan" 
                items={ingredients} 
                onAdd={() => setIngredients([...ingredients, ''])} 
                onChangeItem={handleIngredientChange}
                placeholder="Bahan" 
              />

              <DynamicInput 
                label="Cara Membuat" 
                items={steps} 
                onAdd={() => setSteps([...steps, ''])} 
                onChangeItem={handleStepChange}
                placeholder="Langkah" 
                isTextArea 
                showNumber 
              />

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