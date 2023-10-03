import React, { useState,useEffect} from "react";
import { tabledata } from "../Querymodule";

const Table = () => {
  const [tabledatas, settabledata] = useState([]);
  useEffect(async () => {
    let tableresult = await tabledata();
    settabledata(tableresult);
  }, []);

//   console.log("tableresult", tabledatas);
  return (
    <>
    <div className='main_container' style={{"boxshadow": "0px 0px 40px rgba(0, 0, 0, 0.45)"}}>
      <table>
        <thead>
          <tr>
            <th>Node Name</th>
            <th>CPU</th>
            <th>Mem</th>
            <th>Disk</th>
            <th>Disk Pressure</th>
            <th>Memory Pressure</th>
          </tr>
          {tabledatas.map((i) => (
            <tr>
              <td>{i.nodeName}</td>
              <td>{i.CPU}</td>
              <td>{i.mem}</td>
              <td>{i.disk}</td>
              <td>{i.diskPressure}</td>
              <td>{i.memoryPressure}</td>
            </tr>
          ))}
        </thead>
      </table>
      </div>
    </>
  );
};

export default Table;
