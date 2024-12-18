import React from 'react'
import ProvincesNews from "../components/News/ProvincesNews";
import AndaluciaNewsData from "../components/News/NewsData/ProvincesNewsData.json"
 

function GranadaPage() {

  return (
    <div>
      <ProvincesNews provinceName="Granada" />
    </div>
  )
 }



export default GranadaPage;