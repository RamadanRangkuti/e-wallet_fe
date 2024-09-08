import { useNavigate } from "react-router-dom";
import PeopleCard from "../components/PeopleCard";
import searchIcon from "../assets/icons/searchDark.svg";
import unfilledStar from "../assets/icons/UnfilledStar.svg";
import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import PagePagination from "./Pagination";
import { useStoreSelector } from "../redux/hooks";
import { IProfileBody } from "../types/profile";
import { jwtDecode } from "jwt-decode";

interface TransferListContainerProps {
  onSelectPerson: (id: number) => void;
}

interface User {
  id: number;
  image?: string;
  fullname?: string;
  phoneNumber?: string;
  favorite?: string;
}

interface PageInfo {
  currentPage: number;
  totalPage: number;
  prevLink: string | null;
  nextLink: string | null;
}

function TransferListContainer({ onSelectPerson }: TransferListContainerProps) {
  const [peopleData, setPeopleData] = useState<User[]>([]);
  const [pageInfo, setPageInfo] = useState<PageInfo>({
    currentPage: 1,
    totalPage: 1,
    prevLink: null,
    nextLink: null
  });
  const [searchInput, setSearchInput] = useState<string>("");

  const [id, setId] = useState<string>("");
  const { token } = useStoreSelector((state) => state.auth);
  const [getProfile, setProfile] = useState<IProfileBody[]>([]);
  
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
      console.log("isi paramns",id)
      try {
        const result = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProfile(result.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getDataUser();
  }, [id, token]);

  // 
  
  const getPosts = useCallback(
    async (page: number) => {
      try {
        const params: {
          page: number;
          fullname?: string;
        } = { page };

        if (searchInput) {
          params.fullname = searchInput;
        }

        const res = await axios.get(`${import.meta.env.VITE_REACT_APP_API_URL}/api/v1/user/`, { params });
        setPageInfo({
          currentPage: res.data.meta.page,
          totalPage: res.data.meta.totalPage,
          prevLink: res.data.meta.prevLink,
          nextLink: res.data.meta.nextLink
        });
        setPeopleData(res.data.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    },
    [searchInput]
  );

  // useEffect(() => {
  //   getPosts(currentPage, searchInput);
  // }, [getPosts, currentPage, searchInput]);

  useEffect(() => {
    getPosts(pageInfo.currentPage);
  }, [getPosts, pageInfo.currentPage]);

  // const handlePageChange = (newPage: number) => {
  //   setCurrentPage(newPage);
  //   window.scrollTo({ top: 650, behavior: "smooth" });
  // };

  const handlePageChange = (newPage: number) => {
    setPageInfo((prev) => ({ ...prev, currentPage: newPage }));
    window.scrollTo({ top: 650, behavior: "smooth" });
  };

  const navigate = useNavigate();

  const handleSelectPerson = (id: number) => {
    onSelectPerson(id);
    navigate(`/user/transfer/${id}`);
  };

  // const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchInput(event.target.value);
  //   setCurrentPage(1);
  // };

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
    setPageInfo((prev) => ({ ...prev, currentPage: 1 }));
  };

  return (
    <div className="flex flex-col md:border md:mr-8 px-5 py-6">
      <div className="flex flex-col font-semibold gap-4">

        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="text-xs md:text-base">Find People</div>
          <form className="relative w-full md:w-fit">
            <input
              type="text"
              value={searchInput}
              onChange={handleSearchInputChange}
              placeholder="Enter Number or Fullname"
              className="text-xs md:text-base w-full md:w-72 py-2 pl-2 md:pl-4 md:pr-10 h-8 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-normal md:font-semibold"
            />
            <img src={searchIcon} alt="Search" className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-100" />
          </form>
        </div>
        
        <div className="hidden md:flex text-sm text-gray-500 font-normal"> {getProfile.length > 0 ? `8 People Found For ${getProfile[0].fullname}` : 'No people found'}</div>
        <div>
          <div className="text-gray-500">
            {peopleData.map((person, index) => (
              <PeopleCard key={person.id} person={person} favorite={unfilledStar} index={index} onClick={(id) => handleSelectPerson(id)} />
            ))}
          </div>
        </div>
      </div>
      <PagePagination 
        meta={{
          totalData: peopleData.length, 
          totalPage: pageInfo.totalPage, 
          page: pageInfo.currentPage, 
          prevLink: pageInfo.prevLink, 
          nextLink: pageInfo.nextLink
        }} 
        onPageChange={handlePageChange} 
      />
    </div>
  );
}

export default TransferListContainer;
