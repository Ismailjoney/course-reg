import React from 'react';

const CoursesCarts = ({ selectCouresName, creditValue, remaingCreditValue }) => {

  return (
    <div >
      <h2 className='font-semibold '>Remeining Credit : {remaingCreditValue}</h2>
      <h2 > <span className='font-semibold '>Total Credit : </span>{creditValue} hours</h2>
      <h2 className='text-2xl font-semibold mt-4'>Courses Name</h2>
      {
        selectCouresName.map((courseName, idx) => <h3 key={idx}>{courseName.course_name}</h3>)
      }
    </div>
  );
};

export default CoursesCarts;