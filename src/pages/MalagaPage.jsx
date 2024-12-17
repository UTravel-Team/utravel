import React from "react";
import ProvincesNews  from "../components/News/ProvincesNews";
import  ProvincesData  from "../ProvincesData/ProvincesData.json";
 

function MalagaPage() {

  return (
    <div>
      <ProvincesNews title="Malaga" phrases={ProvincesData.Malaga}/>
    </div>
  )
 }



export default MalagaPage;