import React, { useState, useEffect } from "react";
import { practiceEntity, practiceSynthetic } from "../Querymodule";
import NewModal from "./NewModal";

const DropdownFile = () => {
  const [dropDown, setDropDown] = useState([]);
  const [secondDown, setSecondDown] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const dropData = [];
  useEffect(async () => {
    const ourDAta = await practiceEntity();
    for (let i = 0; i < ourDAta.length; i++) {
      if (ourDAta[i].facet[2] == "SYNTH") {
        dropData.push(ourDAta[i].facet[0]);
      }
    }
    console.log("ourFetchData", dropData);
    console.log("ourFetchData", dropData[1]);
    setDropDown(dropData);
  }, []);

  // async function toggle(items){
  //  let newToggle = await practiceSynthetic(items);
  //  console.log("jyotiabcdefr", newToggle)

  // }
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div>
      <table>
        <tr>
          <th>ENTITY GUID -  This is the Modal</th>
        
        </tr>

        {dropDown.map((items) => (
          <tr>
            <td
              style={{ cursor: "pointer" }}
              onClick={async () => {
                let newToggle = await practiceSynthetic(items);
                setSecondDown(newToggle);
                toggleDropdown();
              }}
            >
              {items}{" "}
            </td>
          </tr>
        ))}
      </table>
      {showDropdown && (
        <div>
          <NewModal secondDown={secondDown} />
        </div>
      )}
    </div>
  );
};

export default DropdownFile;
