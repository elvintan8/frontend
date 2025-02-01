import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import {store} from "./store/store";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import Tentang from "./pages/Tentang";
import LogoPmbj from "./pages/LogoPmbj";
import KegiatanPmbj from "./pages/KegiatanPmbj";
import DaftarKetuaUmum from "./pages/DaftarKetuaUmum";
import FormPendaftaran from "./pages/FormPendaftaran";

import ListDaftar from "./pages/ListDaftar";
import EditPendaftaran from "./pages/EditPendaftaran";
import Admin from "./pages/Admin";




function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="flex flex-col min-h-screen">
          {/* Navbar */}
          <Navbar />
          
          {/* Main Content */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/tentang" element={<Tentang />} />
              <Route path="/LogoPmbj" element={<LogoPmbj />} />
              <Route path="/KegiatanPmbj" element={<KegiatanPmbj />} />
              <Route path="/DaftarKetuaUmum" element={<DaftarKetuaUmum />} />
              <Route path="/FormPendaftaran" element={<FormPendaftaran />} />
              
              <Route path="/ListDaftar" element={<ListDaftar />} />
              <Route path="/EditPendaftaran/:id" element={<EditPendaftaran />} />
              <Route path="/Admin" element={<Admin />} />
            </Routes>
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
