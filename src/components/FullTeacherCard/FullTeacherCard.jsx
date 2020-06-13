import React from "react";
import { Row, Col, Button } from "antd";

import "./full-card.scss";

function FullTeacherCard({
  teacher: {
    first_name,
    last_name,
    img,
    phone,
    area,
    version,
    premium,
    university,
  },
}) {
  return (
    <Row className="full_card">
      <Col span={5}>
        <img src={img} alt="img" width="200px" height="200px" />
      </Col>
      <Col span={10}>
        <h2>{`${first_name} ${last_name}`}</h2>
        <p>
          <strong>Qualification: </strong>
          {university}
        </p>
      </Col>
      <Col span={4}>
        {" "}
        <p>
          <strong>Area: </strong>
          {area}
        </p>
      </Col>
      <Col span={5}>
        <div className="btns">
          <Button>View Details</Button>
          <Button>Connect</Button>
        </div>
      </Col>
    </Row>
  );
}

export default FullTeacherCard;
