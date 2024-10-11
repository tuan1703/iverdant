import React from 'react'
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import data from '../../constants/product.json'
import { Image } from 'cloudinary-react';
import PageNavigation from '../../components/PageNavigation';
export default function Search() {

    const { searchTerm } = useParams();
    const [pro, setPro] = useState([]);
    const [res, setRes] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(9);
    const [totalPage, setTotalPage] = useState([]);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    async function getData() {
        const baseData = data.products;
        const filterData = baseData.filter((item) => item.ProName.toLowerCase().includes(searchTerm.toLowerCase()));

        await setRes(filterData);

        setTotalPage(Math.ceil(data.products.length / itemsPerPage));

        setPro(filterData.slice(startIndex, endIndex));
    }

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
        scrollToTop();
    };
    const handleChangeItemPerPage = (event) => {
        setItemsPerPage(event.target.value);
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    useEffect(() => {
        if (res.length == 0 && pro.length == 0) {
            getData();
        }
    }, [currentPage, itemsPerPage]);
    return (
        <div className='shop'>
            {res.length !== 0 && (
                <>
                    <Header />
                    <div className="container-fluid page-header py-5">
                        <h1 className="text-center text-white display-6 font-sans">Cửa hàng</h1>
                        <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item"><Link className='text-gray-500' to="/">Trang chủ</Link></li>
                            <li className="breadcrumb-item active text-white">Cửa hàng</li>
                        </ol>
                    </div>

                    <div className="container-fluid fruite">
                        <div className="container">
                            <div className="row g-4">
                                <div className="col-lg-12">
                                    <div className="row g-4">
                                        <div className="col-7"></div>
                                        <div className="col-xl-12 d-flex justify-end">
                                            <div className="bg-light ps-2 py-3 rounded d-flex justify-between mb-4 p-4">
                                                <label for="fruits">Hiển thị:</label>
                                                <select
                                                    id="fruits"
                                                    name="fruitlist"
                                                    className="border-0 form-select-sm bg-light me-1"
                                                    value={itemsPerPage}
                                                    onChange={(event) => handleChangeItemPerPage(event)}
                                                >
                                                    <option value="9">9</option>
                                                    <option value="12">12</option>
                                                    <option value="15">15</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row g-4">
                                        <div className="col-lg-12">
                                            <div className="row g-4 justify-content-center">
                                                {pro != null && pro.length > 0 && (
                                                    pro.map((item) => (
                                                        <div className="col-md-6 col-lg-6 col-xl-4 ">
                                                            <div className="rounded position-relative fruite-item">
                                                                <div className="fruite-img  product-item">
                                                                    <Image className="img-fluid w-100 rounded-top" cloudName="dklkzeill" publicId={item.ProImg} />
                                                                </div>

                                                                <div className="text-white bg-secondary px-3 py-1 rounded position-absolute top-[10px] left-[10px]"
                                                                >{item.Badge}</div>
                                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                                    <h4>{item.ProName}</h4>
                                                                    <p>Mô tả</p>
                                                                    <p className="text-dark fs-5 fw-bold mb-0">{item.ProPrice}</p><br />
                                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                                        <Link to={`/detail/${item.ProId}`}
                                                                            className="btn border border-secondary rounded-pill px-3 text-primary">
                                                                            <i className="fa fa-search me-2 text-primary"></i> Chi tiết</Link>
                                                                        <Link to={`#`}
                                                                            className="btn border border-secondary rounded-pill px-3 text-primary"><i
                                                                                className="fa fa-shopping-bag me-2 text-primary"></i> Mua ngay</Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))
                                                )}
                                                <PageNavigation currentPage={currentPage} handlePageChange={handlePageChange} totalPage={totalPage} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </>
            )
            }
        </div >
    )
}
