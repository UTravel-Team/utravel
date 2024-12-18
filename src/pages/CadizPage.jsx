import React from "react";
import ProvincesNews  from "../components/News/ProvincesNews";
import AndaluciaNewsData from "../components/News/NewsData/ProvincesNewsData.json"
 

function CadizPage() {

  return (
    <div>
      <ProvincesNews provinceName="Cadiz" />
    </div>
  )
 }



export default CadizPage;
