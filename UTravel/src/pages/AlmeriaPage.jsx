import react from "react";
import ProvincePage  from "../components/News/ProvincePage";
import ProvincesData from "../Data/ProvincesData/ProvincesData.json";
 

function AlmeriaPage() {

  return (
    <div>
      <ProvincePage title="Almeria" phrases={ProvincesData.Almeria}/>
    </div>
  )
 }



export default AlmeriaPage;
