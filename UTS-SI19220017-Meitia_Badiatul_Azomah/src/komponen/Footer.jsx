import React from "react";
import Tombol from './atoms/tombol';
import Logo from './Logo';
import Navlink from "./Navlink";


export default function Footer() {
    return (
        <footer>
            <div className="row py-5 px-3 ">
                <div className="col-12 bg-light">
                    <div className="row">
                        <div className="col-6">
                            <h3 className="page-title">Konsultasi Lebih Lanjut</h3>
                            <p>Untuk Informasi Lebih Lanjut, Silakan Konsultasi dengan Kami!</p>
                        </div>
                        <div className="col-6 text-end">
                            <Tombol className="btn btn-primary">Kontak Kami</Tombol>
                        </div>
                    </div>
                </div>

                <div className="col-12 bg-secondary">
                    <div className="d-flex justify-content-between py-3 px-3 ">
                        <Logo href="" src="https://i.pinimg.com/736x/db/0b/f9/db0bf9fbb713d8f683146027fef7d2f8.jpg" width="80px" />
                        <div className="">
                            <ul className="d-flex gap-5 text-light">
                                <Navlink color={"text-white"}>Beranda</Navlink>
                                <Navlink color={"text-white"}>Produk</Navlink>
                                <Navlink color={"text-white"}>Tentang</Navlink>
                            </ul>
                        </div>
                        <div className="d-flex gap-3">
                            <i className="text-light fa-brands fa-youtube"></i>
                            <i className="text-light fa-brands fa-facebook"></i>
                            <i className="text-light fa-brands fa-twiter"></i>
                            <i className="text-light fa-brands fa-instagram"></i>
                            <i className="text-light fa-brands fa-linkedin"></i>
                        </div>
                    </div>
                    <div className="text-center py-4 text-light">
                        Website Hiburan @ 2024 All right reversed
                    </div>
                </div>
            </div>


        </footer>
    );
}