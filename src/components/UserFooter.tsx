import dashboard from '../assets/icons/dashboard.svg'
import transfer from '../assets/icons/transfer.svg'
import history from '../assets/icons/history.svg'
import topUp from '../assets/icons/topUp.svg'
import profile2 from '../assets/icons/porfile.svg'

function UserFooter() {
  return (
    <footer className='md:hidden font-montserrat flex justify-around'>
        <button className='grid place-items-center p-3'>
            <img width="20" src={dashboard} alt="" />
            <p className='text-[10px]'>Dashboard</p>
        </button>
        <button className='grid place-items-center p-3'>
            <img width="20" src={transfer} alt="" />
            <p className='text-[10px]'>Transfer</p>
        </button>
        <div className='grid place-items-center p-3'>
            <img width="20" src={history} alt="" />
            <p className='text-[10px]'>History</p>
        </div>
        <div className='grid place-items-center p-3'>
            <img width="20" src={topUp} alt="" />
            <p className='text-[10px]'>Topup</p>
        </div>
        <div className='grid place-items-center p-3'>
            <img width="20" src={profile2} alt="" />
            <p className='text-[10px]'>Profile</p>
        </div>
    </footer>
  )
}

export default UserFooter