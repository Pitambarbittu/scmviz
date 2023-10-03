import React, { useEffect, useState } from "react";
import UpdateMiddleware from "./middleware/UpdateMiddleware";
import AwsAlb from "./middleware/AwsAlb";
import { Grid, GridItem } from "nr1";
import img from "../scmviz/Assets/Networkellipse.svg";
import Browser from "./middleware/Browser";
import Table from "./table/Table";
import NewTable from "./table/NewTable";
import {
  targetEntity,
  synthetic,
  relationshipquery,
  tabledataquery,
} from "./Querymodule";
import PracticeTable from "./table/PracticeTable";
// import Modal from './middleware/Modal'
// import NewModal from './table/NewModal'
import DropdownFile from "./table/DropdownFile";
import Demo from "./table/Demo";
import Demo1 from "./table/Demo1";

import StateUpliftingChild from "./StateUpliftingChild";
import NewModal from "./table/NewModal";

const index = () => {
  // const [synthetic1, setsynthetic1] = useState([])
  // const [fetchData, setFetchData] = useState([])

  // useEffect(async () => {
  //   let synthresult = await targetEntity();
  //   console.log("Syntheticresult" ,synthresult);
  //   const newData = [];
  //   for (let i = 0; i < synthresult.length; i++){
  //     if (synthresult[i].facet[2] === 'SYNTH'){
  //         newData.push(synthresult[i].facet[0])
  //     }
  //   }
  //   setsynthetic1(newData);
  // }, []);

  // console.log("synthetic1" , synthetic1);

  // useEffect(async()=>{
  //   console.log("syntheticindata" , synthetic1);
  //     for (let j = 0; j < synthetic1.length; j++){
  //       console.log("forlooop::" , synthetic1[j]);
  //         let resultdata = await synthetic(synthetic1[j]);
  // console.log("resultdataing",resultdata)
  // setFetchData(resultdata)
  //   }

  // },[synthetic1])

  // console.log("fetchdata" , fetchData);

  const [storedata, setStoredata] = useState([]);
  const [tabledata, settabledata] = useState([]);

  useEffect(async () => {
    let entitydata = await relationshipquery();
    filterdataentity(entitydata);
    console.log("entitydata", entitydata);
  }, []);

  const filterdataentity = (entitydata) => {
    console.log("entitydatainsidefunction", entitydata);
    let tempdata = [];
    for (let i = 0; i < entitydata.length; i++) {
      if (entitydata[i].facet[2] == "SYNTH") {
        tempdata.push(entitydata[i].facet[0]);
      }
    }
    setStoredata(tempdata);
  };

  console.log("storedata", storedata);

  useEffect(async () => {
    async function getdatatable() {
      console.log("Storedatainsi", storedata);
      let data = [];
      for (let i = 0; i < storedata.length; i++) {
        let resultable = await tabledataquery(storedata[i]);
        console.log("resultable", resultable);
        data.push(resultable[0]);
      }
      settabledata(data);
    }
    await getdatatable();
  }, [storedata]);
  console.log("first", tabledata);
  function parentAlert(data) {
    alert(data);
  }

  return (
    <>
      <Browser />
      <div className="container_heading">
        <h5>
          {" "}
          <img src={img} alt="img" />
          Network Layer{" "}
        </h5>
      </div>
      <Grid>
        <GridItem columnSpan={6}>
          <UpdateMiddleware />
        </GridItem>
        <GridItem columnSpan={6}>
          <AwsAlb />
        </GridItem>
      </Grid>

      <Table />
      <NewTable storedata={storedata} />

      <Demo tabledata={tabledata} />

      <PracticeTable />
      <DropdownFile />
      {/* <NewModal secondDown={secondDown}/> */}

      {/* <NewModal/> */}

      {/* <StateUpliftingChild alert={parentAlert}/> */}

      {/* <Demo1/> */}
    </>
  );
};

export default index;
