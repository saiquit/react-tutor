import React, { useState, useEffect } from "react";
import { Form, Input, Select, Button } from "antd";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  filtered_teachers,
  noMoreData,
} from "../../redux/teachers/teacher__actions";

import "./sidebar.scss";

const SideBar = ({ teachers, filtered_teachers, noData, history, tutor }) => {
  const [area, setArea] = useState(undefined);
  const [medium, setMedium] = useState(undefined);

  const handleArea = (value) => {
    setArea(value);
  };
  const handleMedium = (value) => {
    setMedium(value);
  };

  const handleSubmit = () => {
    const filteredTeachers = teachers.filter((teacher) => {
      if (area === undefined || medium === undefined) {
        return null;
      }
      return (
        teacher.area.toLowerCase().startsWith(area.toLowerCase()) &&
        teacher.version.toLowerCase().includes(medium.toLowerCase())
      );
    });
    if (area && medium && filteredTeachers.length === 0) {
      noData(true);
    } else {
      noData(false);
    }
    filtered_teachers(filteredTeachers);

    if (history.location.pathname !== "/tutor") {
      noData && history.push("/tutors");
    }
    setArea(undefined);
    setMedium(undefined);
  };

  // removing duplicates

  let dumArr = [];
  teachers.forEach(({ area }) => {
    dumArr.push(area);
  });

  dumArr = [...new Set(dumArr)];

  return (
    <div className="side-bar-wrapper">
      <h1>Search For Teachers</h1>
      <Form layout={tutor ? "vertical" : "inline"} className="sideBar_filter">
        <Form.Item>
          <Select
            placeholder="Select your Medium"
            style={{ width: "15rem" }}
            onChange={handleMedium}
            value={medium}
          >
            <Select.Option value="bangla">Bangla</Select.Option>
            <Select.Option value="english">English</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Select
            onChange={handleArea}
            style={{ width: "15rem" }}
            placeholder="Select your Area"
            value={area}
          >
            {dumArr.map((option) => {
              return (
                <Select.Option value={option} key={option}>
                  {option}
                </Select.Option>
              );
            })}
          </Select>
        </Form.Item>
        <Form.Item>
          <Button onClick={handleSubmit}>Search</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const mapStateToProps = ({ teachers: { teachers } }) => ({
  teachers,
});

const mapDispatchToProps = (dispatch) => ({
  filtered_teachers: (items) => dispatch(filtered_teachers(items)),
  noData: (bool) => dispatch(noMoreData(bool)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SideBar),
);
