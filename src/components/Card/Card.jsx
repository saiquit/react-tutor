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
    institution,
    phone,
    subjects,
    id,
  } = data;
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={
        <img
          alt="example"
          src={`https://randomuser.me/api/portraits/${gender}/${id}.jpg`}
        />
      }
    >
      <Meta title={`${first_name} ${last_name}`} description={phone} />
    </Card>
  );
};

export default Cards;
