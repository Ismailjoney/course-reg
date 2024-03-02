import React from 'react';

const CoursesCarts = ({ selectCouresName }) => {
    console.log(selectCouresName)
    return (
        <div >
            <h2>Courses Cart</h2>
              {
                selectCouresName.map((courseName, idx) => <h3 key={idx}>{courseName.course_name}</h3>)
              }
        </div>
    );
};

export default CoursesCarts;