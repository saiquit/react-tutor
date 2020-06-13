import React from "react";

import { Card } from "antd";

const { Meta } = Card;

const Cards = ({ data }) => {
  const {
    first_name,
    last_name,
    email,
    gender,
    img,
    university,
    phone,
    subjects,
    id,
    area,
  } = data;
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src={img} />}
    >
      <Meta title={`${first_name} ${last_name}`} description={phone} />
      <span>{area}</span>
    </Card>
  );
};

export default Cards;
