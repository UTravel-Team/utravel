import React from "react";
import ProvincePage  from "../components/News/ProvincePage";
import  ProvincesData  from "../Data/ProvincesData/ProvincesData.json";
 

function HuelvaPage() {

  return (
    <div>
      <ProvincePage title="Huelva" phrases={ProvincesData.Huelva}/>
    </div>
  )
 }



export default HuelvaPage;