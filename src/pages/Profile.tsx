import userIcon from "../assets/images/user.webp";
import user from "../assets/icons/user.svg";
import editProfile from "../assets/icons/edit-profile.svg";
import deleteProfile from "../assets/icons/delete-profile.svg";
import emailIcon from "../assets/icons/email-icon.svg";
import phoneIcon from "../assets/icons/phone-icon.svg";

import Input from "../components/Input";
import { Link } from "react-router-dom";
import profile2Blue from "../assets/icons/profile2-blue.svg";
import { useEffect, useRef, useState } from "react";
import { useStoreSelector } from "../redux/hooks";
import { IProfileBody } from "../types/profile";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Swal from "sweetalert2";
import Header from "../components/HeaderPage";

function Profile() {
  const [form, setForm] = useState<IProfileBody>();
  const { token } = useStoreSelector((state) => state.auth);
  const [getProfile, setProfile] = useState<IProfileBody[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [changeImage, setImage] = useState<File | null>(null);
  const [id, setId] = useState<string>("");

  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode<{ id: string }>(token);
      setId(decodedToken.id);
    }
  }, [token]);

  useEffect(() => {
    const getDataUser = async () => {
      if (!id || !token) return;
      const url = `${import.meta.env.VITE_REACT_APP_API_URL}/api/v1/user/${id}`;
      try {
        const result = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProfile(result.data.data);
        setForm(result.data.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getDataUser();
  }, [id, token]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((form) => {
      return {
        ...form,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      if (form?.fullname) {
        formData.append("fullname", form.fullname);
      }
      if (form?.phone) {
        formData.append("phone", form.phone);
      }
      if (changeImage) {
        formData.append("image", changeImage);
      }
      const url = `${import.meta.env.VITE_REACT_APP_API_URL}/api/v1/user/${id}`;
      await axios.put(url, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      Swal.fire({
        title: "Success!",
        text: "Update Success",
        icon: "success",
        showConfirmButton: false,
        timer: 2000,
        position: "top-end",
        customClass: {
          popup: "border-solid border-5 border-primary text-sm rounded-lg shadow-lg mt-8 tbt:mt-16",
        },
        toast: true,
      });
    } catch (err) {
      Swal.fire({
        title: "Failed!",
        text: "Update Failed!",
        icon: "error",
        showConfirmButton: false,
        timer: 2000,
        position: "top-end",
        customClass: {
          popup: "border-solid border-5 border-primary text-sm rounded-lg shadow-lg mt-8 tbt:mt-16",
        },
        toast: true,
      });
      console.error(err);
    }
  };

  return (
    <main className="font-montserrat w-full">
      <div className="md:mt-5">
        <Header title="Profile" icons={profile2Blue} />
        <div className="p-5 md:border md:border-solid md:mx-5">
          <h1 className="text-xs md:text-base text-black font-semibold">Profile Picture</h1>
          <div className="flex my-3">
            {changeImage ? (
              <img className="rounded-lg" width="100" height="100" src={URL.createObjectURL(changeImage)} alt="user" />
            ) : (
              <img className="rounded-lg" width="100" height="100" src={getProfile[0]?.image || userIcon} alt="user" />
            )}
            <div className="w-full ml-5">
              <button onClick={handleButtonClick} className="w-40 h-10 items-center flex bg-primary hover:bg-blue-700 active:bg-blue-800 rounded-lg">
                <div className="flex px-2 py-2">
                  <img width="15" src={editProfile} alt="edit-profile" />
                  <p className="text-white text-xs ml-2">Change Profile</p>
                </div>
              </button>
              <button className="w-40 h-10 items-center flex bg-white hover:bg-gray-50 active:bg-gray-100 border border-solid border-red-600 rounded-lg mt-5">
                <div className="flex px-2 py-2">
                  <img width="15" src={deleteProfile} alt="edit-profile" />
                  <p className="text-red-600 text-xs ml-2">Delete Profile</p>
                </div>
              </button>
              <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" />
            </div>
          </div>
          <p className="text-[10px] md:text-xs">The profile picture must be 512 x 512 pixels or less</p>
          <form onSubmit={onSubmitHandler} className="mt-3">
            <label className="font-semibold text-sm md:text-base uw:text-2xl" htmlFor="fullname">
              Full Name
            </label>
            <div className="relative mt-2">
              <img className="absolute mt-[11px] ml-5" width="20" height="20" src={user} alt="user-icon" />
              <Input input={{ type: "text", name: "fullname", placeholder: "Enter Full Name", autocomplete: "name", value: form?.fullname, onChange: onChangeHandler }} />
            </div>
            <label className="font-semibold text-sm md:text-base uw:text-2xl" htmlFor="phone">
              Phone
            </label>
            <div className="relative mt-2">
              <img className="absolute mt-[11px] ml-5" width="20" height="20" src={phoneIcon} alt="email-icon" />
              <Input input={{ type: "text", name: "phone", placeholder: "Enter Your Number Phone", autocomplete: "off", value: form?.phone, onChange: onChangeHandler }} />
            </div>
            <label className="font-semibold text-sm md:text-base uw:text-2xl" htmlFor="email">
              Email
            </label>
            <div className="relative mt-2">
              <img className="absolute mt-[11px] ml-5" width="20" height="20" src={emailIcon} alt="email-icon" />
              <Input input={{ type: "text", name: "email", placeholder: "Enter your email", autocomplete: "email", value: form?.email }} />
            </div>
            <p className="font-semibold text-sm mb-2 md:text-base uw:text-2xl">Password</p>
            <Link to="/user/changepassword" className="flex mb-4 text-primary text-sm md:text-base uw:text-xl hover:underline">
              Change Password
            </Link>
            <p className="font-semibold text-sm mb-2 md:text-base uw:text-2xl">Pin</p>
            <Link to="/user/changepin" className="flex mb-4 text-primary text-sm md:text-base uw:text-xl hover:underline">
              Change Pin
            </Link>
            <button className="text-white text-sm uw:text-2xl bg-primary hover:bg-blue-700 active:bg-blue-800 rounded-lg w-full h-11 uw:h-16" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Profile;
