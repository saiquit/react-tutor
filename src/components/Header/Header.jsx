import React, { useState } from "react";
import { Col, Row } from "antd";
import DrawerMenu from "../Drawer/Drawer";
import { AlignLeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import "./header.scss";

function Header() {
  const [visible, setVisible] = useState(false);

  const handleVisible = () => {
    setVisible(!visible);
  };
  return (
    <Row>
      <Col span={8}>
        <AlignLeftOutlined
          onClick={handleVisible}
          style={{ color: "black", fontSize: "24px", padding: "20px" }}
        />
        <DrawerMenu visible={visible} handleVisible={handleVisible} />
      </Col>
      <Col className="brand_col" span={8}>
        <h2>
          <Link to="/">Tution</Link>
        </h2>
      </Col>
      <Col span={8}></Col>
    </Row>
  );
}

export default Header;
