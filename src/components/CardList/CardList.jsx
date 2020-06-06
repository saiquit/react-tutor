import React from "react";
import Card from "../Card/Card";
import "./card-list.scss";
import { tData } from "./tData";

function CardList() {
  return (
    <>
      <h1 style={{ textAlign: "center", padding: "20px" }}>
        Our Premium Teachers
      </h1>
      <div className="card_cover">
        {tData
          .map((data) => {
            return <Card key={data.id} data={data} />;
          })
          .slice(0, 15)}
      </div>
    </>
  );
}

export default CardList;
