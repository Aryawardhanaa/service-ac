import { Button } from "react-bootstrap";
import Spinner from "../components/Spinner";
import useMutation from "../hooks/useMutation";

const Contact = () => {

    const { data, error, isLoading, mutate } = useMutation();

    if (isLoading) return <Spinner animation="border" variant="warning" />

    const onsubmit = (e) => {
        e.preventDefault();

        const data = new FormData(e.target)
        const formdata = Object.fromEntries(data.entries())
        e.target.target = '_blank';
        console.log(formdata);
        window.location.href = `https://web.whatsapp.com/send?phone=6282177463454&text=Halo%2C%20Saya%20butuh%20Jasa%20Service%20AC%20di%20Medan`
        // mutate(formdata);
    };
    return (
        < >  <section className="contact-area">
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-lg-7">
                        <div className="acontact__img wow fadeInUp" data-wow-delay=".3s">
                            <img
                                src="/assets/img/contact/contact-img-1.png"
                                className="img-fluid"
                                alt="img"
                            />
                            <div
                                className="acontact__img--text wow fadeInUp"
                                data-wow-delay=".5s"
                            >
                                <h1 className="acontact__img--text__backtitle">25</h1>
                                <h2 className="z-index">
                                    <span>3+ Tahun</span> Sudah Dipercaya
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="acontact__form wow fadeInUp" data-wow-delay=".8s">
                            <h3 className="acontact__form--title">Hubungi Kami</h3>
                            <form onSubmit={onsubmit}  >
                                <input type="text" name="nama" placeholder="Nama Anda" />
                                <div className="select__field--arrow">
                                    <select name="layanan">
                                        <option value="Cuci AC">Cuci AC</option>
                                        <option value="Tambah Freon">Tambah Freon AC R22 </option>
                                        <option value="Isi Freon">Isi Freon R22 0.5 - 1 PK	</option>
                                        <option value="Bongkar Pasang">Bongkar Pasang 0.5 - 1 PK</option>
                                        <option value="Las perbaikan">Las perbaikan kebocoran pipa freon 1,5 - 2 PK</option>
                                        <option value="Service Cuci">Service Cuci AC Standing Plor</option>
                                    </select>
                                </div>
                                <textarea name="alamat" placeholder="Masukkan Alamat" defaultValue={""} />
                                <button disabled={isLoading} type="submit">{isLoading ? <Spinner animation="border" /> : 'Kirim'}</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section></ >
    )
}

export default Contact