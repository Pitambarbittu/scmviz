import React from "react";

// import infologo from "../Assets/info.svg";

const AwsAlb = () => {
  return (
    <div className="main_container">
      <button
        className="btn"
        style={{
          backgroundColor: "rgb(228,236,252)",
          color: "rgb(40,99,230)",
          position: "relative",
          left: "66%",
          top: "10px",
        }}
      >
        DISTRIBUTED TRACING{" "}
      </button>
      <div className="head">
        <h3 className="heading1">AWS ALB</h3>
      </div>
      {/* <button className='view'>VIEW EDIT</button> */}

      <div className="errors">
        <div className="error box">
          <p className="main_header">ERROR INBOX</p>
          {/* Nat count
                    IdleTimeout
                    Connection Established */}
          <span>0</span>
        </div>

        <div className="slislo box">
          <p>TOTAL REQUESTS</p>

          <span>0</span>
        </div>

        <div className="disruption box">
          <p className="main_heading">DISRUPTIONS</p>
          <span>0</span>
        </div>
      </div>
      {/* <button className='btntracing'>DISTRIBUTED TRACING</button>

                    <button className='btnvitals'>WEB VITALS</button>
                    
                    <button className='btnsli'>SLI/SLO DETAILS</button> */}
      <div
        style={{ display: "flex", justifyContent: "space-between" }}
        className="alb"
      >
        <div className="element">
          <div className="ptag">
            <p>HTTP errors</p>
            <span className="p1">0</span>
          </div>
          <div className="ptag-scnd">
            <p>Connections</p>
            <span className="p3">0</span>
          </div>
        </div>
        <div >
          <div className="ptag">
            <p>Authentication errors </p>
            <span className="p2">0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwsAlb;
