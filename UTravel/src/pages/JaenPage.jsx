import React from "react";
import ProvincePage  from "../components/News/ProvincePage";
import  ProvincesData  from "../Data/ProvincesData/ProvincesData.json";
 

function JaenPage() {

  return (
    <div>
      <ProvincePage title="Jaen" phrases={ProvincesData.Jaen}/>
    </div>
  )
 }



export default JaenPage;