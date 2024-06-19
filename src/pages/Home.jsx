import BrandArea from "../components/BrandArea";
import Sertifikasi from "../components/Sertifikasi";
import Contact from "../section/Contact";
import Footer from "../section/Footer";
import Gallery from "../section/Gallery";
import Harga from "../section/Harga";
import Header from "../section/Header";
import Hero from "../section/Hero";
import Layanan from "../section/Layanan";

const Home = () => {
    return (
        <>
            {/* preloader */}
            {/* <div id="preloader">
                <div className="preloader">
                    <span />
                    <span />
                </div>
            </div> */}
            {/* preloader end  */}
            {/* back to top start */}
            <div className="progress-wrap">
                <svg
                    className="progress-circle svg-content"
                    width="100%"
                    height="100%"
                    viewBox="-1 -1 102 102"
                >
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                </svg>
            </div>
            {/* <header>

                <div className="mobile-header header-sticky z-index d-lg-none">
                    <div className="custom-container">
                        <div className="header-menu-bg-33">
                            <div className="row align-items-center">
                                <div className="col-8">
                                    <div className="header-logo pt-30 pb-30">
                                        <a href="index.html">
                                            <img
                                                src="/assets/img/logo/logo.png"
                                                className="img-fluid"
                                                alt="img"
                                            />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-xl-8 col-lg-8 col-4">
                                    <div className="main-menu main-menu-3 d-none d-lg-block">

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header> */}
            <div className="fix">
                <div className="side-info">
                    <button className="side-info-close">
                        <i className="fal fa-times" />
                    </button>
                    <div className="side-info-content">
                        <div className="mobile-menu" />
                        <div className="contact-infos mb-30">
                            <div className="contact-list mb-30">
                                <h4>Contact Info</h4>
                                <ul>
                                    <li>
                                        <i className="flaticon-history" />
                                        Sunday to Thursday
                                    </li>
                                    <li>
                                        <i className="flaticon-pin" />
                                        28/4 Palmal, London
                                    </li>
                                    <li>
                                        <i className="fal fa-envelope" />
                                        <a href="https://wphix.com/cdn-cgi/l/email-protection#d4bdbab2bb94a7adb7bcbbe6e0fab7bbb9">
                                            <span
                                                className="__cf_email__"
                                                data-cfemail="f29b9c949db2818b919a9dc0c6dc919d9f"
                                            >
                                                [email&nbsp;protected]
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                                <div className="sidebar__menu--social">
                                    <a href="#">
                                        <i className="fab fa-facebook-f" />
                                    </a>
                                    <a href="#">
                                        <i className="fab fa-twitter" />
                                    </a>
                                    <a href="#">
                                        <i className="fab fa-instagram" />
                                    </a>
                                    <a href="#">
                                        <i className="fab fa-google" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="offcanvas-overlay" />
            {/* header area end here */}
            <main>
                {/* hero area start here */}

                <Header />
                <Hero />

                <Layanan />
                <Sertifikasi />
                <Harga />
                <BrandArea />
                <Contact />
                <Gallery />
                {/* <ClientSectionSwiper /> */}


                <section className="faq-area-3 pt-120 pb-105">
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
                                                    Kami melayani seluruh wilayah Medan khususnya wilayah Medan Helvetia, Medan Barat, Medan Sunggal, Medan Kota dan Kota Binjai.
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
                </section>


            </main>
            <Footer />
        </>


    )
}

export default Home