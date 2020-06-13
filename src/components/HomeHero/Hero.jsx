import React from "react";
import { Row, Col, Typography, Button } from "antd";
import SideBar from "../SideBar/SideBar";
import "./hero.scss";

function Hero() {
  return (
    <Row className="hero_row">
      <Col span={16} md={{ span: 14 }} sm={{ span: 24 }} className="left_col">
        <img src="./img/hero1.jpg" alt="" />
      </Col>
      <Col span={8} md={{ span: 10 }} sm={{ span: 24 }}>
        <SideBar />
      </Col>
    </Row>
  );
}

export default Hero;
