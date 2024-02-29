import { useEffect, useState } from 'react'
import './App.css'
import Courses from './components/courses/Courses/Courses'
import CoursesCarts from './components/courses/coursesCarsts/CoursesCarts'
import Header from './components/hedaer/Header'

function App() {

  const [courses, setCourses] = useState([])


  useEffect( () =>{
    fetch('data.json')
    .then(res => res.json())
    .then(data => setCourses(data))
  } ,[])


  return (
    <>
      <Header></Header>
      {/* main content in drawer */}
      <div className="drawer lg:drawer-open gap-4">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
        <Courses
        courses={courses}
        key={courses.id}
        ></Courses>


          {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}

        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <CoursesCarts></CoursesCarts>
          </ul>

        </div>
      </div>
    </>
  )
}

export default App
