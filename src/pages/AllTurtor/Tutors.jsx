import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import FullTeacherList from "../../components/FullCardList/FullCardList";
import Sidebar from "../../components/SideBar/SideBar";

const Tutors = () => {
  const [scrollY, setScrollY] = useState(1);

  const logit = () => {
    setScrollY(window.pageYOffset);
  };

  useEffect(() => {
    const watchScroll = () => {
      window.addEventListener("scroll", logit);
    };
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  }, []);

  return (
    <>
      <Row>
        <Col span={16}>
          <FullTeacherList updateList={Math.round(scrollY / 1000)} />
        </Col>
        <Col span={8}>
          <Sidebar tutor />
        </Col>
      </Row>
    </>
  );
};

export default Tutors;
