"use client";
import React from "react";
import { TypeWriterText } from "../typerWriter/TyperWriterText";
import scss from "./Welcome.module.scss";
const Welcome = () => {
  return (
    <section className={scss.Welcome}>
      <span className={scss.title}>
        <TypeWriterText />
      </span>
      <div className="container"></div>
    </section>
  );
};

export default Welcome;
