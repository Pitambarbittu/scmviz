// import React from "react";
import React, { useState } from "react";
// import infologo from "../Assets/info.svg";
import Modal from "./Modal";
// import img from "../Assets/Networkellipse.svg"


const UpdateMiddleware = () => {

  const [modal, setModal] = useState(false);

  const div = () => {
    setModal(!modal);
  };

  const divClose = () => {
    setModal(false);
  };

  return (
    <div className="main_container ">
    
      <div className="close">
        <button
          className="btn"
          style={{
            backgroundColor: "rgb(228,236,252)",
            color: "rgb(40,99,230)",position:"relative",left:"66%",top:"10px"
          }}
          onClick={() => div()}
        >
          DISTRIBUTED TRACING{" "}
        </button>{" "}
        <br />
        <div>
          {/* { modal ? <Modal modal={modal} p={divClose} /> : null  }  */}

          {modal && (
            <div className="hideIt" onClick={() => divClose()}>
              <Modal modal={modal} setModal={divClose} />
            </div>
          )}
        </div>
      </div>

      <div className="head">
        <h3 className="heading1">VPC NAT Gateway</h3>
      </div>
      {/* <button className='view'>VIEW EDIT</button> */}

      <div className="errors">
        <div className="error box">
          <p className="main_header">EROR PORT ALLOCATION</p>
          {/* Nat count
                    IdleTimeout
                    Connection Established */}
          <span>0</span>
        </div>

        <div className="slislo box">
          <p>ACTIVE CONNECTION</p>

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

      <div className="element">
        <div className="ptag">
          <p>Nat count </p>
          <span className="p1">0</span>
        </div>
        <div className="ptag">
          <p>IdleTimeout </p>
          <span className="p2">0</span>
        </div>
        <div className="ptag">
          <p>Connection Established</p>
          <span className="p3">0</span>
        </div>
      </div>
    </div>
  );
};

export default UpdateMiddleware;
