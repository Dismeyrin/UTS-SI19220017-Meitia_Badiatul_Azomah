import React from "react";
import Tombol from './atoms/tombol';

export default function Hero({ title, desc, src }) {
    return (
        <div className="row py-5 px-4 bg-light">
            <div className="col-6">
                <h2 className="mb-5">{title}</h2>
                <p>{desc}</p>
                <div className="mt-5 py-3">
                    <Tombol className="btn btn-primary me-2">Produk Kami</Tombol>
                    <Tombol className="btn btn-outline-primary">Pesan Sekarang</Tombol>
                </div>
            </div>
            <div className="col-6">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://i.pinimg.com/474x/ae/bb/fb/aebbfbad225030863a0f3e044baa9fdd.jpg" className="img-thumbnail d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://i.pinimg.com/474x/82/7e/2b/827e2b13de3feb4c41904925b3272a25.jpg" className="img-thumbnail d-block w-100" alt=".../" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://i.pinimg.com/474x/43/64/c6/4364c606ddb6af3b0c76199a18f0048b.jpg" className="img-thumbnail d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
}