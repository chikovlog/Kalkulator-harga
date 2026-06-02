import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [kode, setKode] = useState('');
  const [hasil, setHasil] = useState('');
  const [harga, setHarga] = useState('');

  const peta = {
    C: '1', I: '2', N: '3', T: '4', A: '5',
    R: '6', O: '7', S: '8', U: '9', L: '0'
  };

  const konversi = (input) => {
    const upperInput = input.toUpperCase();
    setKode(upperInput);

    let result = '';
    for (let i = 0; i < upperInput.length; i++) {
      if (peta[upperInput[i]]) {
        result += peta[upperInput[i]];
      }
    }

    setHasil(result || '-');

    if (result) {
      const hargaRp = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
      }).format(Number(result) * 1000);
      setHarga(hargaRp);
    } else {
      setHarga('-');
    }
  };

  return (
    <div className="app">
      <div className="card">
        <h2>Kalkulator Kode Harga</h2>
        <p><b>CINTAROSUL = 1234567890</b></p>
        <input
          type="text"
          placeholder="Contoh: TAO"
          value={kode}
          onChange={(e) => konversi(e.target.value)}
        />
        <div className="hasil">
          <div className="angka">{hasil}</div>
          <div className="harga">{harga}</div>
        </div>
        <small>Ketik 2 atau 3 huruf, hasil langsung muncul otomatis.</small>
      </div>
    </div>
  );
};

export default App;
