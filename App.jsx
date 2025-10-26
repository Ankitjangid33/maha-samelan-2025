import React from "react";
import Header from "./components/Header";
import SpeakersCarousel from "./components/SpeakersCarousel";
import Speakers from "./components/Speakers";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <Header />

      <main>
        {/* Speakers Carousel */}
        <SpeakersCarousel />

        {/* All Speakers */}
        <Speakers />
      </main>

      <Footer />
    </div>
  );
};

export default App;
