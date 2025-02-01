import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataPendaftaran, deleteAnggota } from "../store/action/pendaftaranAction";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const ListAnggota = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Ambil data dari Redux State
  const { loading, anggota, error } = useSelector(
    (state) => state.dataPendaftaranReducer
  );

  // Mengambil data anggota dari Redux
  useEffect(() => {
    dispatch(dataPendaftaran());
  }, [dispatch]);

  // Fungsi untuk menghapus data anggota
  const handleDelete = (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus anggota ini?")) {
      dispatch(deleteAnggota(id));
    }
  };

  // Fungsi logout
  const handleLogout = () => {
    if (window.confirm("Apakah Anda yakin ingin keluar?")) {
      localStorage.removeItem("token"); // Hapus token dari localStorage
      navigate("/admin"); // Arahkan ke halaman login
    }
  };

  // Fungsi untuk menampilkan toast setelah update data
  const showToast = () => {
    toast.success("Data berhasil diperbarui!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div className="container mx-auto mt-10 p-4">
      {/* Header dan Tombol Logout */}
      <div className="flex justify-between items-center mt-16 mb-4">
        <h1 className="text-2xl font-bold">Data Pendaftaran Anggota Baru</h1>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition"
          onClick={handleLogout}
        >
          Log Out
        </button>
      </div>

      {/* Handle Loading State */}
      {loading && <p>Loading data...</p>}

      {/* Handle Error State */}
      {error && <p className="text-red-500">Terjadi Kesalahan: {error}</p>}

      {/* Tabel List Anggota */}
      {!loading && !error && anggota?.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="border p-2">No</th>
                <th className="border p-2">Nama Lengkap</th>
                <th className="border p-2">Nama Buddhis</th>
                <th className="border p-2">Pendidikan</th>
                <th className="border p-2">No HP</th>
                <th className="border p-2">Email</th>
                <th className="border p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {anggota.map((item, index) => (
                <tr
                  key={item.id} // Gunakan `id` sebagai key jika ada
                  className="odd:bg-white even:bg-gray-100 text-center"
                >
                  <td className="border p-2 text-center">{index + 1}</td>
                  <td className="border p-2">{item.namalengkap}</td>
                  <td className="border p-2">{item.namabuddhis}</td>
                  <td className="border p-2">{item.pendidikan}</td>
                  <td className="border p-2">{item.noHpTelp}</td>
                  <td className="border p-2">{item.email}</td>
                  <td className="border p-2">
                    <div className="flex justify-center space-x-2">
                      {/* Tombol Edit */}
                      <button
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                        onClick={() => {
                          // Navigasi ke halaman edit dengan id anggota
                          navigate(`/EditPendaftaran/${item.id}`);
                          showToast(); // Menampilkan pesan toast setelah update
                        }}
                      >
                        Edit
                      </button>

                      {/* Tombol Delete */}
                      <button
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        !loading &&
        !error && (
          <p className="text-center text-gray-500">
            Tidak ada data anggota tersedia
          </p>
        )
      )}

      {/* Komponen ToastContainer untuk menampilkan toast */}
      <ToastContainer />
    </div>
  );
};

export default ListAnggota;
