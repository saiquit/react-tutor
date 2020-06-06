import React, { useState } from "react";
import { Form, Button, Row, Col, Select } from "antd";
import "./filter.scss";

function Filter() {
  const [area, setArea] = useState("");
  const [medium, setMedium] = useState("");
  const [subjects, setSubjects] = useState("");
  const handleArea = (value) => {
    setArea(value.value);
    console.log(value.value);
  };
  const handleMedium = (value) => {
    setMedium(value.value);
    console.log(value.value);
  };
  const handleSubject = (value) => {
    setSubjects(value);
    console.log(value);
  };
  return (
    <Row className="filter_cover">
      <Col md={{ span: 16 }} style={{ margin: "0 auto" }}>
        <Form layout="inline" className="search_form">
          <Form.Item label="Area">
            <Select
              labelInValue
              onChange={handleArea}
              style={{ width: "10rem" }}
              placeholder="Select your Area"
            >
              <Select.Option value="sonadanga">Sonadanga</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="Medium">
            <Select
              placeholder="Select your Medium"
              labelInValue
              style={{ width: "10rem" }}
              onChange={handleMedium}
            >
              <Select.Option value="bangla">Bangla</Select.Option>
              <Select.Option value="english">English</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Subjects">
            <Select
              mode="multiple"
              style={{ width: "10rem" }}
              placeholder="Please select Subjects"
              labelInValue
              onChange={handleSubject}
            >
              <Select.Option value="physic">physic's</Select.Option>
              <Select.Option value="chemistry">Chemistry</Select.Option>
            </Select>
          </Form.Item>
          <Button type="submit">Search</Button>
        </Form>
      </Col>
    </Row>
  );
}

export default Filter;
