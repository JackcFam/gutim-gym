import React, { useState, useEffect } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TopNews(props) {
  const [topnew, setTopnew] = useState([]);
  useEffect(() => {
    async function getTopnew() {
      const request = await fetch("https://api-webdata.herokuapp.com/topnews");
      const topnew = await request.json();
      setTopnew(topnew);
    }
    getTopnew();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ]
  };
  return (
    <section className="latest-blog-section spad">

      <Container>
        <Row>
          <div className="col-lg-12">
            <div className="section-title">
              <h2>Bài viết hữu ích nhất</h2>
            </div>
          </div>
        </Row>

        <Slider {...settings} style={{ width: "100%" }}>
          {topnew.map((item) => (
            <React.Fragment key={item.id}>
            <Col>
              <Card className="single-blog-item">
                <Card.Img src={item.anh} alt="true" />
                <Card.Body className="blog-widget">
                  <div className="bw-date">February 17, 2019</div>
                  <a href="/blog" className="tag">
                    #Gym
                  </a>
                </Card.Body>
                <h4>
                  <a href="/blog">{item.tieuDe}</a>
                </h4>
              </Card>
            </Col>
            </React.Fragment>
          ))}

        </Slider>
      </Container>
    </section>
  );
}

export default TopNews;
