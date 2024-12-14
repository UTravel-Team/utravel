import React from "react";
import ProvincePage  from "../components/News/ProvincePage";
import ProvincesData from "../Data/ProvincesData/ProvincesData.json";
 

function CadizPage() {

  return (
    <div>
      <ProvincePage title="Cadiz" phrases={ProvincesData.Cadiz}/>
    </div>
  )
 }



export default CadizPage;
