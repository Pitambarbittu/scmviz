import React from "react";
import greenLogo from "../Assets/ellipse_green.svg";
import inf from "../Assets/info.svg"

const Browser = () => {


  return (
    <div  className="browser_container">

<div style={{backgroundColor:"rgb(210,239,238)", height:"3.3em", borderRadius:"5px"}} className="browser_heading">

<h3 style={{position:"relative", top:"5px"}} > <img src={greenLogo} alt="img" /> Front-end </h3>

</div>
      <div className="head">
        <h3 className="heading1">Browser</h3>
      </div>
      {/* <button className='view'>VIEW EDIT</button> */}

      <div className="errors">
        <div style={{backgroundColor:"rgb(252,241,241)"}} className="error box1">
          <p className="main_header">ERROR INBOX</p>
          <span style={{fontSize:"32px", padding:"10px"}}>0</span>
        </div>

        <div style={{backgroundColor:"rgb(249,250,252)"}} className="slislo box1">
          <p className="main_header">SLI/SLO</p>

          <span style={{fontSize:"32px", padding:"10px"}}>0</span>
        </div>

        <div style={{backgroundColor:"rgb(254,249,237)"}} className="disruption box1">
          <p className="main_header">DISRUPTIONS</p>
          <span style={{fontSize:"32px", padding:"10px", color:"rgb(161,120,37)"}}>0</span>
        </div>
      </div>
      

      <div style={{justifyContent:"space-between", marginTop:"6px"}} className="element1">
        <div style={{borderBottom:"1px solid rgb(244, 232, 232)"}} className="ptag1">
          <span style={{fontWeight:"500",fontSize:"13px"}} >Error rate </span>
          <span style={{bottom:"1em", position:"relative",color:"rgb(57,155,71)", backgroundColor:"rgb(238,250,235)"}} className="p1">0%</span>
        </div>
        <div style={{borderBottom:"1px solid rgb(244, 232, 232)"}} className="ptag1">
          <span style={{fontWeight:"500",fontSize:"13px"}} >User time on site  </span>
          <img style={{position:"relative", bottom:"4.5px", left:"2px"}} src={inf} alt="" />
          <span style={{bottom:"1em", position:"relative",color:"rgb(164,124,37)", backgroundColor:"rgb(255,250,240)"}}  className="p2">4.08s</span>
        </div>
        <div style={{borderBottom:"1px solid rgb(244, 232, 232)"}} className="ptag1">
          <span style={{fontWeight:"500",fontSize:"13px"}} >Page Views</span>
          <img style={{position:"relative", bottom:"4.5px", left:"2px"}} src={inf} alt="" />
          <span style={{bottom:"1em", position:"relative",color:"rgb(240,16,90)", backgroundColor:"rgb(254,246,246)"}} className="p3">0</span>
        </div>
      </div>



      <div style={{justifyContent:"space-between", marginTop:"6px"}} className="element1">
      <div style={{borderBottom:"1px solid rgb(244, 232, 232)"}} className="ptag1">
          <span style={{fontWeight:"500",fontSize:"13px"}} >LCP</span>
          <img style={{position:"relative", bottom:"4.5px", left:"2px"}} src={inf} alt="" />
          <span style={{bottom:"1em", position:"relative",fontWeight:"500",fontSize:"13px"}}  className="p2">0</span>
        </div>
        <div style={{borderBottom:"1px solid rgb(244, 232, 232)"}} className="ptag1">
          <span style={{fontWeight:"500",fontSize:"13px"}} >FID</span>
          <img style={{position:"relative", bottom:"4.5px", left:"2px"}} src={inf} alt="" />
          <span style={{bottom:"1em", position:"relative",fontWeight:"500",fontSize:"13px"}}  className="p2">0.00</span>
        </div>
        <div style={{borderBottom:"1px solid rgb(244, 232, 232)"}} className="ptag1">
          <span style={{fontWeight:"500",fontSize:"13px"}} >CLS</span>
          <img style={{position:"relative", bottom:"4.5px", left:"2px"}} src={inf} alt="" />
          <span style={{bottom:"1em", position:"relative",fontWeight:"500",fontSize:"13px"}} className="p3">0</span>
        </div>

        
                    
      </div>

      <div className="all-button">
                    <button style={{backgroundColor:" rgb(228,236,252)", color:"rgb(40,99,230)"}} className='btntracing'>DISTRIBUTED TRACING</button>

<button style={{backgroundColor:" rgb(228,236,252)", color:"rgb(40,99,230)"}} className='btnvitals'>WEB VITALS</button>

<button style={{backgroundColor:" rgb(228,236,252)", color:"rgb(40,99,230)"}} className='btnsli'>SLI/SLO DETAILS</button>
                    </div>
    </div>
  );
};

export default Browser;
