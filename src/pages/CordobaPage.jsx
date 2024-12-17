import React from 'react'
import ProvincesNews  from "../components/News/ProvincesNews";
import  ProvincesData  from "../ProvincesData/ProvincesData.json";
 

function CordobaPage() {

  return (
    <div>
      <ProvincesNews title="Cordoba" phrases={ProvincesData.Cordoba}/>
    </div>
  )
 }



export default CordobaPage;