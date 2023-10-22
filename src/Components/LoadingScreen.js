import { React, lazy } from "react";

const RingLoader = lazy(() => import("react-spinners/RingLoader"));

const LoadingScreen = () => {
  return (
    <div className="grid place-items-center h-screen">
      <RingLoader
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default LoadingScreen;
