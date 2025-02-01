import tentang1 from "../assets/tentang1.png";
import tentang2 from "../assets/tentang2.png";
import tujuan1 from "../assets/tujuan1.png";
import tujuan2 from "../assets/tujuan2.png";
import tujuan3 from "../assets/tujuan3.png";

const Tentang = () => {
  // Data untuk card
  const teachers = [
    {
      role: "Tujuan Pertama",
      image: [tujuan1],
      name: "Menjalin Komunikasi antar Mahasiswa Buddhis se-kota Jambi.",
      
    },
    {
      role: "Tujuan Kedua",
      image: [tujuan2],
      name: "Mengembangkan dan melestarikan Buddha Dhamma.",
      
    },
    {
      role: "Tujuan Ketiga",
      image: [tujuan3],
      name: "Menyelenggarakan, Membantu, dan Memfasilitas (3M) kegiatan Bakti Sosial Buddhis, khusus di Kota Jambi.",
      
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4 pt-20">
      {/* Tambahkan pt-20 untuk menghindari tabrakan dengan navbar */}
      <div className="container mx-auto bg-white rounded-lg shadow-md p-6">
        <div className="grid md:grid-cols-2 gap-6 items-start">
          {/* Bagian Gambar */}
          <div className="space-y-6">
            <img
              src={tentang1}
              alt="Tentang 1"
              className="rounded-lg shadow-md w-full max-w-md mx-auto object-cover"
            />
            <img
              src={tentang2}
              alt="Tentang 2"
              className="rounded-lg shadow-md w-full max-w-md mx-auto object-cover"
            />
          </div>

          {/* Bagian Teks */}
          <div>
            {/* Judul di atas paragraf */}
            <h1 className="text-3xl font-bold text-blue-900 mb-6">Pada Waktu itu</h1>
            <p className="text-gray-700 leading-relaxed mb-4">
                Perhimpunan Mahasiswa Buddhis Jambi (PMBJ) dibentuk pada tahun 1987 atas
                saran dari Alm. YM Bhikkhu Girirakhito. Berdomisili di Yayasan Caka Maha 
                Jaya Jambi. Pembentukan diresmikan di kediaman Ibu Yetti Tan dan ditetapkan 
                tanggal 7 Mei 1987 sebagai hari berdirinya Perhimpunan Mahasiswa Buddhis Jambi (PMBJ). 
            </p>
            <p className="text-gray-700 leading-relaxed">
            PMBJ dapat bergerak secara bebas dan membangun kemitraan dengan berbagai kelompok, termasuk lintas agama. Anggota PMBJ berasal dari beragam universitas di Jambi, yang memberikan warna dan keberagaman dalam organisasi ini. Selain itu, PMBJ juga berfokus pada menjalin komunikasi antar mahasiswa Buddhis se-kota Jambi, mengembangkan dan melestarikan ajaran Buddha Dhamma, serta menyelenggarakan, membantu, dan memfasilitasi (3M) kegiatan bakti sosial Buddhis khususnya di Kota Jambi.
            </p>
          </div>
        </div>

        {/* Bagian Card */}
       {/* Bagian Card */}
       <div className="mt-[3cm]">
  <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Tujuan Dasar PMBJ</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {teachers.map((teacher, index) => (
      <div
        key={index}
        className="bg-white rounded-lg shadow-md p-4 text-center relative"
      >
        <div className="absolute top-2 left-2 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
          {teacher.role}
        </div>
        <img
          src={teacher.image}
          alt={teacher.name}
          className="rounded-lg shadow-md w-full h-[250px] object-cover" // Ukuran gambar diperbesar
        />
        <h3 className="mt-4 text-lg font-semibold text-gray-800">
          {teacher.name}
        </h3>
      </div>
    ))}
  </div>
</div>

      </div>
    </div>
  );
};

export default Tentang;
