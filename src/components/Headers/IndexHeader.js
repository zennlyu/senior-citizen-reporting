
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/silverDilemma/封面图.jpg").default + ")",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title">逃不掉的"银发困境"？</h1>
            </div>
            <br/>
            <br/>
            <br/>
            <h4 className="presentation-subtitle">
              “他们中，大多人前三分之二的岁月中，科技和互联网是日常生活的罕见词。但在人生的后半程，他们如坐过山车般经历了一场又一场信息迭代。”
              <br/>
              <br/>
              <br/>
              新冠疫情的出现，使得还有选择“余地”的老年人群体不得不走上智能化道路，健康码、行程码、扫码取件、网上预约......老年人群体开始了一场“数字长征”。
            </h4>
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage:
              "url(" + require("assets/img/clouds.png").default + ")",
          }}
        />
      </div>
    </>
  );
}

export default IndexHeader;
