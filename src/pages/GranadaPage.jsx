import React from 'react'
import ProvincesNews from "../components/News/ProvincesNews";
import  ProvincesData  from "../ProvincesData/ProvincesData.json";
 

function GranadaPage() {

  return (
    <div>
      <ProvincesNews title="Granada " phrases={ProvincesData.Granada}/>
    </div>
  )
 }



export default GranadaPage;