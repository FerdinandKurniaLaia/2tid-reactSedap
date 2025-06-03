import { BsFillPeopleFill } from "react-icons/bs";
import { AiOutlineOrderedList } from "react-icons/ai";
import { MdDashboard } from "react-icons/md";
import { MdFastfood } from "react-icons/md";
import { MdNote } from 'react-icons/md';

import SidebarMenuItem from "../components/SideBarMenuItem";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-xl p-4  space-x-2
    ${
      isActive
        ? "text-hijau bg-green-200 font-extrabold"
        : "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
    }`;

  return (
    <div
      id="sidebar"
      className="flex min-h-screen w-90 flex-col bg-white p-10 shadow-lg"
    >
      {/* Logo */}
      <div id="sidebar-logo" className="flex flex-col">
        <span
          id="logo-title"
          className="font-poppins text-[48px] text-gray-900"
        >
          Sedap{" "}
          <b id="logo-dot" className="text-hijau">
            .
          </b>
        </span>
        <span id="logo-subtitle" className="font-semibold text-gray-400">
          Modern Admin Dashboard
        </span>
      </div>

      {/* List Menu */}
      <div id="sidebar-menu" className="mt-10">
        <ul id="menu-list" className="space-y-3">
          <SidebarMenuItem to="/Dashboard" icon={MdDashboard} label="Dashboard" />
          <SidebarMenuItem to="/orders" icon={AiOutlineOrderedList} label="Orders" />
          <SidebarMenuItem to="/customers" icon={BsFillPeopleFill} label="Customers" />
          <SidebarMenuItem to="/user" icon={AiOutlineOrderedList} label="User List" />
          <SidebarMenuItem to="/products" icon={MdFastfood} label="Products" />
          <SidebarMenuItem to="/notes" icon={MdNote} label="Notes" />
          {/* Error Pages */}
          <SidebarMenuItem to="/error/400" icon={MdDashboard} label="Error 400" />
          <SidebarMenuItem to="/error/401" icon={MdDashboard} label="Error 401" />
          <SidebarMenuItem to="/error/403" icon={MdDashboard} label="Error 403" />
          <SidebarMenuItem to="/error/404" icon={MdDashboard} label="Error 404" />
        </ul>
      </div>

      {/* Footer */}
      <div id="sidebar-footer" className="mt-auto">
        <div
          id="footer-card"
          className="bg-hijau px-4 py-2 rounded-md shadow-lg mb-10 flex items-center"
        >
          <div id="footer-text" className="text-white text-sm">
            <span>Please organize your menus through button below!</span>
            <div
              id="add-menu-button"
              className="flex justify-center items-center p-2 mt-3 bg-white rounded-md space-x-2"
            >
              <span className="text-gray-600 flex items-center">Add Menus</span>
            </div>
          </div>
          <img
            id="footer-avatar"
            src="https://avatar.iran.liara.run/public/28"
            className="w-20 rounded-full"
          />
        </div>
        <span id="footer-brand" className="font-bold text-gray-400">
          Sedap Restaurant Admin Dashboard
        </span>
        <p id="footer-copyright" className="font-light text-gray-400">
          &copy; 2025 All Right Reserved
        </p>
      </div>
    </div>
  );
}
