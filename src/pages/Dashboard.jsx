// import PageHeader from "../components/PageHeader";
// import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";

// export default function Dashboard() {
//     return (
//         <div id="dashboard-container" className="p-6">
//             <PageHeader />
//             <div id="dashboard-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
//                 <div id="dashboard-orders" className="flex items-center gap-4 bg-white p-4 shadow rounded-lg">
//                     <div id="orders-icon" className="bg-green-500 text-white rounded-full p-4">
//                         <FaShoppingCart className="text-xl" />
//                     </div>
//                     <div id="orders-info" className="flex flex-col">
//                         <span id="orders-count" className="text-2xl font-bold">75</span>
//                         <span id="orders-text" className="text-gray-500">Total Orders</span>
//                     </div>
//                 </div>

//                 <div id="dashboard-delivered" className="flex items-center gap-4 bg-white p-4 shadow rounded-lg">
//                     <div id="delivered-icon" className="bg-blue-500 text-white rounded-full p-4">
//                         <FaTruck className="text-xl" />
//                     </div>
//                     <div id="delivered-info" className="flex flex-col">
//                         <span id="delivered-count" className="text-2xl font-bold">175</span>
//                         <span id="delivered-text" className="text-gray-500">Total Delivered</span>
//                     </div>
//                 </div>

//                 <div id="dashboard-canceled" className="flex items-center gap-4 bg-white p-4 shadow rounded-lg">
//                     <div id="canceled-icon" className="bg-red-500 text-white rounded-full p-4">
//                         <FaBan className="text-xl" />
//                     </div>
//                     <div id="canceled-info" className="flex flex-col">
//                         <span id="canceled-count" className="text-2xl font-bold">40</span>
//                         <span id="canceled-text" className="text-gray-500">Total Canceled</span>
//                     </div>
//                 </div>

//                 <div id="dashboard-revenue" className="flex items-center gap-4 bg-white p-4 shadow rounded-lg">
//                     <div id="revenue-icon" className="bg-yellow-500 text-white rounded-full p-4">
//                         <FaDollarSign className="text-xl" />
//                     </div>
//                     <div id="revenue-info" className="flex flex-col">
//                         <span id="revenue-amount" className="text-2xl font-bold">Rp.128</span>
//                         <span id="revenue-text" className="text-gray-500">Total Revenue</span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

import PageHeader from "../components/PageHeader";
import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";

export default function Dashboard() {
    return (
        <div id="dashboard-container" className="p-6">
            <PageHeader 
                title="Dashboard" 
                breadcrumb={["Dashboard", "OrderList"]} 
            />
            
            <div id="dashboard-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                
                {/* Total Orders */}
                <div id="dashboard-orders" className="flex items-center gap-4 bg-white p-4 shadow rounded-lg">
                    <div id="orders-icon" className="bg-green-500 text-white rounded-full p-4">
                        <FaShoppingCart className="text-xl" />
                    </div>
                    <div id="orders-info" className="flex flex-col">
                        <span id="orders-count" className="text-2xl font-bold">75</span>
                        <span id="orders-text" className="text-gray-500">Total Orders</span>
                    </div>
                </div>

                {/* Total Delivered */}
                <div id="dashboard-delivered" className="flex items-center gap-4 bg-white p-4 shadow rounded-lg">
                    <div id="delivered-icon" className="bg-blue-500 text-white rounded-full p-4">
                        <FaTruck className="text-xl" />
                    </div>
                    <div id="delivered-info" className="flex flex-col">
                        <span id="delivered-count" className="text-2xl font-bold">175</span>
                        <span id="delivered-text" className="text-gray-500">Total Delivered</span>
                    </div>
                </div>

                {/* Total Canceled */}
                <div id="dashboard-canceled" className="flex items-center gap-4 bg-white p-4 shadow rounded-lg">
                    <div id="canceled-icon" className="bg-red-500 text-white rounded-full p-4">
                        <FaBan className="text-xl" />
                    </div>
                    <div id="canceled-info" className="flex flex-col">
                        <span id="canceled-count" className="text-2xl font-bold">40</span>
                        <span id="canceled-text" className="text-gray-500">Total Canceled</span>
                    </div>
                </div>

                {/* Total Revenue */}
                <div id="dashboard-revenue" className="flex items-center gap-4 bg-white p-4 shadow rounded-lg">
                    <div id="revenue-icon" className="bg-yellow-500 text-white rounded-full p-4">
                        <FaDollarSign className="text-xl" />
                    </div>
                    <div id="revenue-info" className="flex flex-col">
                        <span id="revenue-amount" className="text-2xl font-bold">Rp.128</span>
                        <span id="revenue-text" className="text-gray-500">Total Revenue</span>
                    </div>
                </div>
                
            </div>
        </div>
    );
}
