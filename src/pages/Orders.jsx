// export default function Orders() {
//     return (
//         <div>
//             Ini halaman Orders
//         </div>
//     )
// }

// import PageHeader from "../components/PageHeader"; // Pastikan path-nya sesuai dengan struktur proyekmu

// export default function Orders() {
//   return (
//     <div className="p-4">
//       <PageHeader title="Orders" breadcrumb={["Orders", "Order List"]}>
//         <button className="bg-hijau text-white px-4 py-2 rounded-lg">
//           Add Order
//         </button>
//       </PageHeader>

//       {/* Konten halaman Orders */}
//       <div className="mt-6">
//         <p>Ini halaman Orders</p>
//         {/* Tambahkan tabel atau daftar pesanan di sini */}
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ordersData from "../Orders.json"; // Pastikan file Orders.json sudah ada

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState("");
  const [sortAsc, setSortAsc] = useState(true);

  useEffect(() => {
    setOrders(ordersData);
  }, []);

  const handleSort = () => {
    const sorted = [...orders].sort((a, b) => {
      return sortAsc
        ? a.OrderDate.localeCompare(b.OrderDate)
        : b.OrderDate.localeCompare(a.OrderDate);
    });
    setOrders(sorted);
    setSortAsc(!sortAsc);
  };

  const filteredOrders = orders.filter((order) =>
    order.CustomerName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Orders</h1>
        <Link
          to="/formorders"
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-xl transition-all duration-300"
        >
          Add Order
        </Link>
      </div>

      {/* Search and Sort */}
      <div className="flex items-center justify-between mb-4">
        <input
          type="text"
          placeholder="Search by customer..."
          onChange={(e) => setSearch(e.target.value)}
          className="w-1/3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <button
          onClick={handleSort}
          className="text-sm text-green-600 hover:underline"
        >
          Sort by Date {sortAsc ? "↑" : "↓"}
        </button>
      </div>

      {/* Table */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl shadow-lg overflow-hidden"
      >
        <table className="w-full text-sm text-left text-gray-700">
          <thead className="bg-gradient-to-r from-green-400 to-green-600 text-white text-xs uppercase">
            <tr>
              <th className="px-6 py-3">Order ID</th>
              <th className="px-6 py-3">Customer</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Total</th>
              <th className="px-6 py-3">Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.length ? (
              filteredOrders.map((order, idx) => (
                <motion.tr
                  key={order.OrderID}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  className={`${
                    idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-green-50 transition duration-200`}
                >
                  <td className="px-6 py-4">{order.OrderID}</td>
                  <td className="px-6 py-4">{order.CustomerName}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        order.Status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {order.Status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    Rp {order.TotalPrice.toLocaleString()}
                  </td>
                  <td className="px-6 py-4">{order.OrderDate}</td>
                </motion.tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center px-6 py-6 text-gray-400">
                  No orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </motion.div>
    </div>
  );
}
