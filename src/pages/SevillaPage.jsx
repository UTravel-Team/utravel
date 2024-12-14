import React from "react";
import ProvincePage  from "../components/News/ProvincePage";
import  ProvincesData  from "../ProvincesData/ProvincesData.json";
 

function SevillaPage() {

  return (
    <div>
      <ProvincePage title="Sevilla" phrases={ProvincesData.Sevilla}/>
    </div>
  )
 }



export default SevillaPage;