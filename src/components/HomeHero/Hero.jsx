import React from "react";
import { Row, Col, Typography, Button } from "antd";
import "./hero.scss";

function Hero() {
  return (
    <Row className="hero_row">
      <Col span={16} md={{ span: 14 }} sm={{ span: 24 }} className="left_col">
        <img src="./img/hero1.jpg" alt="" />
      </Col>
      <Col span={8} md={{ span: 10 }} sm={{ span: 24 }}>
        <div className="right_col_text">
          <Typography.Title>Imam Hossain</Typography.Title>
          <Typography.Text>FMRT, KU</Typography.Text>
          <Typography.Paragraph>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic
          </Typography.Paragraph>
          <div className="btns">
            <Button type="primary" size="large">
              Contact Now
            </Button>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default Hero;
