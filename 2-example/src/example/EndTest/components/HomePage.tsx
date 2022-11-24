import React from "react";
import Carousel from "react-bootstrap/Carousel";
import tc from "../../../images/tc.png";
import lq from "../../../images/lq.png";
import ff from "../../../images/ff.png";

function Home() {
  return (
    <div>
      <div className="content">
        {/* <h1 className="head">Toppic Gamming</h1> */}
        <div className="row">
          <div className="col-3 left">
            <ol>
              <li>Game</li>
              <hr />
              <li>Account</li>
              <hr />
              <li>News</li>
              <hr />
              <li>Support</li>
            </ol>
          </div>

          <div className="col-6 main">
            <div className="center">
              <h1>Solution Anywhere</h1>
              <p>
                Solution Anywhere là trụ sở của tổ chức phát triển phần mềm mã
                nguồn mở tại Chicago, Hoa Kỳ. Công ty muốn làm cho sự hiện diện
                của mình trở nên phổ biến trên toàn thế giới bằng cách tạo ra
                một trang Web sẽ làm nổi bật các hoạt động được thực hiện bởi tổ
                chức. Tổ chức cũng cung cấp tất cả các phần mềm có sẵn dưới dạng
                phần mềm miễn phí. Bạn với tư cách là nhà phát triển trang Web
                cho tổ chức đã được yêu cầu tạo trang Web sau cho tổ chức:
              </p>
              <div>
                <Carousel>
                  <Carousel.Item>
                    <img className="d-block w-100" src={ff} />
                  </Carousel.Item>

                  <Carousel.Item>
                    <img className="d-block w-100" src={lq} />
                  </Carousel.Item>

                  <Carousel.Item>
                    <img className="d-block w-100" src={tc} />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>

          <div className="col-3 right">
            <h1>What?</h1>
            <p>
              The Pulpit Rock is a part of a mountain that looks like a pulpit.
            </p>
            <h1>Where?</h1>
            <p>The Pulpit Rock is in Norway</p>
            <h1>Download</h1>
            <p>The walk is free!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
