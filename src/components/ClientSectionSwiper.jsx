import { useEffect } from 'react';
import './style.css'
const ClientSectionSwiper = () => {

    useEffect(() => {
        // Clone the initial element
        const copy = document.querySelector(".logos-slide").cloneNode(true);
        document.querySelector(".logos").appendChild(copy);
    }, []);

    return (
        < >
            <div className="logos">
                <div className="logos-slide">
                    <img src="/assets/img/brand/brand-1.png" />
                    <img src="/assets/img/brand/brand-2.png" />
                    <img src="/assets/img/brand/brand-3.png" />
                    <img src="/assets/img/brand/brand-4.png" />
                    <img src="/assets/img/brand/brand-5.png" />
                    <img src="/assets/img/brand/brand-6.png" />

                </div>
            </div>
            {/* <section className="fact-area pt-80 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="logos">
                            <div className="logos-slide">
                                <img src="/assets/img/brand/brand-1.png" />
                                <img src="/assets/img/brand/brand-2.png" />
                                <img src="/assets/img/brand/brand-3.png" />
                                <img src="/assets/img/brand/brand-4.png" />
                                <img src="/assets/img/brand/brand-5.png" />
                                <img src="/assets/img/brand/brand-6.png" />
                                <img src="/assets/img/brand/brand-6.png" />
                                <img src="/assets/img/brand/brand-6.png" />
                            </div>
                        </div>

                    </div>
                </div>
            </section> */}
        </ >
    );
};

export default ClientSectionSwiper;
