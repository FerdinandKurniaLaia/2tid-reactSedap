import productData from "./products.json";
export default function productList() {
  return (
    <div className="p-8">
      {productData.map((item) => (
        <div
          key={item.id}
          className="border p-4 mb-4 rounded-lg shadow-md bg-white"
        >
          <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
          <p className="text-gray-600">{item.description}</p>
          <p className="text-gray-600">{item.category}</p>
          <p className="text-gray-600">{item.discountPercentage}</p>
          <p className="text-gray-600">{item.rating}</p>
          <p className="text-gray-600">{item.stock}</p>
          <p className="text-gray-600">{item.tags}</p>
          <p className="text-gray-600">{item.brand}</p>
          {item.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded-full mr-2"
            >
              {tag}
            </span>
          ))}
          {item.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded-full mr-2"
            >
              {tag}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}