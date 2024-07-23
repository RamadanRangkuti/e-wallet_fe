import dashboard from "../assets/icons/dashboard.svg";
import transfer from "../assets/icons/transfer.svg";
import history from "../assets/icons/history.svg";
import topUp from "../assets/icons/topUp.svg";
import profile2 from "../assets/icons/porfile.svg";
import { Link } from "react-router-dom";

function UserFooter() {
  return (
    <footer className="md:hidden font-montserrat flex justify-around bottom-0">
      <Link to="/user/dashboard">
        <button className="grid place-items-center p-3 focus:text-blue-600  focus:border-t-2 focus:border-blue-600 focus:border-solid focus:bg-blue-600 focus:bg-opacity-10">
          <img width="20" src={dashboard} alt="dashboard" />
          <p className="text-[10px]">Dashboard</p>
        </button>
      </Link>
      <Link to="/user/transfer">
        <button className="grid place-items-center p-3 focus:text-blue-600  focus:border-t-2 focus:border-blue-600 focus:border-solid focus:bg-blue-600 focus:bg-opacity-10">
          <img width="20" src={transfer} alt="transfer" />
          <p className="text-[10px]">Transfer</p>
        </button>
      </Link>
      <Link to="/user/history">
        <button className="grid place-items-center p-3 focus:text-blue-600  focus:border-t-2 focus:border-blue-600 focus:border-solid focus:bg-blue-600 focus:bg-opacity-10">
          <img width="20" src={history} alt="history" />
          <p className="text-[10px]">History</p>
        </button>
      </Link>
      <Link to="/user/topup">
        <button className="grid place-items-center p-3 focus:text-blue-600  focus:border-t-2 focus:border-blue-600 focus:border-solid focus:bg-blue-600 focus:bg-opacity-10">
          <img width="20" src={topUp} alt="topup" />
          <p className="text-[10px]">Topup</p>
        </button>
      </Link>
      <Link to="/user">
        <button className="grid place-items-center p-3 focus:text-blue-600  focus:border-t-2 focus:border-blue-600 focus:border-solid focus:bg-blue-600 focus:bg-opacity-10">
          <img width="20" src={profile2} alt="profile" />
          <p className="text-[10px]">Profile</p>
        </button>
      </Link>
    </footer>
  );
}

export default UserFooter;
