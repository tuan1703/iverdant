import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import { Link } from 'react-router-dom';
import data from "../../constants/product.json"
import { Image } from 'cloudinary-react';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Suggest from '../../components/Suggest';
export default function Detail() {
    const [pro, SetPro] = useState({});
    const [products, SetProducts] = useState([]);

    const { id } = useParams();

    const owlCarouselOptions = {
        loop: true,
        margin: 29,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 4,
            },
        },
    };
    async function GetData() {
        await SetProducts(data.products);

        let init = data.products.filter((products) => id == products.ProId);

        if (init.length > 0) {
            SetPro(init[0]);
        } else {
            SetPro({});
        }

        if (init.length > 0) {
            let filter = data.products.filter((product) => product.Category === init[0].Category);
            SetProducts(filter);
        }

    }
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    useEffect(() => {
        GetData();
        scrollToTop();
    }, [id]);
    return (
        <>
            <Header />
            {/* <!-- Single Page Header start --> */}
            <div className="container-fluid page-header py-5">
                <h1 className="text-center text-white display-6 font-sans">Chi tiết sản phẩm</h1>
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item"><Link className='text-gray-500' to="/">Trang chủ</Link></li>
                    <li className="breadcrumb-item active text-white">Chi tiết</li>
                </ol>
            </div>
            {/* <!-- Single Page Header End --> */}

            {/* <!-- Single Product Start --> */}
            <div className="container-fluid mt-5">
                <div className="container">
                    <div className="row g-4 mb-5">
                        <div className="col-lg-12">
                            <div className="row g-4">
                                <div className="col-lg-6">
                                    <div className="border rounded">
                                        <Link to="#">
                                            <Image cloudName="dklkzeill" publicId={pro.ProImg} className="img-fluid rounded" />

                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <h4 className="fw-bold mb-3">{pro.ProName}</h4>
                                    <p className="mb-3">Danh mục: {pro.Badge}</p>
                                    <h5 className="fw-bold mb-3">{pro.ProPrice}</h5>
                                    <div
                                        dangerouslySetInnerHTML={{ __html: pro.Description }}
                                    />

                                    <Link to={pro.Link} className="btn border border-secondary rounded-pill px-4 py-2 mb-4 text-primary"><i
                                        className="fa fa-shopping-bag me-2 text-primary"></i> Mua ngay</Link>
                                </div>
                                <div className="col-lg-12">
                                    <nav>
                                        <div className="nav nav-tabs mb-3">
                                            <span className="nav-link active border-white border-bottom-0" type="button" role="tab"
                                                id="nav-about-tab" data-bs-toggle="tab" data-bs-target="#nav-about"
                                                aria-controls="nav-about" aria-selected="true">Thông tin sản phẩm</span>

                                        </div>
                                    </nav>
                                    <div className="tab-content mb-5">
                                        <div className="tab-pane active" id="nav-about" role="tabpanel" aria-labelledby="nav-about-tab">
                                            <div className="information">
                                                <div>
                                                    <h3 className='underline decoration-solid'>{pro.ProName} có đặc điểm gì?</h3>
                                                    <div
                                                        dangerouslySetInnerHTML={{ __html: pro.Characteristic }}
                                                    />
                                                </div>
                                                <div>
                                                    <h3 className='underline decoration-solid mt-8'>Công dụng của {pro.ProName}</h3>
                                                    <div
                                                        dangerouslySetInnerHTML={{ __html: pro.Uses }}
                                                    />
                                                </div>
                                                <div>
                                                    <h3 className='underline decoration-solid mt-8'>Nguyên liệu sản xuất của {pro.ProName}</h3>
                                                    <p>{pro.Material}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {products.length > 0 && (
                <Suggest res={products} owlCarouselOptions={owlCarouselOptions} text={"Sản phẩm liên quan"} />
            )}
            {/* <!-- Single Product End --> */}
            <Footer />

        </>
    )
}
