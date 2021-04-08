import React from "react";
import "./menu-item.styles.scss";

export const MenuItem = ({ title, img, size }) => {
  return (
    <div className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${img})` }}
      />

      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <spam className="subtitle">SHOW NOW</spam>
      </div>
    </div>
  );
};
