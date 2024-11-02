import React from 'react'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function Header() {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [isSearch, setIsSearch] = useState(false);

    const [searchTerm, setSearchTerm] = useState("");

    const handleDropDown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    }

    const handleWindowResize = () => {
        // Check window width to determine if it's resized back to full screen
        if (window.innerWidth >= 1200) { // Adjust the breakpoint according to your design
            setIsDropdownVisible(false); // Ensure dropdown is shown and not collapsed
        } else {
            setIsDropdownVisible(true); // Collapse the dropdown on smaller screens
        }
    };
    const handleSearch = () => {
        window.location.href = `/search/${searchTerm}`
    };
    useEffect(() => {
        // Initial check
        handleWindowResize();

        // Add event listener
        window.addEventListener('resize', handleWindowResize);

        // Cleanup on unmount
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);
    return (
        <>
            {/* <!-- Navbar start --> */}
            <div className="container-fluid fixed-top">
                <div className="container topbar bg-primary d-none d-lg-block">
                    <div className="d-flex justify-content-between">
                        <div className="top-info ps-2">
                            <small className="me-3"><i className="fas fa-map-marker-alt me-2 text-secondary"></i> <Link to="#"
                                className="text-white">Ninh Kieu, Can Tho</Link></small>
                            <small className="me-3"><i className="fas fa-envelope me-2 text-secondary"></i><Link to="#"
                                className="text-white">iverdant@gmail.com</Link></small>
                        </div>
                        <div className="top-link pe-2">
                            <Link to="#" className="text-white"><small className="text-white mx-2"> Chính sách bảo mật</small></Link>
                        </div>
                    </div>
                </div>
                <div className="container px-0">
                    <nav className="navbar navbar-light bg-white navbar-expand-xl">
                        <Link to="/" className="navbar-brand">
                            <h1 className="text-primary display-6">iVerdant</h1>
                        </Link>
                        <button className="navbar-toggler py-2 px-3" type="button" onClick={() => handleDropDown()}>
                            <span className="fa fa-bars text-primary"></span>
                        </button>
                        <div className={`${isDropdownVisible ? 'collapse' : 'show'} navbar-collapse bg-white`} id="navbarCollapse">
                            <div className="navbar-nav mx-auto">
                                <div className="navbar-nav mx-auto">
                                    <Link to="/" className="nav-item nav-link ">Trang chủ</Link>
                                    <Link to="/shop" className="nav-item nav-link">Cửa hàng</Link>
                                    <div className="nav-item dropdown">
                                        <Link to="/trademark" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Về chúng tôi</Link>
                                        <div className="dropdown-menu m-0 bg-secondary rounded-0">
                                            <Link to="/trademark" className="dropdown-item">Khởi nguồn thương hiệu</Link>
                                            <Link to="/Commit" className="dropdown-item">Lời cam kết</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex m-3 me-0">
                                <button
                                    className="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4"
                                    data-bs-toggle="modal" data-bs-target="#searchModal" onClick={() => setIsSearch(true)}><i
                                        className="fas fa-search text-primary"></i></button>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            {/* <!-- Navbar End --> */}

            {isSearch && (
                <div className="modal fade show d-block" id="searchModal">
                    <div className="modal-dialog modal-fullscreen">
                        <div className="modal-content rounded-0">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Tìm kiếm sản phẩm</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setIsSearch(false)}></button>
                            </div>
                            <div className="modal-body d-flex align-items-center">
                                <div className="input-group w-75 mx-auto d-flex">
                                    <input type="text" className="form-control p-3" placeholder="Nhập tên sản phẩm"
                                        aria-describedby="search-icon-1" onChange={(e) => setSearchTerm(e.target.value)} />
                                    <button id="search-icon-1" className="input-group-text p-3" onClick={() => handleSearch()}><i className="fa fa-search"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
