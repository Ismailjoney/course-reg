import React from 'react';
import Course from '../course/Course';

const Courses = ({courses}) => {
    return (
        <div>
            <h2>Courses</h2>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
                {
                    courses.map(course => <Course
                        course={course}
                        key={course.id}
                    ></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;