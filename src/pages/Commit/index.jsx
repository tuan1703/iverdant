import React from 'react'
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
export default function Commit() {
    return (
        <>
            <Header />
            <div className='container-fluid py-5 mb-5 hero-header'>
                <div className='px-[75px] py-[50px]'>
                    <div className='w-max-[1200px]'>
                        <div className='row'>
                            <div className='col-md-6 mb-3'>
                                <img width="1000%" src={require("../../assets/img/bien-ban-cam-ket-chiu-trach-nhiem-5.jpeg")} alt="" />
                            </div>
                            <div className='col-md-6 mb-3'>
                                <h3 className='text-center text-[30px] leading-[30px] mb-5'>LỜI CAM KẾT</h3>
                                <div>
                                    <h5>1. Chất Lượng Hàng Đầu:</h5>
                                    <ul className='list-disc text-[#111]'>
                                        <li>Sử dụng nguyên liệu tự nhiên, an toàn và thân thiện với môi trường trong tất cả các sản phẩm của chúng tôi.</li>
                                        <li>Đảm bảo mỗi sản phẩm đều trải qua quy trình kiểm định nghiêm ngặt để đạt được chất lượng tốt nhất.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5>2. Đổi Mới Và Sáng Tạo:</h5>
                                    <ul className='list-disc text-[#111]'>
                                        <li>Luôn nỗ lực nghiên cứu và phát triển các sản phẩm mới, đáp ứng nhu cầu đa dạng của khách hàng.</li>
                                        <li>Khuyến khích và áp dụng những cải tiến công nghệ để nâng cao hiệu quả sản xuất và chất lượng sản phẩm.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5>3. Bảo Vệ Môi Trường:</h5>
                                    <ul className='list-disc text-[#111]'>
                                        <li>Đặt ưu tiên hàng đầu vào việc sử dụng các nguồn tài nguyên tái tạo và giảm thiểu rác thải.</li>
                                        <li>Góp phần xây dựng một tương lai xanh, bền vững cho thế hệ mai sau.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5>4. Khách Hàng Là Trọng Tâm:</h5>
                                    <ul className='list-disc text-[#111]'>
                                        <li>Lắng nghe và phản hồi mọi ý kiến từ khách hàng để hoàn thiện và nâng cao dịch vụ.</li>
                                        <li>Cam kết mang đến trải nghiệm sử dụng và sự hài lòng tối đa cho khách hàng.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5>5. Trách Nhiệm Xã Hội:</h5>
                                    <ul className='list-disc text-[#111]'>
                                        <li>Tham gia và ủng hộ các hoạt động cộng đồng, góp phần xây dựng xã hội tốt đẹp hơn.</li>
                                        <li>Tạo ra môi trường làm việc thân thiện, an toàn và phát triển cho tất cả nhân viên.</li>
                                    </ul>
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
