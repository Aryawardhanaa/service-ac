import { Table } from "react-bootstrap";

const arr = [
    {
        "layanan": "CUCI BIASA",
        "unit": "0,5 - 1 PK",
        "harga": "Rp70.000"
    },
    {
        "layanan": "CUCI BIASA",
        "unit": "CUCI BIASA",
        "harga": "Rp80.000"
    },
    {
        "layanan": "CUCI INVERTER",
        "unit": "0,5 - 1 PK",
        "harga": "Rp100.000"
    },
    {
        "layanan": "CUCI INVERTER",
        "unit": "1,5 - 2 PK",
        "harga": "Rp140.000"
    },
    {
        "layanan": "CUCI Chemical BOCOR AIR/ Perbaikan",
        "unit": "0,5 - 2 PK",
        "harga": "Rp200.000"
    },
    {
        "layanan": "TURUN INDOOR",
        "unit": "0,5 - 2 PK",
        "harga": "Rp350.000"
    },
    {
        "layanan": "BONGKAR AC",
        "unit": "0,5 - 1 PK",
        "harga": "Rp120.000"
    },
    {
        "layanan": "BONGKAR AC",
        "unit": "1,5 - 2 PK",
        "harga": "Rp150.000"
    },
    {
        "layanan": "BONGKAR PASANG (Back to back)",
        "unit": "0,5 - 1 PK",
        "harga": "Rp350.000"
    },
    {
        "layanan": "BONGKAR PASANG (Back to back)",
        "unit": "1,5 - 2 PK",
        "harga": "Rp400.000"
    },
    {
        "layanan": "PASANG AC (Back to back)",
        "unit": "0,5 - 1 PK",
        "harga": "Rp250.000"
    },
    {
        "layanan": "PASANG AC (Back to back)",
        "unit": "1,5 - 2 PK",
        "harga": "Rp350.000"
    },
    {
        "layanan": "TAMBAH FREON R22/R32/R410",
        "unit": "0,5- 1 PK",
        "harga": "Rp150.000"
    },
    {
        "layanan": "TAMBAH FREON R22/R32/R410",
        "unit": "1,5-2 PK",
        "harga": "Rp200.000"
    },
    {
        "layanan": "JASA PENGECEKAN AC SPLIT",
        "unit": "/UNIT",
        "harga": "Rp50.000"
    },
    {
        "layanan": "ISI FREON R 22/32/410",
        "unit": "0,5-1 PK",
        "harga": "Rp350.000"
    },
    {
        "layanan": "ISI FREON R 22/32/410",
        "unit": "1,5-2 PK",
        "harga": "Rp400.000"
    },
    {
        "layanan": "PERBAIKAN Modul PCB",
        "unit": "PCB",
        "harga": "Rp400.000"
    },
    {
        "layanan": "GANTI/ Bongkar KOMPRESSOR Second",
        "unit": "0,5 - 1 PK",
        "harga": "Rp1.200.000"
    },
    {
        "layanan": "GANTI/ Bongkar KOMPRESSOR Second",
        "unit": "1,5 - 2 PK",
        "harga": "Rp1.600.000"
    },
    {
        "layanan": "OVERHOULD KOMPRESOR",
        "unit": "0,5 - 1 PK",
        "harga": "Rp900.000"
    },
    {
        "layanan": "OVERHOULD KOMPRESOR",
        "unit": "1,5 - 2 PK",
        "harga": "Rp1.200.000"
    },
    {
        "layanan": "INSTALASI CONNECTING PIPA SET",
        "unit": "/Meter",
        "harga": "Rp20.000"
    },
    {
        "layanan": "PIPA PERMETER Artic + Instalasi",
        "unit": "0,5 - 1 PK",
        "harga": "Rp100.000"
    },
    {
        "layanan": "PIPA PERMETER Artic + Instalasi",
        "unit": "1,5-2 PK",
        "harga": "Rp120.000"
    },
    {
        "layanan": "KABEL/ METER",
        "unit": "2X1,5",
        "harga": "Rp16.000"
    },
    {
        "layanan": "KABEL/ METER",
        "unit": "2x2,5",
        "harga": "Rp19.000"
    },
    {
        "layanan": "SELANG PEMBUANGAN",
        "unit": "/ Meter",
        "harga": "Rp7.000"
    },
    {
        "layanan": "BREKET Outdoor",
        "unit": "0,5 - 1 PK",
        "harga": "Rp85.000"
    },
    {
        "layanan": "BREKET OUTDOOR",
        "unit": "1,5-2 PK",
        "harga": "Rp95.000"
    },
    {
        "layanan": "REMOTE JOKER",
        "unit": "-",
        "harga": "Rp85.000"
    },
    {
        "layanan": "VACUM",
        "unit": "0,5-1 PK",
        "harga": "Rp80.000"
    },
    {
        "layanan": "VACUM",
        "unit": "1,5 -2 PK",
        "harga": "Rp100.000"
    },
    {
        "layanan": "LAS PIPA /TITIK",
        "unit": "-",
        "harga": "Rp50.000"
    },
    {
        "layanan": "BOBOK PIPA TANAM",
        "unit": "/Meter",
        "harga": "Rp150.000"
    },
    {
        "layanan": "Jasa PERBAIKAN BOCOR OBAT",
        "unit": "0,5-1 PK",
        "harga": "Rp100.000"
    },
    {
        "layanan": "GANTI KAPASITOR KOM",
        "unit": "0,5-1 PK",
        "harga": "Rp200.000"
    },
    {
        "layanan": "GANTI KAPASITOR KOM",
        "unit": "1,5 -2 PK",
        "harga": "Rp250.000"
    },
    {
        "layanan": "GANTI KAPASITOR FUN indoor",
        "unit": "0,5-1 PK",
        "harga": "Rp140.000"
    },
    {
        "layanan": "GANTI KAPASITOR FUN Indoor",
        "unit": "1,5 -2 PK",
        "harga": "Rp180.000"
    },
    {
        "layanan": "GANTI THERMIS STAR",
        "unit": "0,5-2 PK",
        "harga": "Rp150.000"
    },
    {
        "layanan": "Ganti Sensor Remote PCB",
        "unit": "-",
        "harga": "Rp200.000"
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
                    <div className="row mb-5 justify-content-center">
                        <div className="col-lg-9 d-flex ">

                            <Table striped bordered hover className="text-center">
                                <thead style={{ backgroundColor: "#ff6600", color: "#fff" }}>
                                    <tr>
                                        <th align="center" style={{ width: "10%" }} className="w-10">No</th>
                                        <th>Layanan</th>
                                        <th>Unit</th>
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
                </div>
            </div>
        </>
    );
}

export default Harga;