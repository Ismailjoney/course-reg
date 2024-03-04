import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css'
 

const Course = ({ course, handdleSelectedCourse }) => {
    const [showFullDescription, setShowFullDescription] = useState(false)
    const { id, course_name, course_description, course_img, price, credit } = course;



    const handdleSeeMore = () => {
        setShowFullDescription(true)
    }

    const handdleSeeLess = () => {
        setShowFullDescription(false)
    }

    return (
        <div className="card card-compact w-70 bg-base-100 shadow-xl">
            <figure><img src={course_img} alt="Shoes" /></figure>
            <div className="card-body  text-left ">
                <h2 className="card-title">{course_name}</h2>
                <div className=''>
                    <p className='text-justify'>
                        {course_description.length > 60 && !showFullDescription ?
                            <>
                                {course_description.slice(0, 60)}
                                <button onClick={handdleSeeMore} className='underline ml-2'> See more..</button>
                            </>
                            :
                            <>
                                {course_description}
                                <button onClick={handdleSeeLess} className='underline ml-2'> See less</button>
                            </>
                        }
                    </p>

                </div>
                <div className="card-actions justify-end">
                    <p>{price} tk</p>
                    <p>{credit} hours</p>
                </div>
                <button
                    onClick={() => {
                        handdleSelectedCourse(course);
                    }} className="btn btn-primary">Select </button>

                 

            </div>
        </div >
    );
};

export default Course;