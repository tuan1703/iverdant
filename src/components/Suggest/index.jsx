import { Image } from "cloudinary-react";
import React from "react";
import OwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";

const Suggest = ({ res, owlCarouselOptions, text }) => {
    return (
        <>
            <div className="container-fluid vesitable ">
                <div className="container ">
                    <h1>{text}</h1>
                    <OwlCarousel className="owl-carousel vegetable-carousel justify-content-center"
                        {...owlCarouselOptions}>
                        {res.map((item) => (
                            <>
                                <div className="border border-primary rounded position-relative vesitable-item" key={item.ProId}>
                                    <div className="vesitable-img h-[280px] overflow-hidden">
                                        <Image cloudName="dklkzeill" publicId={item.ProImg} />
                                    </div>
                                    <div className="text-white bg-primary px-3 py-1 rounded position-absolute top-[10px] right-[10px]"
                                    >{item.Badge}</div>
                                    <div className="p-4 rounded-bottom">
                                        <h4>{item.ProName}</h4>
                                        <p>{item.ProDes}</p>
                                        <p className="text-dark fs-5 fw-bold mb-0">{item.ProPrice}</p><br />
                                        <div className="d-flex justify-content-between flex-lg-wrap">
                                            <Link to={`/detail/${item.ProId}`}
                                                className="btn border border-secondary rounded-pill px-3 text-primary">
                                                <i className="fa fa-search me-2 text-primary"></i> Chi tiết</Link>
                                            <Link to={item.Link}
                                                className="btn border border-secondary rounded-pill px-3 text-primary"><i
                                                    className="fa fa-shopping-bag me-2 text-primary"></i> Mua ngay</Link>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))}

                    </OwlCarousel>
                </div>
            </div>
        </>
    );
};

export default Suggest;
