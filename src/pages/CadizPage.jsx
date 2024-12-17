import React from "react";
import ProvincesNews  from "../components/News/ProvincesNews";
import ProvincesData from "../ProvincesData/ProvincesData.json";
 

function CadizPage() {

  return (
    <div>
      <ProvincesNews title="Cadiz" phrases={ProvincesData.Cadiz}/>
    </div>
  )
 }



export default CadizPage;
