import { Table } from "react-bootstrap";

const arr = [
    {
        "layanan": "Cuci Split",
        "unit": "0.5 – 1",
        "harga": "Rp50.000"
    },
    {
        "layanan": "Cuci Split",
        "unit": "1.5 – 2",
        "harga": "Rp55.000"
    },
    {
        "layanan": "Isi Penuh Freon (dari kosong)",
        "unit": "0.5 – 1",
        "harga": "Rp250.000"
    },
    {
        "layanan": "Isi Baru Freon (dari kosong)",
        "unit": "1.5 – 2",
        "harga": "Rp300.000"
    },
    {
        "layanan": "Tambah Freon",
        "unit": "0.5 – 1",
        "harga": "Rp100.000"
    },
    {
        "layanan": "Tambah Freon",
        "unit": "1.5 – 2",
        "harga": "Rp110.000"
    },
    {
        "layanan": "Bongkar",
        "unit": "0.5 – 2",
        "harga": "Rp125.000"
    },
    {
        "layanan": "Pasang",
        "unit": "0.5 – 2",
        "harga": "Rp225.000"
    },
    {
        "layanan": "Bongkar Pasang",
        "unit": "0.5 – 1",
        "harga": "Rp450.000"
    },
    {
        "layanan": "Bongkar Pasang",
        "unit": "1.5 – 2",
        "harga": "Rp500.000"
    },
    {
        "layanan": "Cuci Besar Split",
        "unit": "0.5 - 1",
        "harga": "Rp300.000"
    },
    {
        "layanan": "Cuci Besar Split",
        "unit": "1.5 - 2",
        "harga": "Rp350.000"
    },
    {
        "layanan": "Bobok Tembok",
        "unit": null,
        "harga": "Rp75.000"
    },
    {
        "layanan": "Cuci Casette, Central, Standing",
        "unit": "2 – 5",
        "harga": "Rp125.000"
    },
    {
        "layanan": "Cuci Casette, Central, Standing",
        "unit": "> 5",
        "harga": "Rp225.000"
    },
    {
        "layanan": "Perbaikan Lain / Spart Part (Split, Casette, Central, Standing)",
        "unit": "0.5 – 5",
        "harga": "Disesuaikan"
    }
]



const Harga = () => {
    return (
        <>
            <div className="choose-area-3 pt-5 my-5"
                data-background="/assets/img/choose/choose-bg3.jpg"
                style={{ backgroundImage: `url("/assets/img/choose/choose-bg3.jpg")` }}>


                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div
                                className="section-title-wrapper mb-70 text-center wow fadeInUp"
                                data-wow-delay=".3s"
                            >
                                <h2 className="section-title">
                                    Daftar Harga  <span>Layanan</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-9 d-flex ">

                            <Table striped bordered hover className="text-center">
                                <thead style={{ backgroundColor: "#ff6600", color: "#fff" }}>
                                    <tr>
                                        <th align="center" style={{ width: "10%" }} className="w-10">No</th>
                                        <th>Layanan</th>
                                        <th>Size / PK</th>
                                        <th>Harga</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        arr.map((val, i) => (
                                            <>

                                                <tr>
                                                    <td>{i + 1}</td>
                                                    <td>{val.layanan}</td>
                                                    <td>{val.unit}</td>
                                                    <td>{val.harga}</td>
                                                </tr>
                                            </>
                                        ))
                                    }

                                </tbody>
                            </Table>
                        </div>
                    </div>
                    <div className="container row mb-5 justify-content-center">
                        <p className="text-center">*Catatan : untuk wilayah kerja diatas radius 10KM dari lokasi kami akan dikenakan biaya tambahan Rp.10.000 </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Harga;