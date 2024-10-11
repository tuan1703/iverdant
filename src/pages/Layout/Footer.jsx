import React from 'react'
import { Link } from "react-router-dom";
import { SOCIAL_CONTACT, INFO, CONTACT } from '../../constants/common';
export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return (
        <>
            {/* <!-- Footer Start --> */}
            <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5">
                <div className="container py-5">
                    <div className="pb-4 mb-4 border-b-[1px] border-solid bordder-[rgba(226, 175, 24, 0.5)]">
                        <div className="row g-4">
                            <div className="col-lg-9">
                                <Link to="#">
                                    <h1 className="text-primary mb-0">iVerdant</h1>
                                    <p className="text-secondary mb-0">Sản phẩm thân thiện môi trường</p>
                                </Link>
                            </div>
                            <div className="col-lg-3">
                                <div className="d-flex justify-content-end pt-3">

                                    {SOCIAL_CONTACT.map((item, index) => (
                                        <Link key={index} className="btn  btn-outline-secondary me-2 btn-md-square rounded-circle" to={item.LINK}><i
                                            className={item.ICON}></i></Link>
                                    ))}

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-4 col-md-6">
                            <div className="footer-item">
                                <h4 className="text-light mb-3">Tại sao mọi người yêu thích chúng tôi!</h4>
                                <span className="mb-4">iVerdant cung cấp đa dạng các loại sản phẩm thân thiện với môi trường và đảm bảo sức khoẻ người tiêu dùng</span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="d-flex flex-column text-start footer-item">
                                <h4 className="text-light mb-3">Thông tin</h4>

                                {INFO.map((item, index) => (
                                    <Link key={index} className="btn-link" to={item.LINK}>{item.TITLE}</Link>
                                ))}
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4">
                            <div className="footer-item">
                                <h4 className="text-light mb-3">Thông tin liên hệ</h4>
                                {CONTACT.map((item, index) => (
                                    <p key={index}>{item.TITLE}</p>
                                ))}
                                <img src="img/payment.png" className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Footer End --> */}

            {/* <!-- Copyright Start --> */}
            <div className="container-fluid copyright bg-dark py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            <span className="text-light"><Link to="#"><i className="fas fa-copyright text-light me-2"></i>iVerdant</Link>, All right reserved.</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Copyright End --> */}
            {/* <!-- Back to Top --> */}
            <button className="btn btn-primary border-3 border-primary rounded-circle back-to-top" onClick={() => scrollToTop()}><i
                className="fa fa-arrow-up"></i></button>
        </>
    )
}
