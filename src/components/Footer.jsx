const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-12">
      <div className="container mx-auto px-6 sm:px-12">
       
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h4 className="text-xl font-semibold mb-4">Ikuti Kami</h4>
            <div className="flex justify-center md:justify-start space-x-6">
        
              <a
                href="https://www.instagram.com/pmbj_banget?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-sky-400 transition-all transform hover:scale-110"
              >
                <i className="ri-instagram-fill text-3xl"></i>
              </a>
         
              <a
                href="https://www.tiktok.com/@pmbj_banget?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-sky-400 transition-all transform hover:scale-110"
              >
                <i className="ri-tiktok-fill text-3xl"></i>
              </a>
             
              <a
                href="https://www.facebook.com/pmbj1987?locale=id_ID"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-sky-400 transition-all transform hover:scale-110"
              >
                <i className="ri-facebook-fill text-3xl"></i>
              </a>
              
              <a
                href="https://www.youtube.com/@pmbjbanget6031"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-sky-400 transition-all transform hover:scale-110"
              >
                <i className="ri-youtube-fill text-3xl"></i>
              </a>
             
              <a
                href="https://wa.me/62895391091358" // Replace with your WhatsApp number
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-sky-400 transition-all transform hover:scale-110"
              >
                <i className="ri-whatsapp-fill text-3xl"></i>
              </a>
            </div>
          </div>

       
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-400 mb-2">
              Email:{" "}
              <a
                href="mailto:pmbj.jambi@gmail.com"
                className="text-sky-400 hover:underline"
              >
                pmbj.jambi@gmail.com
              </a>
            </p>
            <p className="text-sm text-gray-400">Telepon: +62 895-3910-91358</p>
          </div>
        </div>

        <div className="text-center text-sm text-gray-400 border-t border-gray-700 pt-6">
          <p>© {new Date().getFullYear()} Perhimpunan Mahasiswa Buddhis Jambi. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
