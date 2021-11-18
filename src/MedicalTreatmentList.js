import React from 'react';
import Medicaltreatment from './Medicaltreatment';

function MedicalTreatmentList(props){
  const htmlarrayelemet = props.recordslist.map((el)=>
  <li key={el.treadId}>
  <Medicaltreatment individualRecord={el}></Medicaltreatment>
  </li>
  )

  console.log (props.recordslist);

    return(
      <div>
        {htmlarrayelemet}
      </div>
    );
}
export default MedicalTreatmentList;