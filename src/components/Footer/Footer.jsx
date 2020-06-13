import React from "react";
import { Row, Col } from "antd";
import { FacebookFilled, InstagramFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
  return (
    <Row className="footer_covers">
      <Col span={8} className="footer_col">
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, odit
          modi accusantium corporis non molestias?
        </p>

        <h2>Follow us</h2>
        <div className="icons">
          <div className="icon">
            <FacebookFilled />
          </div>
          <div className="icon">
            <InstagramFilled />
          </div>
        </div>
      </Col>
      <Col className="footer_col" span={8}>
        <h2>Work with Us</h2>
        <div className="footer_links">
          <Link to="/">Become A Tutor</Link>
          <Link to="/">Log in as A Tutor</Link>
        </div>
      </Col>
      <Col className="footer_col" span={8}>
        <h2>Get in Touch</h2>
      </Col>
    </Row>
  );
};

export default Footer;
