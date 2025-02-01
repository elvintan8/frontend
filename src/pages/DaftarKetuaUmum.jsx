import { useState } from "react";
import ketua1 from "../assets/ketua1.png"; 
import ketua2 from "../assets/ketua2.png";
import ketua3 from "../assets/ketua3.png";
import ketua4 from "../assets/ketua4.png";
import ketua5 from "../assets/ketua5.png";
import ketua6 from "../assets/ketua6.png";
import ketua7 from "../assets/ketua7.png";
import ketua8 from "../assets/ketua8.png";
import ketua9 from "../assets/ketua9.png";
import ketua10 from "../assets/ketua10.png";
import ketua11 from "../assets/ketua11.png";
import sedangdicari from "../assets/sedangdicari.png";

const DaftarKetuaUmum = () => {
  const ketua = [
    { image: ketua1, name: "Iskandar", year: "1987-2005" },
    { image: ketua2, name: "Bambang Hadinata", year: "2004-2006" },
    { image: ketua3, name: "Fery", year: "2006-2008" },
    { image: ketua4, name: "Cahyadi", year: "2008-2010" },
    { image: ketua5, name: "Akiet", year: "2010-2012" },
    { image: ketua6, name: "Welliam Sanjaya", year: "2012-2014" },
    { image: ketua7, name: "Yando Han", year: "2014-2016" },
    { image: ketua8, name: "Ricky Guo", year: "2016-2018" },
    { image: ketua9, name: "Viyan Sunata", year: "2018-2020" },
    { image: ketua10, name: "Maydi Arga", year: "2020-2022" },
    { image: ketua11, name: "Stevandy Octavianus", year: "2022-2024" },
    { image: sedangdicari, name: "Mr/Mrs X", year: "2024-2026" },
  ];

  const itemsPerPage = 6; 
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(ketua.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = ketua.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4 pt-20">
      <div className="mt-10">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
          Daftar Ketua Umum
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {currentItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center"
            >
              <img
                src={item.image}
                alt={item.name}
                className="rounded-full w-64 h-64 object-cover mb-4 shadow-lg border-4 border-blue-500"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {item.name}
              </h3>
              <p className="text-gray-600">{item.year}</p>
            </div>
          ))}
        </div>

        
        <div className="flex justify-center items-center mt-8 space-x-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`px-4 py-2 rounded ${
                currentPage === i + 1
                  ? "bg-blue-700 text-white"
                  : "bg-blue-500 text-white"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default DaftarKetuaUmum;
