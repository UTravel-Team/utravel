import React from 'react'
import ProvincePage  from "../components/News/ProvincePage";
import  ProvincesData  from "../ProvincesData/ProvincesData.json";
 

function CordobaPage() {

  return (
    <div>
      <ProvincePage title="Cordoba" phrases={ProvincesData.Cordoba}/>
    </div>
  )
 }



export default CordobaPage;