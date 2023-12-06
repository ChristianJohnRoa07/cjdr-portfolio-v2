import { React, lazy, useEffect, useState, Suspense } from "react";

import "./App.css";
import "./loadingCSS.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";


const Homepage = lazy(() => import("./Components/Homepage"));



const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div>
      <AnimatePresence>
        {loading ? (
          <motion.div
            className="grid place-items-center h-screen "
            key="loader"
            initial="show"
          >
            <div className="flex gap-7">
              <span className="font-poppins font-bold text-6xl text-cyan-500">
                CJ
              </span>
              <span class="loader"></span>
              <span className="font-poppins font-bold text-6xl text-cyan-500">
                DR
              </span>
            </div>
          </motion.div>
        ) : (
          <Homepage />
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
