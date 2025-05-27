import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom"; // Import Link here

export default function About() {
    const navigate = useNavigate();

    return (
        <div>
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                style={{
                    backgroundImage: "url('/img/about.jpg')", // Ganti dengan path gambar yang sesuai
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
                        fontFamily: "'Gravitica Light Demo', sans-serif", // Font Gravitica Light Demo
                    }}
                >
                    Tentang Sedap
                </h1>
                <p style={{ fontSize: "1.25rem", fontFamily: "'Gravitica Light Demo', sans-serif" }}>
                    {/* Link komponen yang mengarah ke halaman Home */}
                    <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
                        Beranda
                    </Link>{" "}
                    / Tentang
                </p>
            </motion.div>

            <section style={{ padding: "60px 20px", textAlign: "center" }}>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap", marginTop: "20px" }}>
                    {/* Left Image Section */}
                    <div style={{ flex: "1", padding: "20px", display: "flex", justifyContent: "center" }}>
                        <img
                            src="/img/about1.jpg" // Ganti dengan path gambar yang sesuai
                            alt="Makanan Indonesia"
                            style={{
                                width: "80%", // Mengurangi ukuran gambar agar tidak terlalu besar
                                height: "auto",
                                borderRadius: "8px",
                                boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                                objectFit: "cover",
                                maxWidth: "500px", // Membatasi lebar gambar agar tidak terlalu besar
                            }}
                        />
                    </div>

                    {/* Right Text Section */}
                    <div style={{
                        flex: "1",
                        padding: "20px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center", // Menjaga teks tetap terpusat secara vertikal
                        alignItems: "flex-start", // Menyusun teks ke kiri
                        textAlign: "left" // Menyesuaikan agar teks tidak di tengah
                    }}>
                        <h2 style={{
                            fontSize: "2.5rem",
                            fontWeight: "bold",
                            color: "#28a745",
                            fontFamily: "'Abril Fatface', serif", // Ganti font ke Abril Fatface Regular
                            marginBottom: "15px" // Menambahkan jarak antara judul dan teks
                        }}>
                            Merayakan Kekayaan Kuliner Indonesia
                        </h2>
                        <p style={{
                            color: "#555",
                            fontSize: "1rem",
                            maxWidth: "600px",
                            marginTop: "10px", // Mengurangi jarak antara judul dan teks
                            fontFamily: "'Gravitica Light Demo', sans-serif",
                            lineHeight: "1.6" // Mengatur jarak antar baris agar lebih nyaman dibaca
                        }}>
                            Di Sedap, kami menghadirkan cita rasa kuliner Indonesia yang kaya dan beragam langsung ke meja makan Anda. Dari kekayaan rempah masakan Padang yang pedas hingga kelezatan masakan Jawa, menu kami adalah perayaan rasa otentik Indonesia. Setiap hidangan kami sajikan dengan bahan-bahan berkualitas terbaik, memastikan Anda merasakan esensi sejati masakan Indonesia.
                        </p>

                        <div style={{ marginTop: "20px" }}>
                            <div style={{ display: "flex", gap: "30px" }}>
                                <div>
                                    <h4 style={{ color: "#28a745", fontFamily: "'Gravitica Light Demo', sans-serif" }}>Resep Otentik</h4>
                                    <p style={{ color: "#555", fontFamily: "'Gravitica Light Demo', sans-serif" }}>
                                        Resep kami diturunkan dari generasi ke generasi, memastikan setiap suapan adalah refleksi sejati dari budaya Indonesia.
                                    </p>
                                </div>
                                <div>
                                    <h4 style={{ color: "#28a745", fontFamily: "'Gravitica Light Demo', sans-serif" }}>Bahan Berkualitas</h4>
                                    <p style={{ color: "#555", fontFamily: "'Gravitica Light Demo', sans-serif" }}>
                                        Kami hanya menggunakan bahan-bahan segar yang dipasok langsung dari petani lokal untuk memastikan setiap hidangan penuh dengan cita rasa autentik.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Section untuk Misi Kami */}
                <section style={{ padding: "60px 20px", backgroundColor: "#f8f8f8", textAlign: "center" }}>
                    <h2 style={{
                        fontSize: "2.5rem",
                        fontWeight: "bold",
                        color: "#28a745",
                        fontFamily: "'Abril Fatface', serif", // Ganti font ke Abril Fatface Regular
                    }}>
                        Misi Kami: Membawa Sedap ke Setiap Rumah
                    </h2>
                    <p style={{ color: "#555", fontSize: "1rem", maxWidth: "800px", margin: "auto", marginTop: "20px", fontFamily: "'Gravitica Light Demo', sans-serif" }}>
                        Misi kami sederhana: untuk membuat masakan Indonesia dapat dinikmati oleh siapa saja, di mana saja. Melalui Sedap, kami ingin berbagi tradisi kuliner kaya Indonesia dengan dunia. Apakah itu untuk pertemuan keluarga atau perayaan besar, kami bertujuan untuk membawa rasa Indonesia yang berani ke meja makan Anda dengan setiap hidangan.
                    </p>
                </section>
            </section>

        </div>
    );
}
