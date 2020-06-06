import React from "react";
import { Link } from "react-router-dom";

import { Drawer } from "antd";

const DrawerMenu = ({ visible, handleVisible }) => {
  return (
    <Drawer
      title="Menu"
      width="300px"
      placement="left"
      visible={visible}
      onClose={handleVisible}
    >
      <div className="links">
        <Link to="/tutors">Tutors</Link>
      </div>
    </Drawer>
  );
};

export default DrawerMenu;
