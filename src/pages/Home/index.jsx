import React from 'react'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../../assets/css/bootstrap.min.css'
import { SERVICE, HOME_FILTER } from '../../constants/common';
import { Image } from 'cloudinary-react';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import data from "../../constants/home_data.json"
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Suggest from '../../components/Suggest';
import { GoogleGenerativeAI } from '@google/generative-ai';

export default function Home() {
    const [products, setProducts] = useState([]);
    const [features, setFeatures] = useState([]);
    const [bestSell, setBestSell] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filter, setFilter] = useState(0);
    const [hasEnteredName, setHasEnteredName] = useState(false);

    const [userName, setUserName] = useState([]);
    const [error, setError] = useState('');
    const [messages, setMessages] = useState([]);
    const [currentMessage, setCurrentMessage] = useState('');

    const genAI = new GoogleGenerativeAI("AIzaSyDnLQNo0KIu4psvwi8N-8n4LODWFQU7C54")
    const model = genAI.getGenerativeModel({model: "gemini-1.5-flash"})
 
    const handleSendMessage = async () => {
        if (currentMessage.trim()) {
            const time = new Date().toLocaleTimeString();
            setMessages([...messages, { text: currentMessage, sender: 'user', time, name: userName+" " }]);
            setCurrentMessage('');

            const botReply = await fetchBotReply(currentMessage);
            setMessages(prevMessages => [...prevMessages, { text: botReply, sender: 'bot', time: new Date().toLocaleTimeString(), name: 'Bot ' }]);
        }
    };

    async function fetchBotReply(message) {
       try {
        const result = await model.generateContent("Trả lời bằng tiếng việt và ngắn gọn cho tôi với nội dung sau, trả lời trong lĩnh vực liên quan đến sản phẩm được làm từ bã mía (hộp, ly, ống hút, tô) và các câu chào hỏi khách hàng, nếu không cứ trả lời 'Tôi không hỗ trợ lĩnh vực này', giới hạn trong 50 từ"+message);
        const response = await result.response;
        return response.text();
    }
    catch (error) {
      console.log("Something Went Wrong");
    }
  }
    

    const handleNameSubmit = () => {
        if (typeof userName === 'string' && userName.trim()) {
            setHasEnteredName(true);
            setError('');
        } else {
            setError('Vui lòng nhập tên của bạn.');
        }
    };
    const handleFilter = (type) => {
        let init = data.products;
        setFilter(type);
        if (type > 0) {
            init = init.filter((products) => type == products.Category);
        }
        setProducts(init);
    }

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
    const handleSearch = () => {
        window.location.href = `/search/${searchTerm}`
    };

    function openChat() {
        document.getElementById("myChat").style.display = "block";
    }
    
    function closeChat() {
        document.getElementById("myChat").style.display = "none";
    }

    useEffect(() => {
        setProducts(data.products);
        setFeatures(data.features);
        setBestSell(data.bestSelling);
    }, []);
    return (
        <>
            <Header />
            {/* <!-- Modal Search Start --> */}
            <div className="modal fade" id="searchModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content rounded-0">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Tìm kiếm</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body d-flex align-items-center">
                            <div className="input-group w-75 mx-auto d-flex">
                                <input type="search" className="form-control p-3" placeholder="keywords"
                                    aria-describedby="search-icon-1" />
                                <span id="search-icon-1" className="input-group-text p-3"><i className="fa fa-search"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Modal Search End --> */}


            {/* <!-- Hero Start --> */}
            <div className="container-fluid py-5 mb-5 hero-header">
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-md-12 col-lg-7">
                            <h4 className="mb-3 text-secondary">100% Nguyên liệu thiên nhiên</h4>
                            <h1 className="mb-5 display-5 text-primary font-sans">Chất lượng đáng tin cậy</h1>
                            <div className="position-relative mx-auto">
                                <input className="form-control border-2 border-secondary w-75 py-3 px-4 rounded-pill" type="text"
                                    placeholder="Sản phẩm" onChange={(e) => setSearchTerm(e.target.value)} />
                                <button type="submit"
                                    className="btn btn-primary border-2 border-secondary py-3 px-4 position-absolute rounded-pill text-white h-100 top-0 right-[25%]"
                                    onClick={() => handleSearch()}>Tìm kiếm</button>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-5">
                            <div id="product-carousel"
                                className="carousel slide"
                                data-ride="carousel">
                                <div className="carousel-inner w-[100px] overflow-hidden">
                                    <div className="carousel-item active rounded">
                                        <Image cloudName="dklkzeill" publicId="iVerdant/Trays/iow2iblgvjzlddcklkls" className="img-fluid w-100 h-100 bg-secondary rounded" />
                                        <Link to="#" className="btn px-4 py-2 text-white rounded">Khay giấy</Link>
                                    </div>
                                    <div className="carousel-item rounded">
                                        <Image cloudName="dklkzeill" publicId="iVerdant/Straws/lprwcmgzxzrqmm5w85vc" className="img-fluid w-100 h-100 bg-secondary rounded" />
                                        <Link to="#" className="btn px-4 py-2 text-white rounded">Ống hút</Link>
                                    </div>
                                </div>
                                <a
                                    className="carousel-control-prev"
                                    href="#product-carousel"
                                    data-slide="prev"
                                >
                                    <i className="fa fa-2x fa-angle-left text-dark"></i>
                                </a>
                                <a
                                    className="carousel-control-next"
                                    href="#product-carousel"
                                    data-slide="next"
                                >
                                    <i className="fa fa-2x fa-angle-right text-dark"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Hero End --> */}


            {/* <!-- Featurs Section Start --> */}
            <div className="container-fluid featurs py-5">
                <div className="container py-5">
                    <div className="row justify-center space-x-16">
                        {SERVICE.map((item) => (
                            <div className="col-md-6 col-lg-3" key={item.TITLE}>
                                <div className="featurs-item text-center rounded bg-light p-4">
                                    <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                                        <i className={`${item.ICON} text-white`}></i>
                                    </div>
                                    <div className="featurs-content text-center">
                                        <h5>{item.TITLE}</h5>
                                        <p className="mb-0">{item.DES}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* <!-- Featurs Section End --> */}


            {/* <!-- Fruits Shop Start--> */}
            <div className="container-fluid fruite py-5">
                <div className="container py-5">
                    <div className="tab-class text-center">
                        <div className="row g-4">
                            <div className="col-lg-4 text-start">
                                <h1>Sản phẩm</h1>
                            </div>
                            <div className="col-lg-8 text-end">
                                <ul className="nav nav-pills d-inline-flex text-center mb-5">
                                    {HOME_FILTER.map((item, index) => (
                                        <li key={index} className="nav-item" onClick={() => handleFilter(index)}>
                                            <span className={`d-flex m-2 py-2 bg-light rounded-pill cursor-pointer ${index === filter ? 'active' : ''}`}>
                                                <span className="text-dark w-[130px]">{item.TITLE}</span>
                                            </span>
                                        </li>
                                    ))}

                                </ul>
                            </div>
                        </div>
                        <div className="tab-content">
                            <div className="tab-pane fade show p-0 active">
                                <div className="row g-4">
                                    <div className="col-lg-12">
                                        <div className="row g-4">
                                            {products.map((item) => (
                                                <div className="col-md-6 col-lg-4 col-xl-3" key={item.ProId}>
                                                    <div className="rounded position-relative fruite-item">
                                                        <div className="fruite-img h-[280px] overflow-hidden">
                                                            <Image cloudName="dklkzeill"
                                                                publicId={item.ProImg}
                                                                className=" rounded-top"
                                                            />
                                                        </div>
                                                        <div className="text-white bg-secondary px-3 py-1 rounded position-absolute top-[10px] left-[10px]"
                                                        >{item.Badge}</div>
                                                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                            <h4>{item.ProName}</h4>
                                                            <p>{item.ProDes}</p>
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
                                            ))}


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Fruits Shop End--> */}


            {/* <!-- Featurs Start --> */}
            <div className="container-fluid service py-5">
                <div className="container py-5">
                    <div className="row g-4 justify-content-center">
                        {features.map((item, index) => (
                            <div className="col-md-6 col-lg-4" key={index}>
                                <Link to="#">
                                    <div className={`service-item  rounded border ${item.Background} ${item.Border}`}>
                                        <div className='h-[280px] overflow-hidden'>
                                            <Image cloudName="dklkzeill"
                                                publicId={item.ProImg}
                                                className="-translate-y-5"
                                            />
                                        </div>
                                        <div className="px-4 rounded-bottom">
                                            <div className={`service-content text-center p-4 rounded ${item.Foreground}`}>
                                                <h5 className={item.Text}>{item.Title}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div >
            {/* <!-- Featurs End --> */}

            <Suggest res={data.products} owlCarouselOptions={owlCarouselOptions} text={"Danh sách"} />

            {/* <!-- Banner Section Start--> */}
            <div div className="container-fluid banner bg-secondary my-5" >
                <div className="container py-5">
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-6">
                            <div className="py-4">
                                <h1 className="display-3 text-white">Phong cách</h1>
                                <p className="fw-normal display-3 text-dark mb-4">trong từng sản phẩm</p>
                                <p className="mb-4 text-dark">Mỗi sản phẩm đều được thiết kế với phong cách đặc biệt, từ nội dung đến hình ảnh, nhằm tạo ra sự khác biệt giữa các sản phẩm.</p>
                                <Link to="#"
                                    className="banner-btn btn border-2 border-white rounded-pill text-dark py-3 px-5">Mua ngay</Link>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="position-relative">
                                <Image cloudName="dklkzeill" publicId="iVerdant/Trays/iow2iblgvjzlddcklkls" />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            {/* <!-- Banner Section End --> */}


            {/* <!-- Bestsaler Product Start --> */}
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="text-center mx-auto mb-5 max-w-[700px]">
                        <h1 className="display-4 font-sans">Sản phẩm bán chạy</h1>
                    </div>
                    <div className="row g-4">
                        {bestSell.map((item, index) => (
                            <div className="col-lg-6 col-xl-4" key={index}>
                                <div className="p-4 rounded bg-light">
                                    <div className="row align-items-center">
                                        <div className="col-6">
                                            <Image cloudName="dklkzeill" publicId={item.ProImg} />
                                        </div>
                                        <div className="col-6">
                                            <Link to={`/detail/${item.ProId}`} className="h5">{item.ProName}</Link>
                                            <h4 className="mb-3">{item.ProPrice}</h4>
                                            <Link to={`/detail/${item.ProId}`} className="btn border border-secondary rounded-pill px-3 text-primary"><i
                                                className="fa fa-shopping-bag me-2 text-primary"></i> Mua ngay</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* <!-- Bestsaler Product End --> */}


            {/* <!-- Fact Start --> */}
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="bg-light p-5 rounded">
                        <div className="row g-4 justify-content-center">
                            <div className="col-md-6 col-lg-6 col-xl-3">
                                <div className="counter bg-white rounded p-5">
                                    <i className="fa fa-users text-secondary"></i>
                                    <h4>satisfied customers</h4>
                                    <h1>1963</h1>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-3">
                                <div className="counter bg-white rounded p-5">
                                    <i className="fa fa-users text-secondary"></i>
                                    <h4>quality of service</h4>
                                    <h1>99%</h1>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-3">
                                <div className="counter bg-white rounded p-5">
                                    <i className="fa fa-users text-secondary"></i>
                                    <h4>quality certificates</h4>
                                    <h1>33</h1>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-3">
                                <div className="counter bg-white rounded p-5">
                                    <i className="fa fa-users text-secondary"></i>
                                    <h4>Available Products</h4>
                                    <h1>789</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="chat-popup" id="myChat">
                    <div className="chat-header">
                        <h4 className='text-white'>Chăm sóc khách hàng</h4>
                        <button className="close-btn" onClick={closeChat}>X</button>
                    </div>
                    <div className="chat-body">
                        {!hasEnteredName ? (
                            <div className="messages">
                                <input
                                    type="text"
                                    placeholder="Nhập tên..."
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                />
                                <button className="send-btn" onClick={handleNameSubmit}>Ok</button>
                                {error && <p className="error-message">{error}</p>}
                            </div>
                        ) : (
                            <>
                                  <div className="messages">
                                    {messages.map((msg, index) => (
                                        <div key={index} className={`message ${msg.sender}`}>
                                            <div className="message-info">
                                                <span className="message-name">{msg.name}</span>
                                                <span className="message-time">{msg.time}</span>
                                            </div>
                                            <div className="message-text">{msg.text}</div>
                                        </div>
                                    ))}
                                </div>
                                <textarea
                                    placeholder="Nhập tin nhắn..."
                                    value={currentMessage}
                                    onChange={(e) => setCurrentMessage(e.target.value)}
                                ></textarea>
                                <button className="send-btn" onClick={handleSendMessage}>Gửi</button>
                            </>
                        )}
                    </div>
                </div>

            <button className="chat-icon" onClick={() => openChat()}>💬</button>
            <Footer />
        </>
    )
}
