import verifiedIcon from "../assets/icons/verified.svg"

interface PeopleCardProps {
  image: string
  name: string
  phoneNumber: string
  isVerified: boolean
  favoriteIcon: string
}

function PeopleCard({ image, name, phoneNumber, isVerified, favoriteIcon }: PeopleCardProps) {
  return (
    <div className="flex w-full bg-gray-100 rounded-md p-4 justify-between items-center">
      <div className="flex gap-4">
        <img src={image} alt="user-image" className="rounded-sm md:rounded-md w-16 md:w-24 h-16 md:h-24" />
        <div className="flex flex-col gap-2 justify-center text-sm md:text-base">
          <div>{name}</div>
          <div className="text-gray-500 font-normal">{phoneNumber}</div>
          <div className={`flex w-fit h-4 md:h-5 px-1.5 md:px-2 text-xs md:text-sm ${isVerified ? 'bg-blue-600 text-white' : 'bg-gray-300 text-black'} font-extralight tracking-wider rounded-md items-center gap-1`}>
            {isVerified && <img src={verifiedIcon} alt="verified" className="h-4 md:h-5 w-5 md:w-4" />}
            {isVerified ? 'Verified' : 'Not Verified'}
          </div>
        </div>
      </div>
      <img src={favoriteIcon} alt="Favorite" className="w-5 h-5" />
    </div>
  )
}

export default PeopleCard
