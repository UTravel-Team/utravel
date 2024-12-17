import React from "react";
import ProvincesNews  from "../components/News/ProvincesNews";
import  ProvincesData  from "../ProvincesData/ProvincesData.json";
 

function SevillaPage() {

  return (
    <div>
      <ProvincesNews title="Sevilla" phrases={ProvincesData.Sevilla}/>
    </div>
  )
 }



export default SevillaPage;