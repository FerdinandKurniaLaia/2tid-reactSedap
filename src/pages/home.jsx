import { useState } from "react";
import {
  FaTruck,
  FaMapMarkerAlt,
  FaUndo,
  FaEye,
  FaHeart,
  FaShoppingCart,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import products from "../product.json";
import { motion } from "framer-motion";
import testimonials from "../testimonials.json";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate();

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{
          backgroundImage: "url('/img/gambar1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "500px",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            textShadow: "2px 2px 5px rgba(0,0,0,0.5)",
            margin: 0,
          }}
        >
          <span style={{ display: "block" }}>Organic</span>
          <span style={{ display: "block" }}>Food Market</span>
        </h1>
        <button
          style={{
            marginTop: "20px",
            padding: "10px 25px",
            fontSize: "16px",
            backgroundColor: "#28a745",
            border: "none",
            color: "#fff",
            cursor: "pointer",
            borderRadius: "5px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
          }}
          onClick={() => navigate("/order")}
        >
          Order Now
        </button>
      </motion.div>

      {/* Floating Info Boxes */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        style={{
          maxWidth: "900px",
          margin: "-60px auto 40px auto",
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          padding: "30px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {[FaUndo, FaTruck, FaMapMarkerAlt].map((Icon, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.2 }}
            style={{
              flex: "1 1 200px",
              maxWidth: "250px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Icon size={40} color="#28a745" />
            <h4 style={{ margin: "10px 0" }}>
              {
                ["Kebijakan Pengembalian", "Gratis Ongkir", "Lokasi Toko"][
                  index
                ]
              }
            </h4>
            <p>
              {
                [
                  "Garansi uang kembali",
                  "Untuk semua pesanan di atas Rp 100.000",
                  "Temukan lokasi toko terdekat",
                ][index]
              }
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Search Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        style={{ padding: "20px", textAlign: "center" }}
      >
        <input
          type="text"
          placeholder="Search for food..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            padding: "12px 20px",
            fontSize: "18px",
            borderRadius: "30px",
            border: "2px solid #28a745",
            width: "100%",
            maxWidth: "500px",
            marginBottom: "20px",
            outline: "none",
            transition: "all 0.3s ease",
          }}
        />
      </motion.div>

      {/* Product Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
          maxWidth: "1000px",
          margin: "0 auto",
          justifyItems: "center",
        }}
      >
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 12px 24px rgba(0, 0, 0, 0.2)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{
                width: "100%",
                maxWidth: "300px",
                borderRadius: "10px",
                overflow: "hidden",
                backgroundColor: "#fff",
                textAlign: "center",
                cursor: "pointer",
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div style={{ position: "relative", padding: "15px" }}>
                {/* Hover Icons */}

                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    display: "flex",
                    gap: "15px",
                    background: "rgba(255, 255, 255, 0.9)",
                    padding: "10px 15px",
                    borderRadius: "30px",
                    opacity: hoveredIndex === index ? 1 : 0,
                    transition: "opacity 0.3s ease",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FaEye
                    size={20}
                    color="#28a745"
                    style={{ cursor: "pointer" }}
                  />
                  <FaHeart
                    size={20}
                    color="#28a745"
                    style={{ cursor: "pointer" }}
                  />
                  <FaShoppingCart
                    size={20}
                    color="#28a745"
                    style={{ cursor: "pointer" }}
                  />
                </div>

                {/* Tag */}
                {product.tag && (
                  <span
                    style={{
                      position: "absolute",
                      top: "10px",
                      left: "10px",
                      background: "#000",
                      color: "#fff",
                      padding: "4px 8px",
                      borderRadius: "4px",
                      fontSize: "12px",
                    }}
                  >
                    {product.tag}
                  </span>
                )}

                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    transition: "transform 0.3s ease",
                  }}
                />
              </div>

              {/* Product Details */}
              <div style={{ textAlign: "center", padding: "10px 15px" }}>
                <h4>{product.name}</h4>
                <div style={{ color: "#28a745", marginBottom: "5px" }}>
                  {"★".repeat(product.rating).padEnd(5, "☆")}
                </div>
                <p style={{ fontWeight: "bold", margin: "5px 0" }}>
                  Rp {product.price.toLocaleString("id-ID")}
                </p>
                <p style={{ fontSize: "14px", color: "#555" }}>
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))
        ) : (
          <p style={{ textAlign: "center", width: "100%" }}>
            No products found
          </p>
        )}
      </motion.div>
      {/* Testimonial Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          marginTop: "80px",
          padding: "40px 20px",
          backgroundColor: "#f5f5f5",
          textAlign: "center",
        }}
      >
        <p
          style={{ color: "#28a745", fontWeight: "bold", marginBottom: "10px" }}
        >
          Testimoni Pelanggan
        </p>
        <h2
          style={{
            fontSize: "2.5rem",
            marginBottom: "40px",
            fontWeight: "bold",
          }}
        >
          Apa Kata Mereka?
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "30px",
            justifyContent: "center",
            alignItems: "stretch", // Ensures the boxes stretch to the same height
            margin: "0 auto",
            maxWidth: "1200px", // To make the container limited in width
          }}
        >
          {testimonials.map((person, index) => (
            <motion.div
              whileHover={{
                backgroundColor: "#28a745",
                scale: 1.05,
                boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
              }}
              transition={{ type: "spring", stiffness: 200 }}
              key={index}
              style={{
                background: "#fff",
                padding: "30px 20px",
                maxWidth: "300px",
                borderRadius: "10px",
                textAlign: "center",
                position: "relative",
                borderBottom: "4px solid #28a745",
                color: "#333",
                display: "flex", // Enables Flexbox for inner content
                flexDirection: "column", // Stacks elements vertically
                justifyContent: "space-between", // Makes sure content is spaced out evenly
                minHeight: "350px", // Ensures all boxes have the same minimum height
              }}
            >
              <img
                src={person.image}
                alt={person.name}
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  marginBottom: "20px",
                  margin: "0 auto",
                }}
              />
              <motion.p
                whileHover={{ color: "#fff" }}
                style={{
                  fontSize: "14px",
                  color: "#555",
                  marginBottom: "15px",
                  flex: 1, // Ensures text takes up available space
                }}
              >
                {person.text}
              </motion.p>
              <motion.h4
                whileHover={{ color: "#fff" }}
                style={{ color: "#555", margin: "0" }}
              >
                {person.name}
              </motion.h4>
              <motion.p
                whileHover={{ color: "#eee" }}
                style={{ fontSize: "13px", color: "#555" }}
              >
                {person.role}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Manual Image Shop Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          marginTop: "60px",
          padding: "40px 20px",
          backgroundColor: "#f5f5f5",
          textAlign: "center",
        }}
      >
        <p
          style={{ color: "#28a745", fontWeight: "bold", marginBottom: "10px" }}
        >
          Cicipi Rasa Asli Indonesia
        </p>
        <h2
          style={{
            fontSize: "2.5rem",
            marginBottom: "40px",
            fontWeight: "bold",
          }}
        >
          Hidangan Khas Pilihan Kami
        </h2>

        {/* Product grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "20px",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 auto",
            maxWidth: "1200px",
          }}
        >
          {[
            "./img/sateayam.jpg",
            "./img/rendang.jpg",
            "./img/gadogado.jpg",
            "./img/cendol.jpg",
            "./img/keraktelor.jpg",
          ].map((imgSrc, index) => (
            <motion.div
              key={index}
              className="product-card" // Tambahkan class unik
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{
                position: "relative",
                background: "#fff",
                borderRadius: "10px",
                overflow: "hidden",
                cursor: "pointer",
              }}
            >
              {/* Gambar */}
              <img
                src={imgSrc}
                alt={`Product ${index + 1}`}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  display: "block",
                }}
              />

              {/* Overlay muncul saat hover */}
              <div
                className="overlay"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    backgroundColor: "#4CAF50",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "30px",
                    fontWeight: "bold",
                  }}
                >
                  +
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CSS khusus hover effect */}
        {/* CSS khusus hover effect */}
        <style>
          {`
    .product-card:hover .overlay {
      opacity: 1 !important;
    }
  `}
        </style>
      </motion.div>
    </div>
  );
}
