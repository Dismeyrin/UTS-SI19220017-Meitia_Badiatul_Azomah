import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Tombol from './komponen/atoms/tombol';
import Navbar from './komponen/Navbar';
import Hero from './komponen/Hero';
import Section1 from './komponen/Section';
import Footer from './komponen/Footer';

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Navbar />
      <Hero title="Selamat Datang di Dunia K-Drama!" desc="Halo, para pecinta K-Drama! 🌟 
      Selamat datang di KDramaLounge, tempat terbaik untuk mendapatkan informasi terbaru, ulasan,
       dan rekomendasi K-Drama favorit. Kami hadir untuk menemani perjalanan Anda menikmati drama-drama Korea yang penuh emosi,
        kisah cinta yang mendebarkan, persahabatan yang mengharukan, hingga konflik yang membuat penasaran." src="http://getwallpapers.com/wallpaper/full/7/5/4/232708.jpg" />
      <Section1 title="Viewer  Yang Telah Bergabung" desc="Jelaskan Deskripsi"></Section1>
      <Footer></Footer>
    </>

  );
}

export default App
