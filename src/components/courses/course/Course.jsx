import React, { useState } from 'react';

const Course = ({ course }) => {
    const [showFullDescription, setShowFullDescription] = useState(false);
    const { id, course_name, course_description, course_img, price, credit } = course;

    const handdleSeeMore = ( ) => {
        setShowFullDescription(true)  
    }
 
    return (
        <div className="card w-75 bg-base-100 shadow-xl">
            <figure><img src={course_img} alt={course_name} /></figure>
            <div className="card-body">
                <h4 className="card-title font-bold mt-3">
                    {course_name}
                </h4>
                <p className='justify-start'>
                    {course_description.length > 50 && !showFullDescription ?
                     
                        <>
                            {course_description.slice(0, 60)} <button onClick={ handdleSeeMore} className='border ml-2'>See More</button>
                        </>
                        :
                        course_description}
                </p>

                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{price} Tk.</div>
                    <div className="badge badge-outline">Credit : {credit}</div>
                </div>
            </div>
        </div>
    );
};

export default Course;