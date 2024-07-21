import { Outlet, useLocation } from 'react-router-dom';
import UserNavbar from '../components/UserNavbar';
import SideNavbar from '../components/UserSidebar';
import Dashboard from './Dashboard';

function UsersIndex() {
  const location = useLocation();

  return (
    <div className='container-fluid h-full w-full'>
      <UserNavbar />
      <div className='md:flex'>
      <SideNavbar/>
      {location.pathname === '/user' ? <Dashboard /> : <Outlet />}
      </div>
    </div>
  );
}

export default UsersIndex;
