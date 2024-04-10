import React, { useState } from "react";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { Link } from "@tanstack/react-router";
import { HiDocumentText } from "react-icons/hi";
import styles from "./Navigation.module.css";

const LOGO_SCALE = 0.25;

const items: MenuProps["items"] = [
  {
    icon: <HiDocumentText />,
    label: (
      <Link to="/" className="[&.active]:font-bold">
        Agreements
      </Link>
    ),
    key: "agreements",
  },
];

const Navigation: React.FC = () => {
  const [current, setCurrent] = useState("mail");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <div className={styles.root}>
      <Link to="/" className={styles.logo}>
        <img
          width={597 * LOGO_SCALE}
          height={178 * LOGO_SCALE}
          src="/AC_logo-1a_660px.png"
          alt="logo"
          className="h-8"
        />
      </Link>
      <div className={styles.menu}>
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
      </div>
    </div>
  );
};

export default Navigation;
