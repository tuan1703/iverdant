import React from 'react'
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
export default function TradeMark() {
    return (
        <>
            <Header />
            <div className='container-fluid py-5 mb-5 hero-header'>
                <div className='px-[75px] py-[50px]'>
                    <div className='w-max-[1200px]'>
                        <div className='row'>
                            <div className='col-md-6 mb-3'>
                                <img width="1000%" src={require("../../assets/img/chin-anhbb.jpg")} alt="" />
                            </div>
                            <div className='col-md-6 mb-3'>
                                <h3 className='text-center text-[30px] leading-[30px] mb-5'>KHỞI NGUỒN THƯƠNG HIỆU</h3>
                                <p className='text-[17px] leading-6 text-[#111] text-justify mb-4'>Bắt nguồn từ khát vọng chinh phục và mong muốn thổi làn gió mới vào thị trường sản phẩm bền vững. iVerdant ra đời với sứ mệnh và trách nhiệm mang đến những sản phẩm thân thiện với môi trường, an toàn và tiện ích đến với mọi người tiêu dùng.</p>
                                <p className='text-[17px] leading-6 text-[#111] text-justify mb-4'>Những bước đi đầu tiên, iVerdant bắt tay vào quá trình gian nan tìm kiếm các nguyên liệu tự nhiên và chất lượng hàng đầu, kiến tạo nên muôn vàn sản phẩm độc đáo từ bã mía - một nguyên liệu có nguồn gốc tự nhiên và tái tạo. Chúng tôi luôn nỗ lực để đảm bảo mỗi sản phẩm không chỉ thân thiện với môi trường mà còn đáp ứng được nhu cầu và tiêu chuẩn cao nhất của người tiêu dùng.</p>
                                <p className='text-[17px] leading-6 text-[#111] text-justify mb-4'>Những bước đi tiếp theo, chúng tôi không ngần ngại đổi mới, sáng tạo mỗi ngày, vượt qua giới hạn của bản thân để chinh phục được trái tim của mỗi khách hàng. Điều này mang đến một kết quả vô cùng ý nghĩa khi đối với họ, iVerdant không chỉ đơn thuần là một nhà cung cấp sản phẩm từ bã mía mà chính là một người bạn sẻ chia, một người đồng hành đáng tin cậy trong cuộc sống xanh và bền vững.</p>
                                <p className='text-[17px] leading-6 text-[#111] text-justify mb-4'>Đến tận bây giờ, iVerdant luôn nhận được sự trân quý, yêu thương từ mọi khách hàng khắp cả nước. Đến gần hơn và luôn mang lại những sản phẩm tối ưu cho cuộc sống xanh là điều mà iVerdant luôn nỗ lực hoàn thiện mỗi ngày.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
