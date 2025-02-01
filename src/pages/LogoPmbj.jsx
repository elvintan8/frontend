import makna1 from "../assets/makna1.png";
import makna2 from "../assets/makna2.png";
import makna3 from "../assets/makna3.png";
import makna4 from "../assets/makna4.png";
import makna5 from "../assets/makna5.png";
import makna6 from "../assets/makna6.png";

const LogoPmbj = () => {
  // Data untuk card
  const objectives = [
    {
      role: "Pertama",
      image: makna1,
      title: "Kitab Suci Agama Buddha",
      description: "Dalam menjalankan misi dan visi organisasi, PMBJ berpedoman pada Kitab Suci Agama Buddha yaitu Tipitaka.",
    },
    {
      role: "Kedua",
      image: makna2,
      title: "Obor",
      description: "Semangat yang menyala bagaikan api obor dalam pengembangan agama Buddha.",
    },
    {
      role: "Ketiga",
      image: makna3,
      title: "Bendera Buddhis",
      description:
        "Panji 6 warna yang melambangkan aura (Sinar dari tubuh) Sang Buddha yang merupakan cerminan bagi PMBJ.",
    },
    {
      role: "Keempat",
      image: makna4,
      title: "Perhimpunan Mahasiswa Buddhis Jambi",
      description:
        "PMBJ merupakan organisasi Buddhis bagi mahasiswa-mahasiswa Buddhis yang menimba ilmu di Perguruan Tinggi di Kota Jambi adalah organisasi yang bersifat Universal dan Independent.",
    },
    {
      role: "Kelima",
      image: makna5,
      title: "Delapan Segitiga Hitam",
      description:
        "Mewakili Hasta Ariya Magga (Jalan Tengah Berunsur Delapan) yaitu di dalam menjalankan semua kegiatannya, PMBJ berpedoman dengan Ajaran Sang Buddha.",
    },
    {
      role: "Keenam",
      image: makna6,
      title: "Kelopak Bunga Teratai",
      description:
        "Lambang kesucian PMBJ menjadikan bunga Teratai sebagai contoh yang artinya meskipun tumbuh di kolam yang berlumpur, namun bunga Teratai tidak terkotori oleh lumpur, disamping menjalani kehidupan duniawi juga harus diseimbangi dengan surgawi, tentunya sejalan dengan Buddha Dhamma.",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4 pt-20">
      {/* Container Utama */}
      <div className="container mx-auto bg-white rounded-lg shadow-md p-6">
        {/* Bagian Judul */}
        <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">
          Tujuan Dasar PMBJ
        </h2>

        {/* Bagian Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {objectives.map((objective, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center relative transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              {/* Role Badge */}
              <div className="absolute top-2 left-2 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                {objective.role}
              </div>

              {/* Gambar */}
              <img
                src={objective.image}
                alt={objective.title}
                className="rounded-lg shadow-md w-full h-[300px] object-cover bg-gray-200"
              />

              {/* Teks */}
              <h4 className="mt-4 text-lg font-bold text-gray-800">
                {objective.title}
              </h4>
              <p className="mt-2 text-sm text-gray-600">{objective.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoPmbj;
