// export default function PageHeader() {
//     return (
//         <div id="pageheader-container" className="flex items-center justify-between p-4">
//             <div id="pageheader-left" className="flex flex-col">
//                 <span id="page-title" className="text-3xl font-semibold">
//                     Dashboard
//                 </span>
//                 <div id="breadcrumb-links" className="flex items-center font-medium space-x-2 mt-2">
//                     <span id="breadcrumb-home" className="text-gray-500">Dashboard</span>
//                     <span id="breadcrumb-separator" className="text-gray-500">/</span>
//                     <span id="breadcrumb-current" className="text-gray-500">Order List</span>
//                 </div>
//             </div>
//             <div id="action-button">
//                 <button id="add-button" className="bg-hijau text-white px-4 py-2 rounded-lg">
// 		                Add Button
// 		            </button>
//             </div>
//         </div>
//     );
// }

export default function PageHeader({ title, breadcrumb, children }) {
    return (
        <div id="pageheader-container" className="flex items-center justify-between p-4">
            <div id="pageheader-left" className="flex flex-col">
                <span id="page-title" className="text-3xl font-semibold">
                    {title}
                </span>
                <div id="breadcrumb-links" className="flex items-center font-medium space-x-2 mt-2">
                    {breadcrumb && Array.isArray(breadcrumb)
                        ? breadcrumb.map((item, index) => (
                              <span key={index} className="text-gray-500">
                                  {item}
                                  {index < breadcrumb.length - 1 && <span className="mx-2">/</span>}
                              </span>
                          ))
                        : null}
                </div>
            </div>

            {/* Add Buttons container */}
            <div id="action-buttons" className="flex gap-4">
                <button id="add-button" className="bg-hijau text-white px-4 py-2 rounded-lg">
                    Add Button
                </button>
                <button id="add-order" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                    Add Order
                </button>
                <button id="add-customer" className="bg-green-500 text-white px-4 py-2 rounded-lg">
                    Add Customer
                </button>
            </div>
        </div>
    );
}
