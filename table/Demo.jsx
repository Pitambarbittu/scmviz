import React, { useState } from "react";
// import { tabledataquery } from '../Querymodule';

const Demo = ({ tabledata }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  console.log("Storedatata", tabledata);
  return (
    <>
      <div
        className="main_container"
        style={{ boxshadow: "0px 0px 40px rgba(0, 0, 0, 0.45)" }}
      >
        <table className="accordion-table">
          <thead>
            <tr>
              <th>ENTITY GUID- This is Accordion table</th>
              {/* <th>Details</th> */}
            </tr>
          </thead>
          <tbody>
            {tabledata.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <tr
                    style={{ cursor: "pointer" }}
                    className="accordion-header"
                    onClick={() => toggleAccordion(index)}
                  >
                    <td>{item.facet[0]}</td>
                    {/* <td>{expandedIndex === index ? '-' : '+'}</td> */}
                  </tr>
                  {expandedIndex === index && (
                    <>
                      <tr className="accordion-content">
                        <td colSpan="2">
                          <div
                            style={{
                              backgroundColor: "rgb(152,120,230)",
                              borderRadius: "3px",
                              color:"white"
                            }}
                          >
                            <p>{item.facet[1]}</p>
                            <p>{item.lastestresult}</p>
                            <p>{item.latesteroor}</p>
                          </div>
                        </td>
                      </tr>
                    </>
                  )}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Demo;
