
const Footer = () => {
    return (
        < ><footer data-background="assets/img/footer/footer-bg.jpg" style={{ backgroundImage: `url("/assets/img/footer/footer-bg.jpg")` }}>
            <section className="footer-area container pt-115 pb-90">
                <div className=" ">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div
                                className="footer__widget mb-30 wow fadeInUp"
                                data-wow-delay=".3s"
                            >
                                <h4 className="footer__widget--title">About Us</h4>
                                <p>
                                    Maecens rhoncus molese conubia lores dos class etiam and potenti
                                    beena nonum lectuy folish consequat at netus phasellus facilisis
                                    ascetur velit congue nisi.
                                </p>
                                <div className="emg__number">
                                    <h5>Emergency :</h5>
                                    <h4>
                                        <a href="tel:01254987596">02 (650) 365 2560</a>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div
                                className="footer__widget mb-30 pl-80 wow fadeInUp"
                                data-wow-delay=".6s"
                            >
                                <h4 className="footer__widget--title">Services</h4>
                                <ul className="widget__links">
                                    <li>
                                        <a href="service-details.html">Heating Service</a>
                                    </li>
                                    <li>
                                        <a href="service-details.html">Installation</a>
                                    </li>
                                    <li>
                                        <a href="service-details.html">Quality Testing</a>
                                    </li>
                                    <li>
                                        <a href="service-details.html">Compressure</a>
                                    </li>
                                    <li>
                                        <a href="service-details.html">Maintanence</a>
                                    </li>
                                    <li>
                                        <a href="service-details.html">Cooler Cleaning</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div
                                className="footer__widget mb-30 fix wow fadeInUp"
                                data-wow-delay=".9s"
                            >
                                <h4 className="footer__widget--title">Recent Post</h4>
                                <div className="widget__post mb-30">
                                    <div className="widget__post--img">
                                        <a href="blog.html">
                                            <img
                                                src="assets/img/footer/footer-post-1.jpg"
                                                className="img-fluid"
                                                alt="img"
                                            />
                                        </a>
                                    </div>
                                    <div className="widget__post--text">
                                        <h5 className="widget__post--text__title">
                                            <a href="blog-details.html">
                                                Feugiat pharetra a ductor <br />
                                                nonuy vehicula
                                            </a>
                                        </h5>
                                        <span>23 February - 2021</span>
                                    </div>
                                </div>
                                <div className="widget__post">
                                    <div className="widget__post--img">
                                        <a href="blog.html">
                                            <img
                                                src="assets/img/footer/footer-post-2.jpg"
                                                className="img-fluid"
                                                alt="img"
                                            />
                                        </a>
                                    </div>
                                    <div className="widget__post--text">
                                        <h5 className="widget__post--text__title">
                                            <a href="blog-details.html">
                                                folish consequat at netus <br />
                                                phasellus facilisis
                                            </a>
                                        </h5>
                                        <span>24 February - 2021</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div
                                className="footer__widget mb-30 pl-85 wow fadeInUp"
                                data-wow-delay="1.2s"
                            >
                                <h4 className="footer__widget--title">Our Gallery</h4>
                                <div className="insta__widget">
                                    <div className="insta__widget--img">
                                        <a href="#">
                                            <img
                                                src="assets/img/footer/footer-gal-1.jpg"
                                                className="img-fluid"
                                                alt="img"
                                            />
                                        </a>
                                    </div>
                                    <div className="insta__widget--img">
                                        <a href="#">
                                            <img
                                                src="assets/img/footer/footer-gal-2.jpg"
                                                className="img-fluid"
                                                alt="img"
                                            />
                                        </a>
                                    </div>
                                    <div className="insta__widget--img">
                                        <a href="#">
                                            <img
                                                src="assets/img/footer/footer-gal-3.jpg"
                                                className="img-fluid"
                                                alt="img"
                                            />
                                        </a>
                                    </div>
                                    <div className="insta__widget--img">
                                        <a href="#">
                                            <img
                                                src="assets/img/footer/footer-gal-4.jpg"
                                                className="img-fluid"
                                                alt="img"
                                            />
                                        </a>
                                    </div>
                                    <div className="insta__widget--img">
                                        <a href="#">
                                            <img
                                                src="assets/img/footer/footer-gal-5.jpg"
                                                className="img-fluid"
                                                alt="img"
                                            />
                                        </a>
                                    </div>
                                    <div className="insta__widget--img">
                                        <a href="#">
                                            <img
                                                src="assets/img/footer/footer-gal-6.jpg"
                                                className="img-fluid"
                                                alt="img"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="copyright-area copyright-border">
                <div className="custom-container">
                    <div className="row align-items-center">
                        <div className="col-xl-4 col-lg-5 order-lg-1 order-2">
                            <div className="copyright__text copyright__text--3">
                                <span>
                                    Copyright © 2021 <a href="#">Sinar Gemilang</a>. All Rights Reserved.
                                </span>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-3 order-lg-2 order-1">
                            <div className="copyright__logo text-center">
                                {/* <a href="index.html">
                                    <img src="assets/img/logo/logo-white.png" alt="img" />
                                </a> */}
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 order-lg-3 order-3">
                            <div className="copyright__social text-lg-end text-center">
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
        </footer></>
    )
}

export default Footer