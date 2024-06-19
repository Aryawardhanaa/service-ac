
const Gallery = () => {
    return (
        < ><section className="gallery-area pt-80 pb-20">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div
                            className="section-title-wrapper mb-70 text-center wow fadeInUp"
                            data-wow-delay=".3s"
                        >
                            <h2 className="section-title">
                                Galeri Pilihan <span>Kami</span>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="gallery-active container common-dots pb-45 swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events">
                <div
                    className="swiper-wrapper wow fadeInUp"
                    data-wow-delay=".6s"
                    id="swiper-wrapper-d5a66b1c63eafca1"
                    aria-live="polite"
                    style={{
                        // transform: 'translate3d(-387.25px, 0px, 0px)',
                        visibility: 'visible',
                        animationDelay: '0.6s',
                        animationName: 'fadeInUp',
                        transitionDuration: '0ms',
                        overflowX: "auto"
                    }}
                >
                    {arr.map((slide, index) => (
                        <div
                            key={index}
                            className={slide.className}
                            role={slide.role}
                            aria-label={slide.ariaLabel}
                            style={slide.style}
                        >
                            <div className="aportfolio__img agallery__img">
                                <img src={slide.imgSrc} className="img-fluid" alt="img" />
                            </div>
                            <div className="aportfolio__text agallery__text z-index">
                                <span>{slide.spanText}</span>
                                <h4 className="aportfolio__text--title">
                                    <a href={slide.href}>{slide.title}</a>
                                </h4>
                            </div>
                        </div>
                    ))}
                </div>

                <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
            </div>
        </section>
        </ >
    )
}
const arr = [
    {
        imgSrc: '/assets/img/gallery/new/IMG-20240618-WA0022.jpg',
        spanText: 'Cleaning Service',
        title: 'Repairman Checking',
        href: 'project-details.html',
        role: 'group',
        ariaLabel: '1 / 5',
        style: { width: '357.25px', marginRight: '30px' },
        className: 'aportfolio agallery swiper-slide mb-30 swiper-slide-prev',
    },
    {
        imgSrc: '/assets/img/gallery/new/WhatsApp Image 2024-06-19 at 15.11.30.jpeg',
        spanText: 'Cleaning Service',
        title: 'Repairman Checking',
        href: 'project-details.html',
        role: 'group',
        ariaLabel: '1 / 5',
        style: { width: '357.25px', marginRight: '30px' },
        className: 'aportfolio agallery swiper-slide mb-30 swiper-slide-prev',
    },
    {
        imgSrc: '/assets/img/gallery/new/WhatsApp Image 2024-06-19 at 15.11.31.jpeg',
        spanText: 'Cleaning Service',
        title: 'Repairman Checking',
        href: 'project-details.html',
        role: 'group',
        ariaLabel: '1 / 5',
        style: { width: '357.25px', marginRight: '30px' },
        className: 'aportfolio agallery swiper-slide mb-30 swiper-slide-prev',
    },
    {
        imgSrc: '/assets/img/gallery/new/IMG-20240618-WA0021.jpg',
        spanText: 'Cleaning Service',
        title: 'Repairman Checking',
        href: 'project-details.html',
        role: 'group',
        ariaLabel: '1 / 5',
        style: { width: '357.25px', marginRight: '30px' },
        className: 'aportfolio agallery swiper-slide mb-30 swiper-slide-prev',
    },
    {
        imgSrc: '/assets/img/gallery/new/IMG-20240618-WA0020.jpg',
        spanText: 'Cleaning Service',
        title: 'Repairman Checking',
        href: 'project-details.html',
        role: 'group',
        ariaLabel: '1 / 5',
        style: { width: '357.25px', marginRight: '30px' },
        className: 'aportfolio agallery swiper-slide mb-30 swiper-slide-prev',
    },
    {
        imgSrc: '/assets/img/gallery/new/IMG-20240618-WA0019.jpg',
        spanText: 'Cleaning Service',
        title: 'Repairman Checking',
        href: 'project-details.html',
        role: 'group',
        ariaLabel: '1 / 5',
        style: { width: '357.25px', marginRight: '30px' },
        className: 'aportfolio agallery swiper-slide mb-30 swiper-slide-prev',
    },
    {
        imgSrc: '/assets/img/gallery/new/IMG-20240618-WA0015.jpg',
        spanText: 'Cleaning Service',
        title: 'Repairman Checking',
        href: 'project-details.html',
        role: 'group',
        ariaLabel: '1 / 5',
        style: { width: '357.25px', marginRight: '30px' },
        className: 'aportfolio agallery swiper-slide mb-30 swiper-slide-prev',
    },
    {
        imgSrc: '/assets/img/gallery/new/IMG-20240618-WA0013.jpg',
        spanText: 'Cleaning Service',
        title: 'Repairman Checking',
        href: 'project-details.html',
        role: 'group',
        ariaLabel: '1 / 5',
        style: { width: '357.25px', marginRight: '30px' },
        className: 'aportfolio agallery swiper-slide mb-30 swiper-slide-prev',
    },
    {
        imgSrc: '/assets/img/gallery/new/IMG-20240618-WA0014.jpg',
        spanText: 'Cleaning Service',
        title: 'Repairman Checking',
        href: 'project-details.html',
        role: 'group',
        ariaLabel: '1 / 5',
        style: { width: '357.25px', marginRight: '30px' },
        className: 'aportfolio agallery swiper-slide mb-30 swiper-slide-prev',
    },
    {
        imgSrc: '/assets/img/gallery/new/IMG-20240616-WA0017.jpg',
        spanText: 'Cleaning Service',
        title: 'Repairman Checking',
        href: 'project-details.html',
        role: 'group',
        ariaLabel: '1 / 5',
        style: { width: '357.25px', marginRight: '30px' },
        className: 'aportfolio agallery swiper-slide mb-30 swiper-slide-prev',
    },
    {
        imgSrc: '/assets/img/gallery/resized/IMG-20240616-WA0011.jpg',
        spanText: 'Cleaning Service',
        title: 'Repairman Checking',
        href: 'project-details.html',
        role: 'group',
        ariaLabel: '1 / 5',
        style: { width: '357.25px', marginRight: '30px' },
        className: 'aportfolio agallery swiper-slide mb-30 swiper-slide-prev',
    },
    {
        imgSrc: '/assets/img/gallery/resized/IMG-20240616-WA0024.jpg',
        spanText: 'Cleaning Service',
        title: 'Repair & Cleaning',
        href: 'project-details.html',
        role: 'group',
        ariaLabel: '2 / 5',
        style: { width: '357.25px', marginRight: '30px' },
        className: 'aportfolio agallery swiper-slide mb-30 swiper-slide-active',
    },
    {
        imgSrc: '/assets/img/gallery/resized/IMG-20240616-WA0023.jpg',
        spanText: 'Cleaning Service',
        title: 'Repair & Cleaning',
        href: 'project-details.html',
        role: 'group',
        ariaLabel: '2 / 5',
        style: { width: '357.25px', marginRight: '30px' },
        className: 'aportfolio agallery swiper-slide mb-30 swiper-slide-active',
    },
    {
        imgSrc: '/assets/img/gallery/resized/IMG-20240616-WA0022.jpg',
        spanText: 'Cleaning Service',
        title: 'Repair & Cleaning',
        href: 'project-details.html',
        role: 'group',
        ariaLabel: '2 / 5',
        style: { width: '357.25px', marginRight: '30px' },
        className: 'aportfolio agallery swiper-slide mb-30 swiper-slide-active',
    },
    {
        imgSrc: '/assets/img/gallery/resized/IMG-20240616-WA0021.jpg',
        spanText: 'Repair Conditioner',
        title: 'Emergency Repair',
        href: 'project-details.html',
        role: 'group',
        ariaLabel: '3 / 5',
        style: { width: '357.25px', marginRight: '30px' },
        className: 'aportfolio agallery swiper-slide mb-30 swiper-slide-next',
    },
    {
        imgSrc: '/assets/img/gallery/resized/IMG-20240616-WA0018.jpg',
        spanText: 'Cleaning Service',
        title: 'AC Dust Cleaning',
        href: 'project-details.html',
        role: 'group',
        ariaLabel: '4 / 5',
        style: { width: '357.25px', marginRight: '30px' },
        className: 'aportfolio agallery swiper-slide mb-30',
    },
    {
        imgSrc: '/assets/img/gallery/resized/IMG-20240616-WA0015.jpg',
        spanText: 'Cleaning Service',
        title: 'Repairman Checking',
        href: 'project-details.html',
        role: 'group',
        ariaLabel: '5 / 5',
        style: { width: '357.25px', marginRight: '30px' },
        className: 'aportfolio agallery swiper-slide mb-30',
    },
    {
        imgSrc: '/assets/img/gallery/resized/IMG-20240616-WA0019.jpg',
        spanText: 'Cleaning Service',
        title: 'Repairman Checking',
        href: 'project-details.html',
        role: 'group',
        ariaLabel: '5 / 5',
        style: { width: '357.25px', marginRight: '30px' },
        className: 'aportfolio agallery swiper-slide mb-30',
    },
]
export default Gallery