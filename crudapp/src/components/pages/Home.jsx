
import SidebarMenu from './sidebar/SidebarMenu';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <section id="course-container">
    <article>
<aside className="sidebar"><SidebarMenu/></aside>
<aside className="content-wrapper">
  <div className='content-inner'><Outlet/></div>
</aside>
    </article>

    </section>
  )
}

export default Home
