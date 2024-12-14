import React from "react";
import ProvincePage  from "../components/News/ProvincePage";
import  ProvincesData  from "../Data/ProvincesData/ProvincesData.json";
 

function MalagaPage() {

  return (
    <div>
      <ProvincePage title="Malaga" phrases={ProvincesData.Malaga}/>
    </div>
  )
 }



export default MalagaPage;