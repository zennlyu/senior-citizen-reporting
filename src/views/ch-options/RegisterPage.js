import React from "react";

// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";

function RegisterPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("register-page");
    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  });
  return (
      <>
        <ExamplesNavbar />
        <div
            className="page-header"
            style={{
              backgroundImage:
                  "url(" + require("assets/img/login-image.jpg").default + ")",
            }}
        >
          <div className="filter" />
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" lg="4">
                <Card className="card-register ml-auto mr-auto">
                  <h3 className="title mx-auto">使用工具</h3>
                  <div className="social-line text-center">
                    <h6>
                      Python<br/><br/>
                      Photoshop<br/><br/>
                      镝数图表<br/><br/>
                      花火<br/><br/>
                      Excel<br/><br/>
                      React<br/><br/>
                      ...<br/><br/><br/>
                    </h6>
                  </div>
                </Card>
              </Col>
              <Col className="ml-auto mr-auto" lg="4">
                <Card className="card-register ml-auto mr-auto">
                  <h3 className="title mx-auto">数据来源</h3>
                  <div className="social-line text-center">
                    <h6>
                      1956年联合国《人口老龄化及其社会经济后果》<br/><br/>
                      国家统计局第七次全国人口普查结果<br/><br/>
                      中国发展基金会《中国发展报告2020：中国人口老龄化的发展趋势和政策》<br/><br/>
                      第48届《中国互联网络发展统计报告》<br/><br/>
                      《腾讯2019互联网银发人群洞察》<br/><br/>
                      极光大数据《2019年老年群体触网研究报告》<br/><br/>
                      腾讯2019上半年电信网络诈骗治理研究报告<br/><br/>
                    </h6>
                  </div>

                </Card>
              </Col>
              <Col className="ml-auto mr-auto" lg="4">
                <Card className="card-register ml-auto mr-auto">
                  <h3 className="title mx-auto">相关人员</h3>
                  <div className="social-line text-center">
                    <h6>
                      策划 & 数据：胡世鑫、刘臻睿、奚静涵<br/><br/>
                      网页设置 & 美工：刘圳、胡奕孜、奚静涵、刘臻睿、胡世鑫<br/><br/>
                      指导老师：周清清<br/><br/>
                      单位：南京师范大学新闻与传播学院<br/><br/>
                      联系方式：1044367184@qq.com<br/><br/><br/><br/><br/><br/>
                    </h6>
                  </div>

                </Card>
              </Col>
            </Row>
          </Container>
          <div className="footer register-footer text-center">
            <h4>
              <i className="fa fa-heart heart" />欢迎您提出您的建议 & 意见
            </h4>
          </div>
        </div>
      </>
  );
}

export default RegisterPage;
