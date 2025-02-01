import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { useDispatch } from "react-redux"; 
import { login } from "../store/action/authAction"; 

const Admin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    try {
      // Call login action with form data
      const response = await dispatch(login(formData.email, formData.password));

      console.log("Login response:", response); // Log to check the response

      if (response.success) {
        console.log("Login berhasil");
        navigate("/ListDaftar"); // Arahkan ke halaman ListAnggota setelah login berhasil
      } else {
        setErrorMessage(response.message || "Username atau password salah!");
      }
    } catch (error) {
      console.error("Login failed:", error);
      setErrorMessage("Terjadi kesalahan. Silakan coba lagi.");
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="p-8 bg-white shadow-lg rounded-lg w-full max-w-md opacity-90">
        <h2 className="text-3xl font-bold mb-6 text-center">Login Admin</h2>

        {errorMessage && (
          <div className="bg-red-500 text-white p-2 rounded-lg mb-4">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block font-semibold text-lg mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 border rounded-lg"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block font-semibold text-lg mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-3 border rounded-lg"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        {/* Tombol Kembali ke Beranda */}
        <button
          className="w-full bg-gray-500 text-white p-3 rounded-lg mt-4 hover:bg-gray-700"
          onClick={() => navigate("/")} // Arahkan ke halaman beranda
        >
          Kembali ke Beranda
        </button>
      </div>
    </div>
  );
};

export default Admin;
