import React,{ useState } from 'react';
import ModalVideo from 'react-modal-video';
import '../../css/modal-video.min.css';
import SlickHome from './SlickHome';
import Stories from './Stories';
import {Link} from 'react-router-dom';
import Trainer from './Trainer';
import TopNews from './TopNews'

function Home(props) {
  const [isOpen, setOpen] = useState(false);
  return (

    <>
        <section className="hero-section set-bg" data-setbg="https://i.imgur.com/Bd4djQ7.jpg">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="hero-text">
                  <span>FITNESS ELEMENTS</span>
                  <h1>BMI CALCULATOR</h1>
                  <p>
                    Gutim comes packed with the user-friendly BMI Calculator
                    <br /> shortcode which lets
                  </p>
                  <a href="/about" className="primary-btn">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

  <section className="about-section spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="about-pic">
            <img src="https://i.imgur.com/ZjsSfPr.jpg" alt="true" />
            <div className="play-btn video-popup">

              <img src="https://i.imgur.com/fQRNRVp.png" onClick={()=> setOpen(true)} alt="true" />
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="about-text">
            <h2>Story About Us</h2>
            <p className="first-para">“Chúng tôi quan niệm rằng không có bất cứ một khoản đầu tư nào quý giá hơn đầu tư cho chính bản thân. Khi đầu tư một cách đúng đắn cho việc tập luyện, những lợi ích mà khách hàng nhận được không chỉ là kết quả mang tính thẩm mỹ về mặt hình thể, mà hơn hết sức khỏe, lối sống cũng chuyển biến theo hướng tích cực và lành mạnh hơn.</p>
            <p className="second-para">Đối với chúng tôi, lợi ích của khách hàng chính là lợi nhuận quý báu nhất. Kết quả thực sự của khách hàng là những gì thương hiệu Gutim luôn hướng đến.”</p>
            <Link to="/about" className="primary-btn">Tìm hiểu thêm</Link>
          </div>
        </div>
      </div>
    </div>
  </section>


  <section className="services-section">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6">
          <div className="services-pic">
            <img src="https://i.imgur.com/1lcFJrg.jpg" alt="true" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="service-items">
            <div className="row">
              <div className="col-md-6">
                <div className="services-item bg-gray">
                  <img src="https://i.imgur.com/RgPrJNb.png" alt="true" />
                  <h4>Huấn luyện viên cá nhân</h4>
                  <p>Giúp bạn đánh giá các chỉ số cơ thể để phục hồi thể lực</p>
                </div>
                <div className="services-item bg-gray pd-b">
                <img src="https://i.imgur.com/HjMF3Hz.png" alt="true" />

                  <h4>Giảm căng cơ</h4>
                  <p>Giải phóng cơ thể khỏi những áp lực không mong muốn xuất hiện trên các khối cơ</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="services-item">
                <img src="https://i.imgur.com/fdeSmsn.png" alt="true" />
                  <h4>Yoga</h4>
                  <p>Giúp giải tỏa strees và thư giãn tâm hồn</p>
                </div>
                <div className="services-item pd-b">
                  <img src="https://i.imgur.com/tzDGnON.png" alt="true" />
                  <h4>Giảm cân</h4>
                  <p>Giảm mỡ toàn thân với các bài tập hiệu quả chuyên sâu nhất</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Services Section End */}
  {/* Classes Section Begin */}
  <section className="classes-section spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title">
            <h2>Các lớp tập luyện</h2>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div className="container" >
      <div className="row">
        <div className="col">
        <SlickHome></SlickHome>
        </div>
      </div>
    </div>
  </section>
  <Trainer></Trainer>

  <section className="testimonial-section spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title">
            <h2>Câu chuyện thành công</h2>
          </div>
        </div>
      </div>
      <div className="row">

        <Stories></Stories>


      </div>
    </div>
  </section>

  <section className="banner-section set-bg" data-setbg="img/banner-bg.jpg">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="banner-text">
            <h2>Tham gia tập luyện</h2>
            <p>Trải nghiệm tập luyện chuyên nghiệp tại studio 5* gymzone chưa bao giờ đơn giản hơn</p>
            <a href="/contact" className="primary-btn banner-btn">Đăng ký tập thử</a>
          </div>
        </div>
        <div className="col-lg-5">
          <img src="https://i.imgur.com/IrBf66a.png" alt="true" />
        </div>
      </div>
    </div>
  </section>
  <section className="container">
    <div className="row">
      <div className="col">
      <TopNews></TopNews>
      </div>
    </div>
  </section>


  <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="jC5xlKIQgR8" onClose={() => setOpen(false)} />
      </>
  );
}

export default Home;
