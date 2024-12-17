import React from "react";
import ProvincesNews  from "../components/News/ProvincesNews";
import  ProvincesData  from "../ProvincesData/ProvincesData.json";
 

function HuelvaPage() {

  return (
    <div>
      <ProvincesNews title="Huelva" phrases={ProvincesData.Huelva}/>
    </div>
  )
 }



export default HuelvaPage;