import { Badge } from "react-bootstrap"
import { Link } from "react-router-dom"

const Hero = () => {

    return (
        <>

            <section className="slider-area-3 position-relative">
                <div className="slider-active swiper-container common-dots">
                    <div className="swiper-wrapper">
                        <div
                            className="single-slider-3 slider-height-3 slider-overlay swiper-slide"
                            data-swiper-autoplay={15000}
                        >
                            <i className="flaticon-air-conditioner slider__icon slider__icon1" />
                            <i className="flaticon-heating slider__icon slider__icon2" />
                            <i className="flaticon-vacuum-cleaner slider__icon slider__icon3" />
                            <div
                                className="slide-bg"
                                data-background="/assets/img/hero/slider-bg-3.jpg"
                                style={{ backgroundImage: `url("/assets/img/hero/slider-bg-3.jpg")` }}
                            />
                            <div
                                className="slide-bg-pt"
                                data-background="/assets/img/hero/ddd.png"
                                style={{ backgroundImage: `url("/assets/img/hero/ddd.png")` }}
                            />
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="aslider aslider-3 text-center pt-250 z-index">
                                            <div className="mb-5">

                                                <h1 className="h1 " style={{ color: "#ff6600", fontSize: "3rem" }}>
                                                    <Badge text="orange" bg="secondary">Lulu Teknik Service</Badge>
                                                </h1>
                                            </div>
                                            <h4
                                                className="aslider--date"
                                                data-animation="fadeInUp"
                                                data-delay=".3s"
                                            >
                                                Dipercaya Sejak <span>2020</span>
                                            </h4>

                                            <h2
                                                className="aslider--title aslider--title__3 mb-35 text-white"
                                                data-animation="fadeInUp"
                                                data-delay=".5s"
                                            >


                                                Jasa Service AC

                                                <br /> Terbaik di Medan
                                            </h2>
                                            <h3
                                                className="aslider--subtitle aslider--subtitle__3 mb-50 text-white"
                                                data-animation="fadeInUp"
                                                data-delay=".8s"
                                            >
                                                {/* Dengan sekali klik  , Anda bisa mendinginkan ruangan di rumah anda */}
                                                Solusi Tepat untuk AC Sehat


                                            </h3>
                                            <div
                                                className="aslider--btn"
                                                data-animation="fadeInUp"
                                                data-delay="1.1s"
                                            >
                                                {/* <Link to={'https://web.whatsapp.com/send?phone=6282177463454&text=Halo%2C%20Saya%20butuh%20Jasa%20Service%20AC%20di%20Medan'} target="_blank" className="theme-btn"> */}
                                                <Link to={'https://api.whatsapp.com/send?phone=+6282177463454&text=Hallo Saya Butuh Jasa Service AC. Apakah Bisa dibantu ? '} target="_blank" className="theme-btn">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                                                        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                                                    </svg>   Pesan Sekarang ( 082177463454 )
                                                </Link>
                                            </div>
                                            <br />
                                            <h3
                                                className="aslider--subtitle aslider--subtitle__3 mb-50 text-white"
                                                data-animation="fadeInUp"
                                                data-delay=".8s"
                                            >
                                                Jam Kerja Senin - Minggu : 07.30 - 17.30 WIB


                                            </h3>
                                            <h3
                                                className="aslider--subtitle aslider--subtitle__3 mb-50 text-white"
                                                data-animation="fadeInUp"
                                                data-delay=".8s"
                                            >
                                                <Link to={'https://maps.app.goo.gl/G9uq2XxTn5HbmsqC8'} target="_blank" className="theme-btn">
                                                    Klik  Lokasi Kami
                                                </Link>


                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="single-slider-3 slider-height-3 slider-overlay swiper-slide"
                            data-swiper-autoplay={15000}
                        >
                            <i className="flaticon-air-conditioner slider__icon slider__icon1" />
                            <i className="flaticon-heating slider__icon slider__icon2" />
                            <i className="flaticon-vacuum-cleaner slider__icon slider__icon3" />
                            <div
                                className="slide-bg"
                                data-background="/assets/img/hero/slider-bg-4.jpg"
                                style={{ backgroundImage: `url("/assets/img/hero/slider-bg-4.jpg")` }}
                            />
                            <div
                                className="slide-bg-pt"
                                data-background="/assets/img/hero/ddd.png"
                                style={{ backgroundImage: `url("/assets/img/hero/ddd.png")` }}
                            />
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="aslider aslider-3 text-center pt-250 z-index">
                                            <h4
                                                className="aslider--date"
                                                data-animation="fadeInUp"
                                                data-delay=".3s"
                                            >
                                                Since <span>2010</span>
                                            </h4>
                                            <h2
                                                className="aslider--title aslider--title__3 mb-35 text-white"
                                                data-animation="fadeInUp"
                                                data-delay=".5s"
                                            >
                                                We Provide Trusted <br /> Repair Service
                                            </h2>
                                            <h3
                                                className="aslider--subtitle aslider--subtitle__3 mb-50 text-white"
                                                data-animation="fadeInUp"
                                                data-delay=".8s"
                                            >
                                                On your fingertips you have been cooling switch others{" "}
                                            </h3>
                                            <div
                                                className="aslider--btn"
                                                data-animation="fadeInUp"
                                                data-delay="1.1s"
                                            >
                                                <a href="service.html" className="theme-btn">
                                                    Explore Services
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="single-slider-3 slider-height-3 slider-overlay swiper-slide"
                            data-swiper-autoplay={15000}
                        >
                            <i className="flaticon-air-conditioner slider__icon slider__icon1" />
                            <i className="flaticon-heating slider__icon slider__icon2" />
                            <i className="flaticon-vacuum-cleaner slider__icon slider__icon3" />
                            <div
                                className="slide-bg"
                                data-background="/assets/img/hero/slider-bg-5.jpg"
                                style={{ backgroundImage: `url("/assets/img/hero/slider-bg-5.jpg")` }}
                            />
                            <div
                                className="slide-bg-pt"
                                data-background="/assets/img/hero/ddd.png"
                                style={{ backgroundImage: "url('/assets/img/hero/ddd.png')" }}
                            />
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="aslider aslider-3 text-center pt-250 z-index">
                                            <h4
                                                className="aslider--date"
                                                data-animation="fadeInUp"
                                                data-delay=".3s"
                                            >
                                                Since <span>2010</span>
                                            </h4>
                                            <h2
                                                className="aslider--title aslider--title__3 mb-35 text-white"
                                                data-animation="fadeInUp"
                                                data-delay=".5s"
                                            >
                                                We Provide Trusted <br /> Repair Service
                                            </h2>
                                            <h3
                                                className="aslider--subtitle aslider--subtitle__3 mb-50 text-white"
                                                data-animation="fadeInUp"
                                                data-delay=".8s"
                                            >
                                                On your fingertips you have been cooling switch others{" "}
                                            </h3>
                                            <div
                                                className="aslider--btn"
                                                data-animation="fadeInUp"
                                                data-delay="1.1s"
                                            >
                                                <a href="service.html" className="theme-btn">
                                                    Explore Services
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* If we need pagination */}
                    <div className="swiper-paginations slide-dots" />
                </div>
                <div className="slide-shape">
                    <img src="/assets/img/hero/shape.png" className="img-fluid" alt="img" />
                </div>
            </section>

        </>
    )
}

export default Hero