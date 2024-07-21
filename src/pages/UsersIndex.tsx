import UserNavbar from '../components/UserNavbar'
import Sidenavbar from '../components/UserSidebar';
import { Outlet } from 'react-router-dom';

export default function Index() {
  return (
    <div>
        <UserNavbar/>
        <div className='flex felx-row w-full'>
            <div>
                <Sidenavbar/>
            </div>
            <Outlet/>
            
        </div>
    </div>
  )
}
