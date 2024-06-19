import BrandArea from "../components/BrandArea";
import Sertifikasi from "../components/Sertifikasi";
import Contact from "../section/Contact";
import Faq from "../section/Faq";
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
                <Faq />
                {/* <ClientSectionSwiper /> */}





            </main>
            <Footer />
        </>


    )
}

export default Home