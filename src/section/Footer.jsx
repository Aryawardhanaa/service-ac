
const Footer = () => {
    return (
        < ><footer data-background="assets/img/footer/footer-bg.jpg" style={{ backgroundImage: `url("/assets/img/footer/footer-bg.jpg")` }}>

            <div className="copyright-area copyright-border">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-7">
                            <div className="copyright__text">
                                <span>
                                    Copyright © 2024 <a href="#">Sinar Gemilang Service</a>. All Rights Reserved.
                                </span>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="copyright__social text-end">
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