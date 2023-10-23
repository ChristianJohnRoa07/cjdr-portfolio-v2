import { React, lazy, useEffect, useState, Suspense } from "react";

import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "./Components/Variants";

const Homepage = lazy(() => import("./Components/Homepage"));

const PropagateLoader = lazy(() => import("react-spinners/PropagateLoader"));

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      <AnimatePresence>
        {/* {loading ? (
          <motion.div
            className="grid place-items-center h-screen "
            key="loader"
            initial="show"
          >
            <PropagateLoader
              color="#00acc1"
              loading={loading}
              size={15}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </motion.div>
        ) : (
          <Homepage />
        )} */}

        <Suspense
          fallback={
             <motion.div
          className="flex flex-col justify-center items-center gap-2 h-screen "
          key="loader"
          initial="show"
        >
          <span className="font-poppins font-[700] text-center text-cyan-200 text-6xl">CJDR.</span>

          <PropagateLoader
            color="#00acc1"
            
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </motion.div>
          }
        >
          <Homepage />
        </Suspense>
      </AnimatePresence>
    </div>
  );
};

export default App;
