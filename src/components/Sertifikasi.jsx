
const Sertifikasi = () => {
    return (
        < > <div className="brand-area   pt-100 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div
                            className="section-title-wrapper mb-70 text-center wow fadeInUp"
                            data-wow-delay=".3s"
                        >
                            <h2 className="section-title">
                                Sertifikasi <span>Kami</span>
                            </h2>
                        </div>
                    </div>
                </div>
                {/* sdadsa */}
                <div className="brand-active " style={{ overflowX: "auto" }}>
                    <div
                        className="swiper-wrapper d-flex justify-content-center"
                        id="swiper-wrapper-10adabb37f9972510e"
                        aria-live="off"

                    >

                        <div
                            className="brand-wrapper swiper-slide wow fadeInUp swiper-slide-duplicate"
                            data-wow-delay="1.2s"
                            data-swiper-autoplay={5000}
                            data-swiper-slide-index={3}
                            role="group"
                            aria-label="3 / 16"
                            style={{
                                width: 210,
                                visibility: "visible",
                                animationDelay: "1.2s",
                                animationName: "fadeInUp",
                                marginRight: 30
                            }}
                        >
                            <a href="#">
                                <img
                                    src="/assets/img/logo/logo-bnsp.jpeg"
                                    className="img-fluid"
                                    alt="img"
                                />
                            </a>
                        </div>

                        <div
                            className="brand-wrapper swiper-slide wow fadeInUp swiper-slide-duplicate"
                            data-wow-delay=".6s"
                            data-swiper-autoplay={5000}
                            data-swiper-slide-index={1}
                            role="group"
                            aria-label="13 / 16"
                            style={{
                                width: 210,
                                visibility: "visible",
                                animationDelay: "0.6s",
                                animationName: "fadeInUp",
                                marginRight: 30
                            }}
                        >
                            <a href="#">
                                <img
                                    src="/assets/img/logo/logo-kemnaker.png"
                                    className="img-fluid"
                                    alt="img"
                                />
                            </a>
                        </div>


                    </div>
                    <span
                        className="swiper-notification"
                        aria-live="assertive"
                        aria-atomic="true"
                    />
                </div>
            </div>
        </div>
        </>
    )
}

export default Sertifikasi