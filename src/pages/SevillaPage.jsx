import React from "react";
import ProvincesNews  from "../components/News/ProvincesNews";
import AndaluciaNewsData from "../components/News/NewsData/ProvincesNewsData.json"

function SevillaPage() {

  return (
    <div>
      <ProvincesNews provinceName="Sevilla" />
    </div>
  )
 }



export default SevillaPage;