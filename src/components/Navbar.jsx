import { FaTwitter, FaFacebookF, FaInstagram, FaUser } from "react-icons/fa";
import { FiMail, FiPhone, FiSearch, FiShoppingCart } from "react-icons/fi";
import { MdArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom"; 

export default function Navbar() {
  return (
    <div className="w-full shadow-sm">
      <div className="bg-white px-6 py-2 flex justify-between items-center text-sm text-gray-700">
        <div className="flex items-center space-x-4">
          <FaTwitter className="cursor-pointer hover:text-green-500" />
          <FaFacebookF className="cursor-pointer hover:text-green-500" />
          <FaInstagram className="cursor-pointer hover:text-green-500" />
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-1">
            <FiMail className="text-green-500" />
            <span>Email</span>
            <span className="text-gray-500">info@organik.com</span>
          </div>

          <div className="text-3xl font-extrabold text-green-700 tracking-wide drop-shadow-sm">
            <span className="text-orange-500">SEDAP</span>
          </div>

          {/* Telepon */}
          <div className="flex items-center space-x-1">
            <FiPhone className="text-green-500" />
            <span>Phone</span>
            <span className="text-gray-500">92 666 888 0000</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <FiSearch className="cursor-pointer hover:text-green-500" />
          <FiShoppingCart className="cursor-pointer hover:text-green-500" />
        </div>
      </div>

      {/* Navbar */}
      <div className="bg-gray-100 px-6 py-2 flex justify-between items-center text-sm">
        {/* Login/Register */}
        <div className="flex items-center space-x-2 text-green-600 cursor-pointer">
          <FaUser />
          {/* Menggunakan Link untuk navigasi ke halaman login */}
          <Link to="/login" className="hover:text-green-600">
            <span>Login</span>
          </Link>
          <span>/</span>
          <Link to="/register" className="hover:text-green-600">
            <span>Register</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="flex space-x-6 text-gray-600 font-medium">
          <Link to="/">
            <li className="hover:text-green-600 cursor-pointer">Home</li>
          </Link>
          <Link to="/about">
            <li className="hover:text-green-600 cursor-pointer">About</li>
          </Link>
          <Link to="/kontak">
            <li className="hover:text-green-600 cursor-pointer">Contact</li>
          </Link>
          <Link to="/cekanggota">
            <li className="hover:text-green-600 cursor-pointer">Cek Keanggotaan</li>
          </Link>
          
        </ul>

        {/* Language Dropdown */}
        <div className="flex items-center space-x-1 cursor-pointer">
          <img
            src="https://flagcdn.com/gb.svg"
            alt="flag"
            className="w-5 h-5"
          />
          <span className="text-gray-700">English</span>
          <MdArrowDropDown size={20} />
        </div>
      </div>
    </div>
  );
}
