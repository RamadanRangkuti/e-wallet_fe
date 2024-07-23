import profile2Blue from "../assets/icons/profile2-blue.svg";

function NavbarProfile() {
  return (
    <div className="flex items-center bg-primary w-full text-white text-xs md:text-base md:font-bold px-5 py-2 md:bg-white md:text-black">
      <img className="hidden md:flex" width="20" src={profile2Blue} alt="" />
      <p className="md:ml-3">Profile</p>
    </div>
  );
}

export default NavbarProfile;
