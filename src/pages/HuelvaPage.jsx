import React from "react";
import ProvincesNews  from "../components/News/ProvincesNews";
import AndaluciaNewsData from "../components/News/NewsData/ProvincesNewsData.json"
 

function HuelvaPage() {

  return (
    <div>
      <ProvincesNews provinceName="Huelva" />
    </div>
  )
 }



export default HuelvaPage;