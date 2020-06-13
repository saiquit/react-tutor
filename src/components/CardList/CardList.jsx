import React from "react";
import Card from "../Card/Card";
import "./card-list.scss";
import { connect } from "react-redux";

function CardList({ tutors, teachers, filteredTeachers, noData }) {
  return (
    <>
      {!tutors && (
        <h1 style={{ textAlign: "center", padding: "20px" }}>
          Our Premium Teachers
        </h1>
      )}
      {noData && <h1>No more Data</h1>}

      <div className="card_cover">
        {teachers
          .filter((data) => {
            return data.premium;
          })
          .map((filtered) => {
            return <Card key={filtered.id} data={filtered} />;
          })
          .slice(0, 10)}
      </div>
    </>
  );
}
const mapStateToProps = ({
  teachers: { teachers, filteredTeachers, noData },
}) => ({
  teachers,
  filteredTeachers,
  noData,
});

export default connect(mapStateToProps)(CardList);
