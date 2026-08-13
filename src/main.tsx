import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import CafeAroma from "./pages/CafeAroma.tsx";
import UrbanFitnessStudio from "./pages/UrbanFitnessStudio.tsx";
import BloomCo from "./pages/BloomCo.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/work/cafe-aroma" element={<CafeAroma />} />
        <Route path="/work/urban-fitness-studio" element={<UrbanFitnessStudio />} />
        <Route path="/work/bloom-co" element={<BloomCo />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);
