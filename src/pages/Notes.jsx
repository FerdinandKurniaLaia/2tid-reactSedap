import { AiFillEdit, AiFillDelete } from "react-icons/ai"; 
import { notesAPI } from "../services/noteAPI";
import { useState, useEffect } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import EmptyState from "../components/EmptyState";
import GenericTable from "../components/GenericTable";

export default function Notes() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [notes, setNotes] = useState([]);

  const [dataForm, setDataForm] = useState({
    title: "",
    content: "",
    status: "",
  });

  const [editId, setEditId] = useState(null);

  useEffect(() => {
    loadNotes();
  }, []);

  const loadNotes = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await notesAPI.fetchNotes();
      setNotes(data);
    } catch (err) {
      setError("Gagal memuat catatan");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      if (editId) {
        await notesAPI.updateNote(editId, dataForm);
        setSuccess("Catatan berhasil diperbarui!");
      } else {
        await notesAPI.createNote(dataForm);
        setSuccess("Catatan berhasil ditambahkan!");
      }

      setDataForm({ title: "", content: "", status: "" });
      setEditId(null);
      await loadNotes();

      setTimeout(() => setSuccess(""), 3000);
    } catch (err) {
      setError(`Terjadi kesalahan: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const konfirmasi = confirm("Yakin ingin menghapus catatan ini?");
    if (!konfirmasi) return;

    try {
      setLoading(true);
      setError("");
      setSuccess("");
      await notesAPI.deleteNote(id);
      await loadNotes();
    } catch (err) {
      setError(`Terjadi kesalahan: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (id) => {
    const noteToEdit = notes.find(note => note.id === id);
    if (noteToEdit) {
      setDataForm({
        title: noteToEdit.title,
        content: noteToEdit.content,
        status: noteToEdit.status,
      });
      setEditId(id);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Notes App</h2>
      </div>

      {error && (
        <div className="bg-red-500 text-white p-4 mb-4 rounded-xl shadow-md">
          <p>{error}</p>
        </div>
      )}
      {success && (
        <div className="bg-green-500 text-white p-4 mb-4 rounded-xl shadow-md">
          <p>{success}</p>
        </div>
      )}

      {/* Form Card */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-10">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          {editId ? "Edit Catatan" : "Tambah Catatan Baru"}
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            value={dataForm.title}
            placeholder="Judul catatan"
            onChange={handleChange}
            disabled={loading}
            required
            className="w-full p-3 bg-gray-50 rounded-2xl border border-gray-200
                       focus:outline-none focus:ring-2 focus:ring-emerald-500
                       focus:border-transparent transition-all duration-200"
          />

          <textarea
            name="content"
            value={dataForm.content}
            placeholder="Isi catatan"
            onChange={handleChange}
            disabled={loading}
            required
            rows="2"
            className="w-full p-3 bg-gray-50 rounded-2xl border border-gray-200
                       focus:outline-none focus:ring-2 focus:ring-emerald-500
                       focus:border-transparent transition-all duration-200 resize-none"
          />

          <div className="flex flex-wrap gap-4">
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-emerald-600 text-white font-semibold rounded-2xl
                         shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-500
                         focus:ring-offset-2 transition-transform transition-colors duration-300
                         hover:bg-emerald-700 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed
                         text-sm sm:text-base"
            >
              {loading
                ? "Mohon Tunggu..."
                : editId
                ? "Perbarui Catatan"
                : "Tambah Catatan"}
            </button>

            {editId && (
              <button
                type="button"
                disabled={loading}
                onClick={() => {
                  setDataForm({ title: "", content: "", status: "" });
                  setEditId(null);
                  setError("");
                  setSuccess("");
                }}
                className="px-6 py-3 bg-gray-400 text-white font-semibold rounded-2xl
                           shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-500
                           focus:ring-offset-2 transition-transform transition-colors duration-300
                           hover:bg-gray-500 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed
                           text-sm sm:text-base"
              >
                Batal
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Notes Table */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="px-6 py-4">
          <h3 className="text-lg font-semibold">
            Daftar Catatan ({notes.length})
          </h3>
        </div>

        {loading && <LoadingSpinner text="Memuat catatan..." />}

        {!loading && notes.length === 0 && !error && (
          <EmptyState text="Belum ada catatan. Tambah catatan pertama!" />
        )}

        {!loading && notes.length === 0 && error && (
          <EmptyState text="Terjadi Kesalahan. Coba lagi nanti." />
        )}

        {!loading && notes.length > 0 && (
          <GenericTable
            columns={["#", "Judul", "Isi Catatan", "Aksi"]}
            data={notes}
            renderRow={(note, index) => (
              <>
                <td className="px-6 py-4 font-medium text-gray-700">
                  {index + 1}.
                </td>
                <td className="px-6 py-4">
                  <div className="font-semibold text-emerald-600">
                    {note.title}
                  </div>
                </td>
                <td className="px-6 py-4 max-w-xs">
                  <div className="truncate text-gray-600">{note.content}</div>
                </td>
                <td className="px-6 py-4 max-w-xs">
                  <div className="flex gap-4 text-gray-600">
                    <button
                      onClick={() => handleDelete(note.id)}
                      disabled={loading}
                      aria-label="Hapus Catatan"
                      className="transition-colors duration-300 hover:text-red-600"
                    >
                      <AiFillDelete className="text-red-400 text-2xl" />
                    </button>
                    <button
                      onClick={() => handleEdit(note.id)}
                      disabled={loading}
                      aria-label="Edit Catatan"
                      className="transition-colors duration-300 hover:text-blue-600"
                    >
                      <AiFillEdit className="text-blue-400 text-2xl" />
                    </button>
                  </div>
                </td>
              </>
            )}
          />
        )}
      </div>
    </div>
  );
}
