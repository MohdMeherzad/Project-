import React from 'react';
function Medicaltreatment(props){

    return (
      <h1>
        treatId 
        {props.individualRecord.treatId} 
        typeCourseId
        {props.individualRecord.treatCourseId} 
        type
        {props.individualRecord.type} 
        category 
        {props.individualRecord.category} 
        name 
        {props.individualRecord.name}
        startDate
        {props.individualRecord.startDate}
      </h1>
    );
} 
export default Medicaltreatment;   