import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import transferIcon from "../assets/icons/blueTransfer.svg";
import TransferListContainer from "../components/TransferListContainer";
import TransferDetailContainer from "../components/TransferDetailContainer";
import TransferSuccessModal from "../components/TransferSuccess";

const steps = [
  { number: 1, label: "Find People" },
  { number: 2, label: "Set Nominal" },
  { number: 3, label: "Finish" },
];

function TransferPage() {
  const { id } = useParams<{ id: string }>();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPersonId, setSelectedPersonId] = useState<number | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      setSelectedPersonId(Number(id));
      setCurrentStep(2);
    }
  }, [id]);

  const handlePersonSelect = (id: number) => {
    setSelectedPersonId(id);
    setCurrentStep(2);
  };

  const handleResetStep = () => {
    setCurrentStep(1);
    setSelectedPersonId(null);
  };

  const handleFinish = () => {
    setCurrentStep(3);
    setShowSuccessModal(true);
  };

  const handleTransferAgain = () => {
    setShowSuccessModal(false);
    handleResetStep();
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
    navigate("/user/history");
  };

  return (
    <main className="relative font-montserrat w-full md:p-8">
      <div className="flex-col w-full">
        <div className="flex md:mb-7">
          <div className="flex flex-col w-full gap-5">
            <div className="flex items-center bg-primary w-fit text-white text-xs md:text-base md:font-bold px-5 md:px-0 py-2 md:bg-white md:text-black gap-2">
              <img src={transferIcon} alt="icon" className="hidden md:flex" />
              Transfer Money
            </div>
            <div className="hidden md:flex w-full md:w-fit items-center gap-4">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div className={`flex items-center justify-center w-5 h-5 ${currentStep === step.number ? "bg-blue-600" : "bg-gray-700"} text-sm text-white rounded-full mr-1`}>{step.number}</div>
                  <span className={`tracking-wide mr-2 ${currentStep === step.number ? "text-blue-600" : "text-gray-600"} ${currentStep === 3 && step.number === 3 ? "text-blue-600" : ""}`}>{step.label}</span>
                  {index < steps.length - 1 && <div className="flex-grow border-dashed border-t border-gray-400 w-20"></div>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {currentStep === 1 && <TransferListContainer onSelectPerson={handlePersonSelect} />}
        {(currentStep === 2 || currentStep === 3) && selectedPersonId && (
          <div>
            <TransferDetailContainer
              onFinish={handleFinish}
              onTransferAgain={handleTransferAgain}
            />
            {showSuccessModal && (
              <TransferSuccessModal
                onClose={handleCloseSuccessModal}
                onTransferAgain={handleTransferAgain}
              />
            )}
          </div>
        )}
      </div>
    </main>
  );
}

export default TransferPage;
