import { Link } from "react-router-dom"

const Header = () => {
    return (
        < >
            <header>

                <div className="header-menu header-sticky">
                    <div className="custom-container">
                        <div className="row align-items-center">
                            <div className="col-xxl-2 col-xl-2 col-lg-3 col-8">
                                <div className="header-logo pt-15 pb-15">
                                    <Link to="/">
                                        <img
                                            src="/assets/img/logo/cv.sgclogo.jpg"
                                            className="img-fluid"
                                            alt="img"
                                        />
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Header