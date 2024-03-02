import React from 'react';

const CoursesCarts = ({ selectCouresName, creditValue, remaingCreditValue, price }) => {

  return (
    <div className='text-left'>
      <h2 className='font-semibold '><span className='underline'>Remeining Credit :</span> {remaingCreditValue}</h2>
      <h2> <span className='font-semibold underline'>Total Credit : </span>{creditValue} hours</h2>
      <h2 className='text-2xl font-semibold mt-4 underline'>Courses Name</h2>
      <div className='text-left'>
        {
          selectCouresName.map((courseName, idx) => <h3 key={idx}>{courseName.course_name}</h3>)
        }

      </div>
      <h2 className='text-2xl font-semibold mt-4 underline'>Total Price : {price}</h2>
    </div>
  );
};

export default CoursesCarts;