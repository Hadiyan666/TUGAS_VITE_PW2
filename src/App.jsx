import React from 'react';
import './App.css';

function App() {
  // 1. Variabel Perkenalan Diri
  const nama = "Muhammad Hadiyan Rakhmadi";
  const pekerjaan = "Mahasiswa";
  const tanggalLahir = new Date("2004-03-01"); // Format: YYYY-MM-DD (Contoh: Scorpio)

  // Format tanggal untuk ditampilkan di UI
  const opsiTanggal = { year: 'numeric', month: 'long', day: 'numeric' };
  const tanggalFormatted = tanggalLahir.toLocaleDateString('id-ID', opsiTanggal);

  // 3. Array Film Favorit
  const filmFavorit = [
    { id: 1, judul: "Demon Slayer : Infinity Castle Arc", genre: "Anime", tahun: 2025 },
    { id: 2, judul: "Anohana: The Flower We Saw That Day", genre: "Anime", tahun: 2011 },
    { id: 3, status: "Weathering with You", genre: "Anime", tahun: 2019 }
  ];

  // 2. Function untuk Mengecek Zodiak
  const cekZodiac = () => {
    const bulan = tanggalLahir.getMonth() + 1; // getMonth() dimulai dari 0
    const hari = tanggalLahir.getDate();
    let zodiac = "";

    if ((bulan === 3 && hari >= 21) || (bulan === 4 && hari <= 19)) zodiac = "Aries";
    else if ((bulan === 4 && hari >= 20) || (bulan === 5 && hari <= 20)) zodiac = "Taurus";
    else if ((bulan === 5 && hari >= 21) || (bulan === 6 && hari <= 20)) zodiac = "Gemini";
    else if ((bulan === 6 && hari >= 21) || (bulan === 7 && hari <= 22)) zodiac = "Cancer";
    else if ((bulan === 7 && hari >= 23) || (bulan === 8 && hari <= 22)) zodiac = "Leo";
    else if ((bulan === 8 && hari >= 23) || (bulan === 9 && hari <= 22)) zodiac = "Virgo";
    else if ((bulan === 9 && hari >= 23) || (bulan === 10 && hari <= 22)) zodiac = "Libra";
    else if ((bulan === 10 && hari >= 23) || (bulan === 11 && hari <= 21)) zodiac = "Scorpio";
    else if ((bulan === 11 && hari >= 22) || (bulan === 12 && hari <= 21)) zodiac = "Sagittarius";
    else if ((bulan === 12 && hari >= 22) || (bulan === 1 && hari <= 19)) zodiac = "Capricorn";
    else if ((bulan === 1 && hari >= 20) || (bulan === 2 && hari <= 18)) zodiac = "Aquarius";
    else if ((bulan === 2 && hari >= 19) || (bulan === 3 && hari <= 20)) zodiac = "Pisces";
    
    alert(`Halo ${nama}! Berdasarkan tanggal lahirmu (${tanggalFormatted}), Zodiak kamu adalah: ${zodiac}`);
  };

  return (
    <div className="container">
      <div className="profile-card">
        {/* Avatar Placeholder */}
        <div className="avatar">
          {nama.split(" ").map(n => n[0]).join("")}
        </div>

        {/* Bagian Perkenalan Diri */}
        <h1 className="name">{nama}</h1>
        <p className="job">{pekerjaan}</p>
        
        <div className="info-section">
          <p><strong>Tanggal Lahir:</strong> {tanggalFormatted}</p>
        </div>

        {/* Tombol Cek Zodiak */}
        <button className="btn-zodiac" onClick={cekZodiac}>
        Cek Zodiak Saya
        </button>

        <hr className="divider" />

        {/* Bagian Film Favorit */}
        <div className="movies-section">
          <h3>3 Film Favorit</h3>
          <ul className="movie-list">
            {filmFavorit.map((film) => (
              <li key={film.id} className="movie-item">
                <span className="movie-title">{film.judul || film.status}</span>
                <span className="movie-meta">{film.genre} • {film.tahun}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;