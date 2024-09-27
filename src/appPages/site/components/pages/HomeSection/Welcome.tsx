"use client";
import React from "react";
import { TypeWriterText } from "../typerWriter/TyperWriterText";
import scss from "./Welcome.module.scss";
const Welcome = () => {
  return (
    <div className={scss.mainContent}>
      <span className={scss.title}>
        <TypeWriterText />
      </span>
    </div>
  );
};

export default Welcome;
