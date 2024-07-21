import { Outlet } from 'react-router-dom';

// import Sidenavbar from '../components/Sidenavbar';

function Index() {

  return (
    <div className='font-montserrat container-fluid h-full w-full'>
      <Outlet />
    </div>
  );
}

export default Index;
