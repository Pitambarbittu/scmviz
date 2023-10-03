import React, { useState } from "react";
import { useEffect } from "react";
import { practiceEntity, practiceSynthetic } from "../Querymodule";

const PracticeTable = () => {
  const [firstTry, setFirstTry] = useState([]);
  const [secondTry, setSecondTry] = useState([]);

  const ourData = [];
  useEffect(async () => {
    const allData = await practiceEntity();
    for (let i = 0; i < allData.length; i++) {
      if (allData[i].facet[2] == "SYNTH") {
        ourData.push(allData[i].facet[0]);
      }
    }
    // console.log("ourFetchData", ourData);
    setFirstTry(ourData);
    // console.log("alldatafromquery", allData);
  }, []);

  const stroeData1 = [];
  useEffect(async () => {
    async function finalData() {
      for (let j = 0; j < firstTry.length; j++) {
        let secondFetchd = await practiceSynthetic(firstTry[j]);
        // console.log("2ndfetch", secondFetchd);

        stroeData1.push(secondFetchd[0]);
        // console.log("strodDarta", stroeData1);
      }
    }
    await finalData();
    setSecondTry(stroeData1);
  }, [firstTry]);
  console.log("abcdefghijkl", secondTry);

  // console.log("thisisftry", firstTry);

  const filteredItems = secondTry.filter((z) => z.lastestresult === "FAILED");
  return (
    <>
      <div
        className="main_container"
        style={{ boxshadow: "0px 0px 40px rgba(0, 0, 0, 0.45)" }}
      >
        <table>
          <thead>
            <tr>
              <th>Entity Guid- Practicing with filter</th>
              <th>Monitor Name</th>
              <th>Result</th>
              <th>Error</th>
            </tr>

            {/* <tr>
  <td>
  {secondTry.length>0&&secondTry[0].lastestresult}
  </td>
</tr> */}

            {/* {secondTry.map((i) => {
                  console.log("asdfghjkl",i)
                    return (
                      <tr>
                      <td>{i.facet[0]}</td>
                      <td>{i.facet[1]}</td>

                 <td>{i.lastestresult}</td>
                  <td>{i.latesteroor}</td>
                      </tr>
                    ) 
                  })} */}

            {filteredItems.map((z) => (
              <tr>
                <td>{z.facet}</td>
                <td>{z.facet[1]}</td>
                <td>{z.lastestresult}</td>
                <td>{z.latesteroor}</td>
              </tr>
            ))}
          </thead>
        </table>
      </div>
    </>
  );
};

export default PracticeTable;
