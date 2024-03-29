import { useEffect, useState } from 'react'
import './App.css'
import Courses from './components/courses/Courses/Courses'
import CoursesCarts from './components/courses/coursesCarsts/CoursesCarts'
import Header from './components/hedaer/Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/footer/Footer'

function App() {

  const [courses, setCourses] = useState([])
  const [selectCouresName, setSelectCouresName] = useState([])
  const [creditValue, setCreditValue] = useState(0)
  const [remaingCreditValue, setRemaingCreditValue] = useState(20)
  const [price, setPrice] = useState(0)



  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setCourses(data))
  }, [])


  const notify = () => toast.warn('You already added', {
    theme: 'dark'
  });
  const warningMessage = () => toast.info(`OPPS! Your remaing value is ${remaingCreditValue}. You can't added credit more then ${remaingCreditValue}`, {
    theme: 'dark'
  });
  const successMessage = () => toast.success('added successFully')

  //click select butoon and get course name
  const handdleSelectedCourse = (course) => {
    const isCourseExists = selectCouresName.find(item => item.id === course.id);

    if (!isCourseExists) {
      const newCourses = [...selectCouresName, course];
      const newCreditValue = creditValue + course.credit;
      const newRemaingCreditValue = 20 - newCreditValue;
      const newPrice = parseFloat(price + course.price)


      if (remaingCreditValue < course.credit) {
        return warningMessage()
      }
      setSelectCouresName(newCourses);
      setCreditValue(newCreditValue)
      setRemaingCreditValue(newRemaingCreditValue)
      setPrice(newPrice.toFixed(2))
      successMessage()

    }
    else {
      notify()
    }
  }



  return (
    <>
      <Header></Header>
      <div className="drawer lg:drawer-open gap-4  ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center  justify-center">
          {/* Page content here */}
          <Courses
            courses={courses}
            key={courses.id}
            handdleSelectedCourse={handdleSelectedCourse}
          ></Courses>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content  ">
            {/* Sidebar content here */}
            <CoursesCarts
              selectCouresName={selectCouresName}
              creditValue={creditValue}
              remaingCreditValue={remaingCreditValue}
              price={price}
            ></CoursesCarts>

          </ul>
        </div>
      </div>
      <Footer></Footer>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
     
/>
    </>
  )

}
export default App
