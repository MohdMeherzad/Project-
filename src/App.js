import React from "react";
import "./style.css";
import MedicalTreatmentList from "./MedicalTreatmentList";


export default Function App(){
  
  const TreatmentData = [
    {"treatId":"001", 
     "treatCourseId":"123", 
     "type":"2166" ,
     "category":"Vaccines",
     "name":"zarif",
     "startDate":"21.12.2021",
    },


  ];
  
  return(
    <div>
      <MedicalTreatmentList recordslist={TreatmentData}>
      </MedicalTreatmentList>
    </div>
  );
}
