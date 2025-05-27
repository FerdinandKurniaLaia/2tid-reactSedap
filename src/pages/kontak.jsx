import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiPhone } from "react-icons/fi"; // Phone icon
import { FiMail } from "react-icons/fi"; // Mail icon
import { HiLocationMarker } from "react-icons/hi"; // Location icon

export default function Kontak() {
    return (
        <div>
            {/* Bagian Hero */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                style={{
                    backgroundImage: "url('/img/about.jpg')", // Replace with actual path to your image
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
                        fontFamily: "'Abril Fatface', sans-serif", // Using Abril Fatface
                    }}
                >
                    Kontak Sedap
                </h1>
                <p style={{ fontSize: "1.25rem", fontFamily: "'Normatica', sans-serif" }}>
                    <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
                        Beranda
                    </Link>{" "}
                    / Contact
                </p>
            </motion.div>

            {/* Bagian Form Kontak dengan Gambar Kiri dan Kanan */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#fff",
                    padding: "40px",
                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
                }}
            >
                {/* Gambar Kiri dengan animasi bergerak dari kiri ke kanan */}
                <motion.div
                    initial={{ x: "-100%" }} // Start from left
                    animate={{ x: 0 }} // Stop at normal position
                    transition={{ type: "spring", stiffness: 100 }}
                    style={{ flex: 1, textAlign: "center" }}
                >
                    <img
                        src="/img/g1.jpg" // Path to your uploaded image
                        alt="Fruits"
                        style={{ width: "80%", borderRadius: "8px" }}
                    />
                </motion.div>

                {/* Form Kontak */}
                <div
                    style={{
                        flex: 1,
                        backgroundColor: "#fff",
                        padding: "20px",
                        borderRadius: "8px",
                        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    <h2
                        style={{
                            textAlign: "center",
                            fontFamily: "'Abril Fatface', sans-serif", // Using Abril Fatface
                            fontWeight: "bold", // Make text bold
                            fontSize: "2.5rem", // Larger font size
                            color: "#333",
                        }}
                    >
                        Do You’ve Any Question? <br /> Write us a Message
                    </h2>
                    <form>
                        <div style={{ marginBottom: "15px" }}>
                            <label style={{ fontWeight: "bold", color: "#333" }}>Your Name</label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                style={{
                                    width: "100%",
                                    padding: "12px",
                                    borderRadius: "4px",
                                    border: "1px solid #ccc",
                                    fontSize: "1rem",
                                    fontFamily: "'Normatica', sans-serif",
                                }}
                            />
                        </div>
                        <div style={{ marginBottom: "15px" }}>
                            <label style={{ fontWeight: "bold", color: "#333" }}>Phone Number</label>
                            <input
                                type="text"
                                placeholder="Phone Number"
                                style={{
                                    width: "100%",
                                    padding: "12px",
                                    borderRadius: "4px",
                                    border: "1px solid #ccc",
                                    fontSize: "1rem",
                                    fontFamily: "'Normatica', sans-serif",
                                }}
                            />
                        </div>
                        <div style={{ marginBottom: "15px" }}>
                            <label style={{ fontWeight: "bold", color: "#333" }}>Email Address</label>
                            <input
                                type="email"
                                placeholder="Email Address"
                                style={{
                                    width: "100%",
                                    padding: "12px",
                                    borderRadius: "4px",
                                    border: "1px solid #ccc",
                                    fontSize: "1rem",
                                    fontFamily: "'Normatica', sans-serif",
                                }}
                            />
                        </div>
                        <div style={{ marginBottom: "15px" }}>
                            <label style={{ fontWeight: "bold", color: "#333" }}>Subject</label>
                            <input
                                type="text"
                                placeholder="Subject"
                                style={{
                                    width: "100%",
                                    padding: "12px",
                                    borderRadius: "4px",
                                    border: "1px solid #ccc",
                                    fontSize: "1rem",
                                    fontFamily: "'Normatica', sans-serif",
                                }}
                            />
                        </div>
                        <div style={{ marginBottom: "15px" }}>
                            <label style={{ fontWeight: "bold", color: "#333" }}>Write a Message</label>
                            <textarea
                                placeholder="Your Message"
                                style={{
                                    width: "100%",
                                    padding: "12px",
                                    borderRadius: "4px",
                                    border: "1px solid #ccc",
                                    fontSize: "1rem",
                                    height: "150px",
                                    fontFamily: "'Normatica', sans-serif",
                                }}
                            ></textarea>
                        </div>
                        <div style={{ textAlign: "center" }}>
                            <button
                                type="submit"
                                style={{
                                    backgroundColor: "#4CAF50",
                                    color: "white",
                                    padding: "12px 20px",
                                    fontSize: "1rem",
                                    borderRadius: "4px",
                                    border: "none",
                                    fontFamily: "'Normatica', sans-serif",
                                }}
                            >
                                Send a Message
                            </button>
                        </div>
                    </form>
                </div>

                {/* Gambar Kanan dengan animasi bergerak dari kanan ke kiri */}
                <motion.div
                    initial={{ x: "100%" }} // Start from right
                    animate={{ x: 0 }} // Stop at normal position
                    transition={{ type: "spring", stiffness: 100 }}
                    style={{ flex: 1, textAlign: "center" }}
                >
                    <img
                        src="/img/g2.jpg" // Path to your uploaded image
                        alt="Fruits"
                        style={{ width: "80%", borderRadius: "8px" }}
                    />
                </motion.div>
            </div>

            {/* Bagian Contact Info */}
            <div style={{ display: "flex", justifyContent: "space-around", marginTop: "40px" }}>
                <div
                    style={{
                        textAlign: "center",
                        padding: "20px",
                        backgroundColor: "#fff",
                        borderRadius: "8px",
                        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
                        width: "30%",
                    }}
                >
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <FiPhone style={{ fontSize: "20px", color: "#4CAF50" }} />
                    </div>
                    <h3>Call Us</h3>
                    <p>0812 3456 7890</p>
                </div>

                <div
                    style={{
                        textAlign: "center",
                        padding: "20px",
                        backgroundColor: "#fff",
                        borderRadius: "8px",
                        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
                        width: "30%",
                    }}
                >
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <FiMail style={{ fontSize: "20px", color: "#4CAF50" }} />
                    </div>
                    <h3>Send Email</h3>
                    <p>info@sedap.co.id</p>
                </div>

                <div
                    style={{
                        textAlign: "center",
                        padding: "20px",
                        backgroundColor: "#fff",
                        borderRadius: "8px",
                        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
                        width: "30%",
                    }}
                >
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <HiLocationMarker style={{ fontSize: "20px", color: "#4CAF50" }} />
                    </div>
                    <h3>Visit Us</h3>
                    <p>Jl. Cita Rasa No.88, Jakarta</p>
                </div>
            </div>
        </div>
    );
}
