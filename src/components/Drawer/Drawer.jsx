import React from "react";
import { Link } from "react-router-dom";
import "./drawer.scss";
import { Drawer } from "antd";

const DrawerMenu = ({ visible, handleVisible }) => {
  return (
    <Drawer
      title="Menu"
      width="300px"
      placement="left"
      visible={visible}
      onClose={handleVisible}
      destroyOnClose={true}
    >
      <div className="links">
        <Link onClick={handleVisible} to="/tutors">
          Tutors
        </Link>
      </div>
    </Drawer>
  );
};

export default DrawerMenu;
