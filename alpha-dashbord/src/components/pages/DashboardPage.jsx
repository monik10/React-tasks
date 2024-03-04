import "./Dashboardpage.css"
import { FaRegIdCard } from "react-icons/fa";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { SlLocationPin } from "react-icons/sl";
const DashboardPage = () => {
  return (
   <section className="section-dash-container">
    <article className="article-dash-container">
      <div className="dash-left-container">
        <div className="inner-left-container">
       <ul>
        <li><span><FaRegIdCard/></span><span>Emp Id</span><h1>75</h1></li>
        <li> <span><MdOutlinePhoneAndroid/></span><span>Phone</span><h1>7896543215</h1></li>
        <li><span><AiOutlineMail/></span><span>Email</span><h1>john@gmail.com</h1></li>
        <li><span><SlLocationPin/></span><span>Location</span><h1>Bangalore</h1></li>
       </ul>
        </div>
      </div>
      <div className="dash-right-container">
        <div className="inner-right-container">
          <main className="upside">
          <div className="inner-upside">
          <h1>batches</h1>
            <div className="batch-container">
            <div className="card">
            <div className="circle">
            <span>1</span>
            <h5>assign</h5>
              </div>
            <span>assigned batches</span>
            </div>
            <div className="card">
            <div className="circle">
            <span>2</span>
            <h5>assign</h5>
            </div>
            <span>assigned batches</span>
            </div>
            <div className="card">
            <div className="circle">
            <span>3</span>
            <h5>assign</h5>
            </div>
            <span>assigned batches</span>
            </div>
            <div className="card">
            <div className="circle">
            <span>4</span>
            <h5>assign</h5>
            </div>
            <span>assigned batches</span>
            </div>
           </div>
          </div>
          </main>
          <div className="downside">
            <div className="inner-downside">
            <h1>Attendance</h1>
            <div className="batch-container">
            <div className="card">
            <div className="circle">
            <span>1</span>
            <h5>assign</h5>
              </div>
            <span>assigned batches</span>
            </div>
            <div className="card">
            <div className="circle">
            <span>2</span>
            <h5>assign</h5>
            </div>
            <span>assigned batches</span>
            </div>
            <div className="card">
            <div className="circle">
            <span>3</span>
            <h5>assign</h5>
            </div>
            <span>assigned batches</span>
            </div>
            <div className="card">
            <div className="circle">
            <span>4</span>
            <h5>assign</h5>
            </div>
            <span>assigned batches</span>
            </div>
           </div>
            </div>
          </div>
        </div>
      </div>
    </article>
   </section>
  )
}

export default DashboardPage