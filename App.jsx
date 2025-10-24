import React from "react";
import Header from "./components/Header";
import ImageCarousel from "./components/ImageCarousel";
import EventPoster from "./components/EventPoster";
import Speakers from "./components/Speakers";
import EventAreas from "./components/EventAreas";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  // Event Gallery Images
  const eventGalleryImages = [
    {
      src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Youth Leadership Conference",
    },
    {
      src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2049&q=80",
      alt: "Workshop Session",
    },
    {
      src: "https://images.unsplash.com/photo-1559223607-b4d0555ae227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Networking Event",
    },
    {
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Team Building Activity",
    },
  ];

  // Speaker Highlights Images
  const speakerImages = [
    {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Alex Smith - Tech Entrepreneur",
    },
    {
      src: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2087&q=80",
      alt: "Maria Johnson - Youth Advocate",
    },
    {
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Raj Patel - Startup Mentor",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <Header />

      <main className="container mx-auto px-6 py-12">
        {/* Event Gallery Carousel */}
        <section className="mb-16">
          <h3 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Event Gallery
          </h3>
          <ImageCarousel images={eventGalleryImages} />
        </section>

        {/* Speaker Highlights Carousel */}
        <section className="mb-16">
          <h3 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Speaker Highlights
          </h3>
          <ImageCarousel images={speakerImages} />
        </section>

        <EventPoster />
        <Speakers />
        <EventAreas />
      </main>

      <Footer />
    </div>
  );
};

export default App;
