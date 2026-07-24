// src/App.jsx
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import Faq from "./pages/Faq";
import Contato from "./pages/Contato";
import Exemplos from "./pages/Exemplos";

export default function App() {
  return (
    <HashRouter>
      <Header />
      <main className="w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/produtos" element={<Exemplos />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  );
}
