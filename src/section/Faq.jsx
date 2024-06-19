
const Faq = () => {
    return (
        < > <section className="faq-area-3 pt-120 pb-105">
            <div className="custom-container">
                <div className="row">
                    <div className="col-xl-6">
                        <div
                            className="afaq__img--3 mb-30 mr-70 wow fadeInUp"
                            data-wow-delay=".3s"
                        >
                            <img
                                src="/assets/img/gallery/resized/IMG-20240616-WA0012.jpg"
                                className="img-fluid img-1"
                                alt="img"
                            />
                            <img
                                src="/assets/img/gallery/resized/IMG-20240616-WA0013.jpg"
                                className="img-fluid img-2"
                                alt="img"
                            />
                            {/* <img
                        src="/assets/img/gallery/resized/IMG-20240616-WA0013.jpg"
                        className="img-fluid img-3"
                        alt="img"
                    /> */}
                            <i className="flaticon-air-conditioner icon-one" />
                            <i className="flaticon-house icon-two" />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-9">
                        <div
                            className="afaq__text afaq__text--3 mb-30 mr-165 wow fadeInUp"
                            data-wow-delay=".6s"
                        >
                            <div className="section-title-wrapper mb-50">
                                <h6 className="subtitle mb-20">Asked Question</h6>
                                <h2 className="section-title">
                                    Solusi untuk setiap masalah perbaikan<br />

                                </h2>
                            </div>
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button
                                            className="accordion-button"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne"
                                            aria-expanded="true"
                                            aria-controls="collapseOne"
                                        >
                                            Merek AC apa saja yang bisa dilayani?

                                        </button>
                                    </h2>
                                    <div
                                        id="collapseOne"
                                        className="accordion-collapse collapse show"
                                        aria-labelledby="headingOne"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body">
                                            kami dapat memperbaiki Service Semua tipe merek AC seperti Panasonic, Daikin, Sharp, Fujitsu, Samsung, ChangHong Dan Lainnya
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseTwo"
                                            aria-expanded="false"
                                            aria-controls="collapseTwo"
                                        >
                                            Melayani wilayah mana saja?

                                        </button>
                                    </h2>
                                    <div
                                        id="collapseTwo"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingTwo"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body">
                                            Kami melayani seluruh wilayah Medan dan Sekitarnya
                                            {/* Kami melayani seluruh wilayah Medan khususnya wilayah Medan Helvetia, Medan Barat, Medan Sunggal, Medan Kota dan Kota Binjai. */}
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree"
                                            aria-expanded="false"
                                            aria-controls="collapseThree"
                                        >
                                            Apa saja Jasa Layanan nya?

                                        </button>
                                    </h2>
                                    <div
                                        id="collapseThree"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingThree"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body">
                                            Kami melayani Cuci AC, Pemasangan AC, Pemasangan Pipa AC, Bongkar Pasang AC, Isi juga Tambah Freon, Service, Maintenance AC, jual beli AC, Instalasi Listrik dan juga Perbaikan
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseFour"
                                            aria-expanded="false"
                                            aria-controls="collapseFour"
                                        >
                                            Apa ada garansi?

                                        </button>
                                    </h2>
                                    <div
                                        id="collapseFour"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingFour"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body">
                                            Ya, kami memberikan garansi 30 hari jika ada kesalahan dari teknisi kami dan juga kami pastikan setiap pekerjaan yang kami kerjakan dengan finishing yang baik.


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section></>
    )
}

export default Faq