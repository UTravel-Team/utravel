import React from 'react'
import ProvincePage  from "../components/News/ProvincePage";
import  ProvincesData  from "../Data/ProvincesData/ProvincesData.json";
 

function GranadaPage() {

  return (
    <div>
      <ProvincePage title="Granada " phrases={ProvincesData.Granada}/>
    </div>
  )
 }



export default GranadaPage;