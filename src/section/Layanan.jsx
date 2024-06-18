import React from 'react'

const Layanan = () => {
    return (
        < ><section
            className="service-area pt-120 pb-90"
            data-background="/assets/img/service/service-bg.jpg"
        >
            <div className="container">
                <div className="row align-items-end mb-70">
                    <div className="col-md-8">
                        <div
                            className="section-title-wrapper wow fadeInUp"
                            data-wow-delay=".2s"
                        >
                            <h6 className="subtitle mb-20">
                                <img
                                    src="assets/img/icon/subtitle-icon.png"
                                    className="img-fluid"
                                    alt="img"
                                />{" "}
                                Layanan Unggulan
                            </h6>
                            <h2 className="section-title">Layanan Kami</h2>
                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <ul className="nav custom-service-tab" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <div
                                    className="nav-link"
                                    id="home-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#home"
                                    role="tab"
                                    aria-controls="home"
                                    aria-selected="true"
                                >
                                    <div className="aservice-box wow fadeInUp" data-wow-delay=".3s">
                                        <div className="aservice mb-30 ">
                                            <div className="aservice__icon z-index">
                                                <i className="flaticon-technical-support" />
                                            </div>
                                            <div className="aservice__text z-index">
                                                <h6 className="aservice__text--title">
                                                    <a href="service-details.html">Cuci & Service</a>
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item" role="presentation">
                                <div
                                    className="nav-link active"
                                    id="profile-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#profile"
                                    role="tab"
                                    aria-controls="profile"
                                    aria-selected="false"
                                >
                                    <div className="aservice-box wow fadeInUp" data-wow-delay=".6s">
                                        <div className="aservice mb-30">
                                            <div className="aservice__icon z-index">
                                                <i className="flaticon-air-conditioner" />
                                            </div>
                                            <div className="aservice__text z-index">
                                                {/* <span>Commercial</span> */}
                                                <h6 className="aservice__text--title">
                                                    <a href="service-details.html">Perbaikan & Instalasi</a>
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item" role="presentation">
                                <div
                                    className="nav-link"
                                    id="contact-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#contact"
                                    role="tab"
                                    aria-controls="contact"
                                    aria-selected="false"
                                >
                                    <div className="aservice-box wow fadeInUp" data-wow-delay=".9s">
                                        <div className="aservice mb-30">
                                            <div className="aservice__icon z-index">
                                                <i className="flaticon-vacuum-cleaner" />
                                            </div>
                                            <div className="aservice__text z-index">
                                                {/* <span>Commercial</span> */}
                                                <h6 className="aservice__text--title">
                                                    <a href="service-details.html">Tambah/Isi Freon</a>
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item" role="presentation">
                                <div
                                    className="nav-link"
                                    id="contact-tab2"
                                    data-bs-toggle="tab"
                                    data-bs-target="#contact2"
                                    role="tab"
                                    aria-controls="contact2"
                                    aria-selected="false"
                                >
                                    <div className="aservice-box wow fadeInUp" data-wow-delay="1.2s">
                                        <div className="aservice mb-30">
                                            <div className="aservice__icon z-index">
                                                <i className="flaticon-heating" />
                                            </div>
                                            <div className="aservice__text z-index">
                                                <h6 className="aservice__text--title">
                                                    <a href="service-details.html">Bongkar/Pasang AC</a>
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <div className="tab-content" id="myTabContent">
                            <div
                                className="tab-pane fade"
                                id="home"
                                role="tabpanel"
                                aria-labelledby="home-tab"
                            >
                                <div className="aservice__img mb-30">
                                    <img
                                        src="assets/img/service/service-tab1.jpg"
                                        className="img-fluid"
                                        alt="img"
                                    />
                                    <div className="aservice__img--text">
                                        <p>
                                            Melayani pemasangan AC baru dari berbagai jenis merek dan tipe AC untuk berbagai keperluan
                                        </p>

                                    </div>
                                </div>
                            </div>
                            <div
                                className="tab-pane fade show active"
                                id="profile"
                                role="tabpanel"
                                aria-labelledby="profile-tab"
                            >
                                <div className="aservice__img mb-30">
                                    <img
                                        src="assets/img/service/service-img.jpg"
                                        className="img-fluid"
                                        alt="img"
                                    />
                                    <div className="aservice__img--text">
                                        <p>
                                            Jasa Cuci Indoor & Outdoor Service AC  Split, Casette, Standing & Central
                                            {/* Jasa pemasangan AC, instalasi kelistrikan, dan instalasi pipa. Instalasi AC baru. */}
                                        </p>

                                    </div>
                                </div>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="contact"
                                role="tabpanel"
                                aria-labelledby="contact-tab"
                            >
                                <div className="aservice__img mb-30">
                                    <img
                                        src="assets/img/service/service-tab3.jpg"
                                        className="img-fluid"
                                        alt="img"
                                    />
                                    <div className="aservice__img--text">
                                        <p>
                                            Tambah/Isi Freon AC Anda untuk menghasilkan udara yang lebih segar, sejuk dan dingin.
                                        </p>

                                    </div>
                                </div>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="contact2"
                                role="tabpanel"
                                aria-labelledby="contact-tab2"
                            >
                                <div className="aservice__img mb-30">
                                    <img
                                        src="assets/img/service/service-tab4.jpg"
                                        className="img-fluid"
                                        alt="img"
                                    />
                                    <div className="aservice__img--text">
                                        <p>
                                            Kami berpengalaman dalam bongkar dan Pemasangan AC untuk berbagai keperluan seperti AC rumah, kantor dan lainnya.
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Layanan