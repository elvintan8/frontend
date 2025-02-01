import { Link, useLocation, useNavigate } from "react-router-dom"; 
import logo1 from "../assets/logo.png";
import { useEffect, useState } from "react";

const Navbar = () => {
  const location = useLocation(); 
  const navigate = useNavigate(); // Tambahkan useNavigate
  const [show, setShow] = useState(false); 
  const [scroll, setScroll] = useState(false); 
  const [searchVisible, setSearchVisible] = useState(false); 
  const [searchQuery, setSearchQuery] = useState(""); 
  const [filteredData, setFilteredData] = useState([]); 

  // Dummy data untuk pencarian
  const data = [
    { name: "Beranda", link: "/", content: "Ini adalah halaman beranda yang memuat data umum." },
    { name: "Tentang", link: "/tentang", content: "Halaman tentang mencakup informasi seperti Fery dan sejarah." },
    { name: "Logo PMBJ", link: "/LogoPmbj", content: "Informasi mengenai logo PMBJ dan maknanya." },
    { name: "Kegiatan PMBJ", link: "/KegiatanPmbj", content: "Kegiatan PMBJ termasuk program komunitas seperti Fery." },
    { name: "Daftar Ketua Umum", link: "/DaftarKetuaUmum", content: "Daftar Ketua Umum yang pernah menjabat, termasuk Fery." },
    { name: "Form Pendaftaran", link: "/FormPendaftaran", content: "Form pendaftaran untuk anggota baru." },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setScroll(true);
        setShow(false); 
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const results = data.filter(
      item =>
        item.name.toLowerCase().includes(query) ||
        item.content.toLowerCase().includes(query)
    );
    setFilteredData(results);
  };

  const handleAdminClick = () => {
    setShow(false); // Menyembunyikan navbar ketika Admin diklik
    navigate("/admin"); // Mengarahkan ke halaman Admin
  };

  if (location.pathname === "/LoginPage" || location.pathname === "/admin") {
    return null; 
  }

  let scrollActive = scroll ? "py-6 bg-white shadow" : "py-4";
  let menuActive = show ? "left-0" : "-left-full";

  return (
    <div className={`navbar fixed w-full transition-all ${scrollActive}`}>
      <div className="container mx-auto px-4">
        <div className="navbar-box flex items-center justify-between">

          <div className="navbar-logo flex items-center">
            <img src={logo1} alt="Logo" className="w-12 h-12 mr-4" />
            <h1 className="sm:text-2xl text-xl font-bold">PMBJ BANGET</h1>
          </div>

          <ul 
            className={`lg:flex lg:gap-12 md:static md:flex-row md:shadow-none md:bg-transparent md:w-auto md:h-full md:translate-y-0 md:text-black md:p-0 md:m-0 md:transition-none gap-8 fixed ${menuActive} top-1/2 -translate-y-1/2 flex-col px-8 py-6 rounded shadow-lg shadow-slate-300 bg-sky-400 font-bold text-white transition-all`}
          >
            <li className="flex items-center gap-3">
              <i className="ri-home-2-line text-3xl md:hidden block"></i>
              <Link to="/" className="font-medium opacity-75 hover:text-blue-500">Beranda</Link>
            </li>
            <li className="flex items-center gap-3">
              <i className="ri-information-line text-3xl md:hidden block"></i>
              <Link to="/tentang" className="font-medium opacity-75 hover:text-blue-500">Tentang</Link>
            </li>
            <li>
              <Link to="/LogoPmbj" className="font-medium opacity-75 flex items-center hover:text-blue-500">
                <img 
                  src={logo1} 
                  alt="Logo PMBJ" 
                  className="h-5 w-5 mr-2 -ml-2"
                />
                Logo PMBJ
              </Link>
            </li>
            <li className="flex items-center gap-3">
              <i className="ri-book-read-fill text-3xl md:hidden block"></i>
              <Link to="/KegiatanPmbj" className="font-medium opacity-75 hover:text-blue-500">Kegiatan PMBJ</Link>
            </li>
            <li className="flex items-center gap-3">
              <i className="ri-file-list-line text-3xl md:hidden block"></i>
              <Link to="/DaftarKetuaUmum" className="font-medium opacity-75 hover:text-blue-500">Daftar Ketua Umum</Link>
            </li>
            <li className="flex items-center gap-3">
              <i className="ri-survey-line text-3xl md:hidden block"></i>
              <Link to="/FormPendaftaran" className="font-medium opacity-75 hover:text-blue-500">Form Pendaftaran</Link>
            </li>
            {/* Tambahan Menu Admin */}
            <li className="flex items-center gap-3">
              <i className="ri-user-3-line text-3xl md:hidden block"></i>
              <button onClick={handleAdminClick} className="font-medium opacity-75 hover:text-blue-500">Admin</button>
            </li>
          </ul>

          <div className="flex items-center gap-6 relative">
            <button onClick={() => setSearchVisible(!searchVisible)} className="text-2xl focus:outline-none hover:text-blue-500">
              <i className="ri-search-line"></i>
            </button>

            {searchVisible && (
              <div className="absolute top-12 right-0 bg-white shadow-lg rounded p-4 w-64 z-10">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearch}
                  placeholder="Cari..."
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                />
                <ul className="mt-4 space-y-2">
                  {filteredData.length > 0 ? (
                    filteredData.map((item, index) => (
                      <li key={index}>
                        <Link to={item.link} className="text-blue-500 hover:underline">{item.name}</Link>
                      </li>
                    ))
                  ) : (
                    <li className="text-gray-500">Tidak ditemukan</li>
                  )}
                </ul>
              </div>
            )}

            <button onClick={() => setShow(!show)} className="lg:hidden text-3xl focus:outline-none">
              <i className="ri-menu-3-line"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
