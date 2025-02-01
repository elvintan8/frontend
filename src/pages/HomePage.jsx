import HeroImage from "../assets/home.png";
import About from "../assets/about.png";

const HomePage = () => {
  return (
    <div className="homepage pb-10">
      <div className="container mx-auto px-4 sm:px-8 pt-32"> {/* Adjusted padding */}
        {/* Hero Section */}
        <div className="hero grid md:grid-cols-2 grid-cols-1 items-center gap-20 mb-20"> {/* mb-20 for spacing */}
          <div className="box">
            <h1 className="lg:text-5xl text-3xl font-medium mb-7">
              Selamat Datang di Website <span className="font-bold text-sky-400 underline">Perhimpunan Mahasiswa Buddhis Jambi</span>
            </h1>
            <p className="text-base mb-7">
             
            </p>
            <a href="#" className="bg-sky-400 hover:bg-sky-500 transition-all py-2 px-4 text-white shadow rounded-full">
              PMBJ JAYA JAYA JAYA <i className="ri-eye-line ms-1"></i>
            </a>
          </div>
          <div className="box">
            <img 
              src={HeroImage} 
              alt="Home" 
              className="w-full max-w-[900px] h-[500px] object-cover mx-auto md:w-full" 
            />
          </div>
        </div>

        {/* About Section */}
        <div className="about grid md:grid-cols-2 grid-cols-1 items-center gap-30 md:pt-20 pt-32 mb-20">
          <div className="box md:order-1 order-2">
            <img 
              src={About} 
              alt="About" 
              className="w-full max-w-[600px] h-[230px] object-cover mx-auto md:w-full shadow-lg rounded-lg transition-all" 
            />
          </div>
          <div className="box md:order-2 order-1">
            <h1 className="lg:text-5xl text-3xl font-medium mb-7">
              Tanggal <span className="font-bold text-sky-400 underline">Didirikan</span>
            </h1>
            <p className="text-base leading-relaxed text-gray-700">
            Perhimpunan Mahasiswa Buddhis Jambi (PMBJ), atau dikenal juga sebagai PMBJambi, adalah organisasi kemahasiswaan berbasis kekeluargaan yang berfokus pada menghimpun mahasiswa beragama Buddha, memperkuat kegiatan keagamaan Buddha, serta berkontribusi dalam bidang sosial kemasyarakatan. PMBJ merupakan satu-satunya organisasi pemersatu mahasiswa Buddhis di kota Jambi yang bersifat mandiri, tidak terikat pada aliran tertentu, dan bebas dari kegiatan politik.
            </p>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="map mt-16 grid md:grid-cols-2 grid-cols-1 gap-20 mb-20 ">
          {/* Left: Map Embed */}
          <div className="col-span-1 flex flex-col items-center justify-center">
            <h2 className="text-3xl font-semibold mb-6">Lokasi Sekretariat</h2>
            <div className="relative pb-[56.25%] w-full max-w-[600px] mb-10 ">
            <iframe
  className="absolute top-0 left-0 w-full h-[300px]"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63761.97975666538!2d103.5938014!3d-1.6104505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e2d7c87b8d0eb17%3A0x30fd68f24ef4912b!2sPerumahan%20BSD%201%2C%20Jambi!5e0!3m2!1sid!2sid!4v1689040245672!5m2!1sid!2sid"
  width="100%"
  height="300"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
></iframe>


            </div>
          </div>

          {/* Right: Address Info */}
          <div className="col-span-1 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">Alamat Kami</h3>
              <p className="text-gray-700">
                Jl. Banjar Rejo No.28, The Hok, Kec. Jambi Sel., Kota Jambi, Jambi 36125
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
