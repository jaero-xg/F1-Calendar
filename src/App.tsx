import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import RaceCalendar from "./pages/RaceCalendar";
import RaceDetails from "./pages/RaceDetails";
import DriverDetails from "./pages/DriverDetails";
import TrackDetails from "./pages/TrackDetails";
import Drivers from "./pages/Drivers";
import Tracks from "./pages/Tracks";

// Scroll to top on every route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
};

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname} {...pageTransition}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/drivers" element={<Drivers />} />
          <Route path="/tracks" element={<Tracks />} />
          <Route path="/calendar" element={<RaceCalendar />} />
          <Route path="/race/:id" element={<RaceDetails />} />
          <Route path="/driver/:id" element={<DriverDetails />} />
          <Route path="/track/:id" element={<TrackDetails />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-f1-black text-f1-text">
      <ScrollToTop />
      <Navbar />
      <main>
        <AnimatedRoutes />
      </main>
      <Footer />
    </div>
  );
}
