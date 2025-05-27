import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";
import { HiLocationMarker } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6 px-6 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Brand Info */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold text-green-400">SEDAP</h2>
          <p className="mt-4 text-sm text-gray-300">
            Temukan cita rasa Nusantara dari berbagai daerah dengan bahan pilihan dan resep tradisional khas Indonesia.
          </p>
        </div>

        {/* Kontak */}
        <div>
          <h3 className="text-green-400 font-semibold mb-4">Kontak</h3>
          <ul className="text-sm space-y-2">
            <li className="flex items-center">
              <FiPhone className="mr-2 text-green-400" />
              0812 3456 7890
            </li>
            <li className="flex items-center">
              <FiMail className="mr-2 text-green-400" />
              info@sedap.co.id
            </li>
            <li className="flex items-center">
              <HiLocationMarker className="mr-2 text-green-400" />
              Jl. Cita Rasa No.88, Jakarta
            </li>
          </ul>
        </div>

        {/* Link Navigasi */}
        <div>
          <h3 className="text-green-400 font-semibold mb-4">Tautan</h3>
          <ul className="text-sm space-y-2">
            <li className="hover:text-green-400 cursor-pointer">Menu Populer</li>
            <li className="hover:text-green-400 cursor-pointer">Tentang Kami</li>
            <li className="hover:text-green-400 cursor-pointer">Kontak</li>
            <li className="hover:text-green-400 cursor-pointer">Bantuan</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-green-400 font-semibold mb-4">Berlangganan</h3>
          <p className="text-sm text-gray-300 mb-4">Dapatkan info resep dan promo terbaru.</p>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Alamat Email"
              className="p-2 rounded text-black text-sm"
            />
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded text-sm font-medium"
            >
              Berlangganan
            </button>
          </form>
        </div>
      </div>

      {/* Sosial & Copyright */}
      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <div className="mb-4 md:mb-0">
          © 2025 SEDAP. Semua hak dilindungi.
        </div>
        <div className="flex space-x-4">
          <FaTwitter className="hover:text-green-400 cursor-pointer" />
          <FaFacebookF className="hover:text-green-400 cursor-pointer" />
          <FaInstagram className="hover:text-green-400 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
}
