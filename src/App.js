import { React, lazy, useEffect, useState } from "react";
import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Homepage = lazy(() => import("./Components/Homepage"));

const PropagateLoader = lazy(() => import("react-spinners/PropagateLoader"));

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div>
      <AnimatePresence>
        {/* {loading ? (
          <motion.div
            className="grid place-items-center h-screen"
            key="loader"
            initial={{ y: "0" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <PropagateLoader
              color="#00acc1"
              loading={loading}
              size={25}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </motion.div>
        ) : (
         
          <Homepage />
        )} */}
        <Homepage />
      </AnimatePresence>
    </div>
  );
};

export default App;
