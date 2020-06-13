import React from "react";
import { connect } from "react-redux";
import FullTeacherCard from "../FullTeacherCard/FullTeacherCard";

function FullCard({ filteredTeachers, noData, teachers, updateList }) {
  return (
    <div>
      {filteredTeachers.length
        ? filteredTeachers.map((teacher) => {
            return <FullTeacherCard teacher={teacher} key={teacher.id} />;
          })
        : teachers
            .map((teacher) => {
              return <FullTeacherCard teacher={teacher} key={teacher.id} />;
            })
            .slice(0, updateList === 0 ? 10 : 10 * updateList)}
    </div>
  );
}

const mapStateToProps = ({
  teachers: { filteredTeachers, noData, teachers },
}) => ({
  filteredTeachers,
  teachers,
  noData,
});

export default connect(mapStateToProps)(FullCard);
