import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PeopleDetailCard from '../components/PeopleDetailCard';
import moneyIcon from '../assets/icons/u_money-bill.svg';
import EnterPinModal from '../components/EnterPinModal';
import TransferSuccessModal from '../components/TransferSuccess';
import TransferFailedModal from '../components/TransferFailed';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { RootState } from '../redux/store';
import unfilledStar from '../assets/icons/UnfilledStar.svg'
import { jwtDecode } from 'jwt-decode';

interface TransferDetailContainerProps {
  onResetStep?: () => void;
  onFinish: () => void;
  onTransferAgain: () => void;
}

interface User {
  fullname: string;
  phoneNumber?: string;
  image?: string;
  favorite?: string;
}

function TransferDetailContainer({ onFinish, onTransferAgain }: TransferDetailContainerProps) {
  const { id } = useParams<{ id: string }>();
  const [target, setTarget] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showFailedModal, setShowFailedModal] = useState(false);
  const [nominal, setNominal] = useState<string>('');
  const [rawNominal, setRawNominal] = useState<number>(0);
  const [notes, setNotes] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [userId, setUserId] = useState<number | null>(null)
  const [targetId, setTargetId] = useState<number | null>(null)

  const token = useSelector((state: RootState) => state.auth.token);

  useEffect(() => {
    const getPost = async (id: string) => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_REACT_APP_API_URL}/api/v1/user/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (res.data && res.data.data && res.data.data.length > 0) {
          setTarget(res.data.data[0] || null);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (id) {
      getPost(id);
      setTargetId(parseInt(id))
    } else {
      console.error("Id is undefined");
    }
  }, [id, token]);

  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode<{ id: number }>(token);
      setUserId(decodedToken.id);
    }
  }, [token]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(value);
  };

  const handleSuccess = () => {
    setShowSuccessModal(true);
    setIsModalOpen(false);
    onFinish();
  };

  const handleFailure = () => {
    setShowFailedModal(true);
    setIsModalOpen(false);
  };

  const navigate = useNavigate();

  const handleTryAgain = () => {
    onTransferAgain();
    navigate("/user/transfer");
  };

  const handleDashboard = () => {
    navigate("/");
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/[^0-9]/g, '');
    const numericValue = parseFloat(value);

    if (isNaN(numericValue)) {
      setRawNominal(0);
      setNominal('');
    } else {
      setRawNominal(numericValue);
      setNominal(value);
    }
  };

  const handleBlur = () => {
    if (rawNominal !== null && rawNominal >= 0) {
      setNominal(formatCurrency(rawNominal));
    }
  };

  const handleFocus = () => {
    if (rawNominal) {
      setNominal(rawNominal.toString());
    }
  };

  const handleSubmit = () => {
    if (rawNominal === null || rawNominal < 10000) {
      setError('Nominal is required and must be at least Rp 10.000.');
      return;
    }

    setError(null);
    setIsModalOpen(true);
  };

  if (!target) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col md:border md:mr-8 p-7 gap-3 md:gap-6">
      <div className="flex flex-col font-semibold gap-4">
        <div className="text-xs md:text-base">People Information</div>
        <PeopleDetailCard image={target.image} name={target.fullname} phoneNumber={target.phoneNumber} favoriteIcon={unfilledStar} isVerified={true} />
      </div>
      <div className="flex flex-col justify-center">
        <div className="text-sm md:text-base font-semibold">Amount</div>
        <div className="text-xs md:text-sm text-gray-500 mb-4">Type the amount you want to transfer and then press continue to the next steps.</div>
        <div className="relative flex items-center">
          <img src={moneyIcon} alt="Money Icon" className="absolute left-3 w-4 md:w-5 h-4 md:h-5 text-gray-400" />
          <input
            type="text"
            name="nominal"
            className="pl-10 border rounded-md focus:outline-gray-400 w-full h-10 md:h-12 text-sm md:text-base font-normal md:font-semibold"
            placeholder="Masukkan Nominal Transfer"
            autoComplete="off"
            value={nominal}
            onChange={handleInputChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
          />
        </div>
        {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
      </div>
      <div className="flex flex-col">
        <div className="text-sm md:text-base font-semibold">Notes</div>
        <div className="text-sm text-gray-500 mb-4">You can add some notes for this transfer such as payment coffee or something</div>
        <textarea
          name="notes"
          className="border rounded-md focus:outline-gray-400 text-sm md:text-base font-normal md:font-semibold p-4 h-24 md:h-32 resize-none"
          placeholder="Masukkan Catatan"
          autoComplete="off"
          style={{ textAlign: "start", paddingTop: "0.5rem" }}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>
      <button
        className="bg-blue-600 min-h-8 md:min-h-10 rounded-md md:rounded-lg text-white text-sm md:text-base font-thin tracking-wider"
        onClick={handleSubmit}
      >
        Submit & Transfer
      </button>
      {isModalOpen && userId && targetId !== null && (
        <EnterPinModal
          onClose={() => setIsModalOpen(false)}
          onSuccess={handleSuccess}
          onFailure={handleFailure}
          userId={userId}
          targetId={targetId}
          amount={rawNominal}
          notes={notes}
        />
      )}
      {showSuccessModal && <TransferSuccessModal onClose={() => setShowSuccessModal(false)} onTransferAgain={handleTryAgain} />}
      {showFailedModal && <TransferFailedModal onClose={() => setShowFailedModal(false)} onBackTo={handleDashboard} onTryAgain={handleTryAgain} />}
    </div>
  );
}

export default TransferDetailContainer;
