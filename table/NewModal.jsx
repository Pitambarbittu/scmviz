import React from "react";

const NewModal = ({ secondDown }) => {
  return (
    <div>
      <div 
        style={{
          position: "relative",
          left: "59em",
          bottom: "7em",
          border: "1px solid blue",
          backgroundColor: "white",
          height: "10em",
          width: "20em",
          color: "red",
        }}
      >
        {secondDown.map((i, index) => {
          return (
            <div key={index}>
              <p>{i.facet[1]}</p>
              <p>{i.lastestresult}</p>
              <p>{i.latesteroor}</p>
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewModal;
