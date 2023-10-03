import React, { useEffect, useState } from 'react'
import { tabledataquery } from '../Querymodule';
// import { targetEntity, synthetic } from '../Querymodule';


const NewTable = ({storedata}) => {

  console.log("storedataintable", storedata);

  const[tabledata, settabledata]=useState([])

  useEffect(async()=>{
    async function getdatatable(){
      console.log("Storedatainsideuseeffext" ,storedata);
      let data = []
      for(let i=0 ; i<storedata.length; i++){
            let resultable= await tabledataquery(storedata[i])
            console.log('resultable', resultable)
            data.push(resultable[0])
          }
         settabledata(data)
    }
    await getdatatable()
  },[storedata])

console.log("tabledatadetails", tabledata);
    
//   const [synthetic1, setsynthetic1] = useState([])
//   const [fetchData, setFetchData] = useState([])

//   useEffect(async () => {
//     let synthresult = await targetEntity();
//     const newData = [];
//     for (let i = 0; i < synthresult.length; i++){
//       if (synthresult[i].facet[2] === 'SYNTH'){
//           newData.push(synthresult[i].facet[0])
//       }
//     }
//     setsynthetic1(newData);
//   }, []);

//   console.log("synthetic1" , synthetic1);

//   useEffect(async()=>{
//       for (let j = 0; j < synthetic1.length; j++){
//           let fetch = await synthetic(synthetic1[j]);
//   console.log("fetching",fetch)   
//   setFetchData( fetch, ...fetchData)     
//     }
   
//   },[synthetic1])

//--------------------------------------------------------------------------------------------------------
// useEffect(async()=>{
//     for (let j of synthetic1){
//         let fetch = await synthetic(j);
//         console.log("fetching",fetch)   
//         setFetchData(...fetchData ,fetch)     
//   }
 
// },[synthetic1])
//-------------------------------------------------------------------------------------------------------
  // console.log("fetching data",fetchData)

   
  return (
    <>
         <div className='main_container' style={{"boxshadow": "0px 0px 40px rgba(0, 0, 0, 0.45)"}}>


         <table>
            <thead>
              <tr>
                <th>Entity Guid</th>
                <th>Monitor Name</th>
                <th>Result</th>
                <th>Error</th>


              </tr>
            
            {/* <tr> */}
              {tabledata.length>0 && tabledata.map((item)=>{
                return(
                 <tr>
                 <td>{item.facet[0]}</td>

                 <td>{item.facet[1]}</td>

                 <td>{item.lastestresult}</td>
                  <td>{item.latesteroor}</td>
                 </tr>
                  
                )
              })}
            {/* </tr> */}
            </thead>
         </table>
         {/* {tabledata&&tabledata.length>0&&tabledata.map((syn)=>{
          console.log("finalresult", syn)
         return <div> {syn.lastestresult}</div>
         })} */}
       {/* <table style={{borderRadius:"5px"}}> 
        <thead>
          <tr>
            
            <th>Result</th>
          
          </tr> 
          <tr>
            {tabledata.map((item)=>{
              console.log("Finalresult" , item)
            })}
            <td>{item.lastestresult}</td>
            
          </tr>
         
         
        </thead>
      </table>  */}


 {/* <table>
  <tbody>
    <thead>
     <tr>
     <th>
         Latest result
      </th>
     </tr>
     <tr>
     {tabledata.map((item)=>{
        console.log("items", item)
      return(
        <div style={{height:"200px" }}>
        {item.lastestresult}
        </div>
      )
        
      })}
     </tr>
    </thead>
  </tbody>
</table>  */}
     
      </div>
    </>
  )
}

export default NewTable