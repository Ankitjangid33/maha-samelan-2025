import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import EventDetails from "./components/EventDetails";
import Schedule from "./components/Schedule";
import Speakers from "./components/Speakers";
import AllSpeakers from "./components/AllSpeakers";
import SocialInfluencers from "./components/SocialInfluencers";
import Organizers from "./components/Organizers";
import Topics from "./components/Topics";
import Footer from "./components/Footer";
import LoadingSpinner from "./components/LoadingSpinner";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50 min-h-screen font-devanagari">
      <Header />
      <main role="main">
        <Hero />
        <EventDetails />
        <Topics />
        <Schedule />
        <Speakers />
        <AllSpeakers />
        <SocialInfluencers />
        <Organizers />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
