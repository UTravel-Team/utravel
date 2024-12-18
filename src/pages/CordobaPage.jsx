import React from 'react'
import ProvincesNews  from "../components/News/ProvincesNews";
import AndaluciaNewsData from "../components/News/NewsData/ProvincesNewsData.json"
 

function CordobaPage() {

  return (
    <div>
      <ProvincesNews provinceName="Cordoba" />
    </div>
  )
 }



export default CordobaPage;