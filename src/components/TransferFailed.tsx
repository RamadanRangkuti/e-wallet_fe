import image from '../assets/images/Oh no-cuate 1.webp'

interface TransferSuccessModalProps {
  onClose?: () => void
  onTryAgain?: () => void
  onBackTo?: () => void
}

function TransferSuccessModal({ onTryAgain, onBackTo }: TransferSuccessModalProps) {


  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={onTryAgain}>
      <div className="bg-white w-64 md:w-auto p-5 rounded-md shadow-md" onClick={(e) => e.stopPropagation()}>
        <div className="flex flex-col font-montserrat">
          <div className="flex w-full border-b border-gray-200 text-gray-400 text-xs md:text-sm font-semibold">TRANSFER TO GHALUH 1</div>
          <div className="flex flex-col justify-center">
            <div className="flex justify-center mx-10 md:mx-16 w-32 md:w-auto">
              <img src={image} alt="error" />
            </div>
            <div className="flex flex-col items-center">
              <div className="font-semibold">Oops Transfer <span className="text-red-600">Failed</span></div>
              <div className="text-sm text-gray-400 mt-2">Sorry There is an issue for your transfer, try again later!</div>
            </div>
            <div className="flex flex-col items-center mt-2">
              <button
                onClick={onTryAgain}
                className="bg-blue-600 h-10 md:h-12 w-full rounded-lg text-white text-sm md:text-base font-light tracking-wider my-2"
              >
                Try Again
              </button>
              <button
                onClick={onBackTo}
                className="border border-blue-600 h-10 md:h-12 w-full rounded-lg text-blue-600 text-sm md:text-base font-normal tracking-wider my-2"
              >
                Back To Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TransferSuccessModal
