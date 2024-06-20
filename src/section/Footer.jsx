import { Link } from "react-router-dom"

const Footer = () => {
    return (
        < ><footer data-background="assets/img/footer/footer-bg.jpg" style={{ backgroundImage: `url("/assets/img/footer/footer-bg.jpg")` }}>

            <div className="copyright-area copyright-border">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-7">
                            <div className="copyright__text">
                                <span>
                                    Copyright © 2024 <Link to="/">Sinar Gemilang Service</Link>. All Rights Reserved.
                                </span>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="copyright__social text-end">


                                <Link target="_blank" to={'https://www.facebook.com/profile.php?id=100093652681745&locale=id_ID'}>
                                    <i className="fab fa-facebook-f" />
                                </Link>
                                <Link target="_blank" to={'https://www.instagram.com/tv_sgc'}>
                                    <i className="fab fa-instagram" />
                                </Link>
                                <Link target="_blank" to={'https://www.tiktok.com/@cv_sinargemilangceria'}>
                                    <i className="fab fa-tiktok" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer></>
    )
}

export default Footer