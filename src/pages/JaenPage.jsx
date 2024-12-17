import React from "react";
import ProvincesNews  from "../components/News/ProvincesNews";
import  ProvincesData  from "../ProvincesData/ProvincesData.json";
 

function JaenPage() {

  return (
    <div>
      <ProvincesNews title="Jaen" phrases={ProvincesData.Jaen}/>
    </div>
  )
 }



export default JaenPage;