import React from 'react'
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import data from "../../constants/product.json"
import { Image } from 'cloudinary-react';
import { Link } from 'react-router-dom';

export default function Checkout() {

    return (
        <>
            <Header />
        <div class="container-fluid page-header py-5">
            <h1 class="text-center text-white display-6">Thanh toán</h1>
            <ol class="breadcrumb justify-content-center mb-0">
                <li class="breadcrumb-item"><Link to="/">Trang chủ</Link></li>
                <li class="breadcrumb-item active text-white">Thanh toán</li>
            </ol>
        </div>

        <div className="container-fluid py-5">
            <div className="container py-5">
                <h1 className="mb-4">Chi tiết thanh toán</h1>
                <form action="#">
                    <div className="row g-5">
                        <div className="col-md-12 col-lg-6 col-xl-5">
                            <div className="row">
                                <div className="col-md-12 col-lg-6">
                                    <div className="form-item w-100">
                                        <label className="form-label my-3">Tên<sup>*</sup></label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-6">
                                    <div className="form-item w-100">
                                        <label className="form-label my-3">Họ<sup>*</sup></label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-item">
                                <label className="form-label my-3">Địa chỉ <sup>*</sup></label>
                                <input type="text" className="form-control" placeholder="House Number Street Name"/>
                            </div>
                            <div className="form-item">
                                <label className="form-label my-3">Số điện thoại<sup>*</sup></label>
                                <input type="tel" className="form-control"/>
                            </div>
                            <div className="form-item">
                                <label className="form-label my-3">Địa chỉ email<sup>*</sup></label>
                                <input type="email" className="form-control"/>
                            </div>

                            <hr/>

                            <div className="form-item">
                                <textarea name="text" className="form-control" spellcheck="false" cols="30" rows="11" placeholder="Ghi chú (Tuỳ chọn)"></textarea>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6 col-xl-7">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr className='text-center'>
                                            <th scope="col">Sản phẩm</th>
                                            <th scope="col">Tên sản phẩm</th>
                                            <th scope="col">Giá</th>
                                            <th scope="col">Số lượng</th>
                                            <th scope="col">Tổng giá</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className='text-center'>
                                            <th scope="row">
                                                <div className="d-flex align-items-center mt-2">
                                                <Image cloudName="dklkzeill" publicId="iVerdant/Straws/lprwcmgzxzrqmm5w85vc" width="200px"/>
                                                </div>
                                            </th>
                                            <td className="py-5">Ống hút phi 6</td>
                                            <td className="py-5">22.500đ/50 cái</td>
                                            <td className="py-5">10</td>
                                            <td className="py-5">225.000đ</td>
                                        </tr>
                                        <tr className='text-center'>
                                            <th scope="row">
                                                <div className="d-flex align-items-center mt-2">
                                                <Image cloudName="dklkzeill" publicId="iVerdant/Trays/iow2iblgvjzlddcklkls" width="200px"/>
                                                </div>
                                            </th>
                                            <td className="py-5">Khay chữ nhật 600ml</td>
                                            <td className="py-5">130.000đ/50 cái</td>
                                            <td className="py-5">10</td>
                                            <td className="py-5">1.300.000đ</td>
                                        </tr>
                                        <tr className='text-center'>
                                            <th scope="row">
                                                <div className="d-flex align-items-center mt-2">
                                                <Image cloudName="dklkzeill" publicId="iVerdant/Trays/iow2iblgvjzlddcklkls" width="200px"/>
                                                </div>
                                            </th>
                                            <td className="py-5">Khay oval 750ml + nắp</td>
                                            <td className="py-5">180.000đ/50 cái</td>
                                            <td className="py-5">20</td>
                                            <td className="py-5">3.600.000đ</td>
                                        </tr>

                                        <tr>
                                            <th scope="row">
                                            </th>
                                            <td className="py-5">
                                                <p className="mb-0 text-dark text-uppercase py-3">Tổng giá</p>
                                            </td>
                                            <td className="py-5"></td>
                                            <td className="py-5"></td>
                                            <td className="py-5">
                                                <div className="py-3 border-bottom border-top">
                                                    <p className="mb-0 text-dark">5.125.500đ</p>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
                                <div className="col-12">
                                    <div className="form-check text-start my-3">
                                        <input type="radio" className="form-check-input bg-primary border-0" id="Transfer-1" name="Payments" value="Transfer"defaultChecked={true}/>
                                        <label className="form-check-label" for="Transfer-1">Thanh toán khi nhận hàng</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
                                <div className="col-12">
                                    <div className="form-check text-start my-3">
                                        <input type="radio" className="form-check-input bg-primary border-0" id="Payments-1" name="Payments" value="Payments" />
                                        <label className="form-check-label" for="Payments-1">Thẻ tín dụng/Ghi nợ</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
                                <div className="col-12">
                                    <div className="form-check text-start my-3">
                                        <input type="radio" className="form-check-input bg-primary border-0" id="Delivery-1" name="Payments" value="Delivery"/>
                                        <label className="form-check-label" for="Delivery-1">Ví điện tử</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row g-4 text-center align-items-center justify-content-center pt-4">
                                <button type="button" className="btn border-secondary py-3 px-4 text-uppercase w-100 text-primary">Thanh toán</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>

            <Footer />
        </>
    )
}
