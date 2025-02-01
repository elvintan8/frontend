import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updatePendaftaran, getPendaftaranById } from "../store/action/pendaftaranAction";



const EditPendaftaran = () => {
  const { id } = useParams(); 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    namalengkap: "",
    namabuddhis: "",    
    tempatlahir: "",
    tanggallahir: "",
    jeniskelamin: "",
    pendidikan: "",
    fakultas: "",
    angkatantahunajaran: "",
    pekerjaan: "",
    golongandarah: "",
    hobi: "",
    alamatlengkap: "",
    aktifdivihara: "",
    nohp: "",
    email: "",
  });

  const { anggota, loading, error } = useSelector(
    (state) => state.dataPendaftaranReducer
  );

  
  useEffect(() => {
    dispatch(getPendaftaranById(id));
  }, [dispatch, id]);

  
  useEffect(() => {
    if (anggota) {
      setFormData({
        namalengkap: anggota.namalengkap || "",
        namabuddhis: anggota.namabuddhis || "",
        tempatlahir: anggota.tempatlahir || "",
        tanggallahir: anggota.tanggallahir || "",
        jeniskelamin: anggota.jeniskelamin || "",
        pendidikan: anggota.pendidikan || "",
        fakultas: anggota.fakultas || "",
        angkatantahunajaran: anggota.angkatantahunajaran || "",
        pekerjaan: anggota.pekerjaan || "",
        golongandarah: anggota.golongandarah || "",
        hobi: anggota.hobi || "",
        alamatlengkap: anggota.alamatlengkap || "",
        aktifdivihara: anggota.aktifdivihara || "",
        nohp: anggota.nohp || "",
        email: anggota.email || "",
      });
    }
  }, [anggota]);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updatePendaftaran(id, formData));
    
    // Tampilkan pesan berhasil update
    alert('Data berhasil diperbarui!');
    
    navigate("/ListDaftar");
    console.log(formData);
  };
  
  


  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="container mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Data Pendaftaran</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
         
          <div>
            <label className="block font-bold">Nama Lengkap</label>
            <input
              type="text"
              name="namalengkap"
              value={formData.namalengkap}
              onChange={handleChange}
              className="border p-2 w-full"
              required
            />
          </div>

          
          <div>
            <label className="block font-bold">Nama Buddhis</label>
            <input
              type="text"
              name="namabuddhis"
              value={formData.namabuddhis}
              onChange={handleChange}
              className="border p-2 w-full"
              required
            />
          </div>

          
          <div>
            <label className="block font-bold">Tempat Lahir</label>
            <input
              type="text"
              name="tempatlahir"
              value={formData.tempatlahir}
              onChange={handleChange}
              className="border p-2 w-full"
              required
            />
          </div>


          <div>
            <label className="block font-bold">Tanggal Lahir</label>
            <input
              type="date"
              name="tanggallahir"
              value={formData.tanggallahir}
              onChange={handleChange}
              className="border p-2 w-full"
              required
            />
          </div>

          
          <div>
            <label className="block font-bold">Jenis Kelamin</label>
            <select
              name="jeniskelamin"
              value={formData.jeniskelamin}
              onChange={handleChange}
              className="border p-2 w-full"
              required
            >
              <option value="">Pilih Jenis Kelamin</option>
              <option value="L">Laki-Laki</option>
              <option value="P">Perempuan</option>
            </select>
          </div>

          
          <div>
            <label className="block font-bold">Pendidikan</label>
            <input
              type="text"
              name="pendidikan"
              value={formData.pendidikan}
              onChange={handleChange}
              className="border p-2 w-full"
              required
            />
          </div>

          
          <div>
            <label className="block font-bold">Fakultas</label>
            <input
              type="text"
              name="fakultas"
              value={formData.fakultas}
              onChange={handleChange}
              className="border p-2 w-full"
              required
            />
          </div>

          
          <div>
            <label className="block font-bold">Angkatan/Tahun Ajaran</label>
            <input
              type="text"
              name="angkatantahunajaran"
              value={formData.angkatantahunajaran}
              onChange={handleChange}
              className="border p-2 w-full"
              required
            />
          </div>

          
          <div>
            <label className="block font-bold">Pekerjaan</label>
            <input
              type="text"
              name="pekerjaan"
              value={formData.pekerjaan}
              onChange={handleChange}
              className="border p-2 w-full"
              required
            />
          </div>

        
          <div>
            <label className="block font-bold">Golongan Darah</label>
            <input
              type="text"
              name="golongandarah"
              value={formData.golongandarah}
              onChange={handleChange}
              className="border p-2 w-full"
              required
            />
          </div>

         
          <div>
            <label className="block font-bold">Hobi</label>
            <input
              type="text"
              name="hobi"
              value={formData.hobi}
              onChange={handleChange}
              className="border p-2 w-full"
              required
            />
          </div>

          
          <div>
            <label className="block font-bold">Alamat Lengkap</label>
            <textarea
              name="alamatlengkap"
              value={formData.alamatlengkap}
              onChange={handleChange}
              className="border p-2 w-full"
              required
            />
          </div>

          
          <div>
            <label className="block font-bold">Aktif di Vihara</label>
            <input
              type="text"
              name="aktifdivihara"
              value={formData.aktifdivihara}
              onChange={handleChange}
              className="border p-2 w-full"
              required
            />
          </div>

          
          <div>
            <label className="block font-bold">Nomor HP</label>
            <input
              type="text"
              name="nohp"
              value={formData.nohp}
              onChange={handleChange}
              className="border p-2 w-full"
              required
            />
          </div>

          
          <div>
            <label className="block font-bold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border p-2 w-full"
              required
            />
          </div>
        </div>

       
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 mt-4"
        >
          Simpan Perubahan
        </button>
      </form>
    </div>
  );
};

export default EditPendaftaran;
