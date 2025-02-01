import { useState } from "react";
import oenang1 from "../assets/oenang1.png";
import oenang2 from "../assets/oenang2.png";
import oenang3 from "../assets/oenang3.png";
import oenang4 from "../assets/oenang4.png";
import oenang5 from "../assets/oenang5.png";
import oenang6 from "../assets/oenang6.png";
import vimmutara1 from "../assets/vimmutara1.png";
import vimmutara2 from "../assets/vimmutara2.png";
import vimmutara3 from "../assets/vimmutara3.png";
import vimmutara4 from "../assets/vimmutara4.png";
import vimmutara5 from "../assets/vimmutara5.png";
import vimmutara6 from "../assets/vimmutara6.png";
import jaya1 from "../assets/jaya1.png";
import jaya2 from "../assets/jaya2.png";
import jaya3 from "../assets/jaya3.png";
import bazar1 from "../assets/bazar1.png";
import bazar2 from "../assets/bazar2.png";
import bazar3 from "../assets/bazar3.png";
import waisak1 from "../assets/waisak1.png";
import waisak2 from "../assets/waisak2.png";
import waisak3 from "../assets/waisak3.png";
import tsuzhi1 from "../assets/tsuzhi1.png";
import tsuzhi2 from "../assets/tsuzhi2.png";
import tsuzhi3 from "../assets/tsuzhi3.png";
import dnd1 from "../assets/dnd1.png";
import dnd2 from "../assets/dnd2.png";
import dnd3 from "../assets/dnd3.png";
import dnd4 from "../assets/dnd4.png";
import dnd5 from "../assets/dnd5.png";
import dnd6 from "../assets/dnd6.png";
import pensi1 from "../assets/pensi1.png";
import pensi2 from "../assets/pensi2.png";
import pensi3 from "../assets/pensi3.png";
import pensi4 from "../assets/pensi4.png";
import pensi5 from "../assets/pensi5.png";
import pensi6 from "../assets/pensi6.png";
import ak1 from "../assets/ak1.png";
import ak2 from "../assets/ak2.png";
import ak3 from "../assets/ak3.png";
import ak4 from "../assets/ak4.png";
import ak5 from "../assets/ak5.png";
import ak6 from "../assets/ak6.png";
import ut1 from "../assets/ut1.png";
import ut2 from "../assets/ut2.png";
import ut3 from "../assets/ut3.png";
import fangsen1 from "../assets/fangsen1.png";
import fangsen2 from "../assets/fangsen2.png";
import fangsen3 from "../assets/fangsen3.png";

const KegiatanPmbj = () => {
  // Data untuk card
  const teachers = [
    { image: oenang1 },
    { image: oenang2 },
    { image: oenang3 },
    { image: oenang4 },
    { image: oenang5 },
    { image: oenang6 },
    { image: vimmutara1 },
    { image: vimmutara2 },
    { image: vimmutara3 },
    { image: vimmutara4 },
    { image: vimmutara5 },
    { image: vimmutara6 },
    { image: jaya1 },
    { image: jaya2 },
    { image: jaya3 },
    { image: bazar1 },
    { image: bazar2 },
    { image: bazar3 },
    { image: waisak1 },
    { image: waisak2 },
    { image: waisak3 },
    { image: tsuzhi1 },
    { image: tsuzhi2 },
    { image: tsuzhi3 },
    { image: dnd1 },
    { image: dnd2 },
    { image: dnd3 },
    { image: dnd4 },
    { image: dnd5 },
    { image: dnd6 },
    { image: pensi1 },
    { image: pensi2 },
    { image: pensi3 },
    { image: pensi4 },
    { image: pensi5 },
    { image: pensi6 },
    { image: ak1 },
    { image: ak2 },
    { image: ak3 },
    { image: ak4 },
    { image: ak5 },
    { image: ak6 },
    { image: ut1 },
    { image: ut2 },
    { image: ut3 },
    { image: fangsen1 },
    { image: fangsen2 },
    { image: fangsen3 },
  ];

  // Array of titles for each page
  const pageTitles = [
    "Maha Cetiya Oenang Hermawan",
    "Vihara Vimmutara Jambi",
    "Vihara Jaya Manggala Jambi & Bazar Guan Ming",
    "Waisak Bersama & Bazar Tsu Zhi",
    "Dhammatalk & Dramamusical",
    "Pensi Amal",
    "Africa Kids",
    "Ultah PMBJ & Fangsen",
  ];

  // State untuk halaman
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Jumlah item per halaman

  // Hitung indeks data untuk halaman saat ini
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = teachers.slice(startIndex, endIndex);

  // Hitung jumlah halaman
  const totalPages = Math.ceil(teachers.length / itemsPerPage);

  // Get current page title
  const currentTitle = pageTitles[(currentPage - 1) % pageTitles.length];

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Get visible page numbers
  const getPageNumbers = () => {
    const maxVisiblePages = 5;
    const startPage = Math.floor((currentPage - 1) / maxVisiblePages) * maxVisiblePages + 1;
    const endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);
    return Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4 pt-20">
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">
          {currentTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentData.map((teacher, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 text-center"
            >
              <img
                src={teacher.image}
                alt={`Card ${index}`}
                className="rounded-lg shadow-md w-full h-[250px] object-cover"
              />
            </div>
          ))}
        </div>

        {/* Pagination Buttons */}
        <div className="flex justify-center items-center mt-6 space-x-2">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 border rounded ${
              currentPage === 1
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-white text-blue-500"
            }`}
          >
            Previous
          </button>

          {getPageNumbers().map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 border rounded ${
                currentPage === page
                  ? "bg-blue-500 text-white"
                  : "bg-white text-blue-500"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 border rounded ${
              currentPage === totalPages
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-white text-blue-500"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default KegiatanPmbj;
