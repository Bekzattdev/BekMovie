import "./MyLoader";
import React from "react";

const MyLoader = () => {
  return (
    <div className="content">
      {/* code here */}
      <div className="card">
        <div className="card-img skeleton">
          {/* waiting for img to load from javascript */}
        </div>
        <div className="card-body">
          <h2 className="card-title skeleton">
            {/* wating for title to load from javascript */}
          </h2>
          <p className="card-intro skeleton">
            {/* waiting for intro to load from Javascript */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyLoader;
