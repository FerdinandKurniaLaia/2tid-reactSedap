import { useState } from "react";
import { motion } from "framer-motion";
import { FaRegStar, FaStar, FaStarHalfAlt, FaTimesCircle } from "react-icons/fa";
import membersData from "../members.json";

const getMemberIcon = (type, big = false) => {
  const sizeClass = big ? "text-4xl mr-2" : "text-3xl";
  switch (type) {
    case "silver":
      return <FaRegStar className={`text-gray-400 ${sizeClass}`} />;
    case "gold":
      return <FaStar className={`text-yellow-400 ${sizeClass}`} />;
    case "platinum":
      return <FaStarHalfAlt className={`text-blue-400 ${sizeClass}`} />;
    default:
      return <FaRegStar />;
  }
};

const getBadgeStyle = (type) => {
  switch (type) {
    case "gold":
      return "bg-yellow-100 text-yellow-700";
    case "platinum":
      return "bg-blue-100 text-blue-700";
    case "silver":
      return "bg-gray-100 text-gray-700";
    default:
      return "bg-gray-200 text-gray-700";
  }
};

export default function Customers() {
  const [members] = useState(membersData);
  const [emailInput, setEmailInput] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleCheckMember = (e) => {
    e.preventDefault();

    // Validasi email
    if (!emailInput.trim()) {
      setError("Email tidak boleh kosong.");
      setResult(null);
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput)) {
      setError("Format email tidak valid.");
      setResult(null);
      return;
    }

    setError("");

    // Cari member berdasarkan email
    const foundMember = members.find(
      (member) => member.email.toLowerCase() === emailInput.toLowerCase()
    );
    setResult(foundMember || null);
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Daftar Member Kami
      </h2>

      {/* Form Cek Keanggotaan */}
      <form
        onSubmit={handleCheckMember}
        className="max-w-lg mx-auto mb-10 p-6 bg-white shadow-md rounded-xl"
      >
        <h3 className="text-xl font-semibold mb-4 text-gray-800">
          🔍 Cek Keanggotaan
        </h3>
        <input
          type="email"
          placeholder="Masukkan email Anda"
          value={emailInput}
          onChange={(e) => setEmailInput(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-md transition duration-300"
        >
          Cek Sekarang
        </button>
      </form>

      {/* Hasil Cek */}
      {result ? (
        <div className="max-w-lg mx-auto mb-8 p-6 border rounded-xl shadow-sm bg-green-50 flex items-start gap-3">
          {getMemberIcon(result.tipe_member, true)}
          <div>
            <p className="text-lg font-medium text-green-800 mb-1">
              🧾 Selamat datang, <strong>{result.nama}</strong>!
            </p>
            <p className={`inline-block px-3 py-1 text-sm rounded-full font-semibold ${getBadgeStyle(result.tipe_member)}`}>
              Anda adalah member {result.tipe_member.toUpperCase()}.
            </p>
          </div>
        </div>
      ) : result === null && emailInput && !error ? (
        <div className="max-w-lg mx-auto mb-8 p-6 border rounded-xl shadow-sm bg-red-50 flex items-center gap-3">
          <FaTimesCircle className="text-red-400 text-3xl" />
          <p className="text-red-700 font-medium">
            ❌ Email tidak terdaftar sebagai member.
          </p>
        </div>
      ) : null}

      {/* Daftar Member */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {members.map((member) => (
          <motion.div
            key={member.member_id}
            className="bg-white border border-gray-200 hover:border-green-300 backdrop-blur-sm shadow-xl hover:shadow-2xl rounded-2xl p-6 cursor-pointer transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:bg-green-50"
            whileHover={{ scale: 1.04 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-800">{member.nama}</h3>
              {getMemberIcon(member.tipe_member)}
            </div>
            <p className="text-gray-600 text-sm mb-3">{member.email}</p>
            <span
              className={`inline-block px-4 py-1 text-xs font-semibold rounded-full ${getBadgeStyle(member.tipe_member)}`}
            >
              {member.tipe_member.toUpperCase()}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
