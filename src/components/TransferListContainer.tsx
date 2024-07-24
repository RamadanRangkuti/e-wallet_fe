import { useNavigate } from "react-router-dom";
import PeopleCard from "../components/PeopleCard";
import searchIcon from "../assets/icons/searchDark.svg";
import unfilledStar from "../assets/icons/UnfilledStar.svg";
import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import PagePagination from "./Pagination";

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
}

function TransferListContainer({ onSelectPerson }: TransferListContainerProps) {
  const [peopleData, setPeopleData] = useState<User[]>([]);
  const [pageInfo, setPageInfo] = useState<PageInfo | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchInput, setSearchInput] = useState<string>("");

  const getPosts = useCallback(
    async (page: number | string, fullname?: string) => {
      try {
        let getPage = page;
        if (page === 'next') {
          getPage = currentPage + 1;
        }

        const params: {
          page: number | string;
          fullname?: string;
        } = {
          page: getPage,
        };

        if (fullname) {
          params.fullname = fullname;
        }

        const res = await axios.get(`${import.meta.env.VITE_REACT_APP_API_URL}/api/v1/user`, { params });
        setPageInfo(res.data.meta);
        setPeopleData(res.data.data);
        setCurrentPage(res.data.meta.page);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    },
    [currentPage]
  );

  useEffect(() => {
    getPosts(currentPage, searchInput);
  }, [getPosts, currentPage, searchInput]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 650, behavior: "smooth" });
  };

  const navigate = useNavigate();

  const handleSelectPerson = (id: number) => {
    onSelectPerson(id);
    navigate(`/user/transfer/${id}`);
  };

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCurrentPage(1);
  };

  return (
    <div className="flex flex-col md:border md:mr-8 px-5 py-6">
      <div className="flex flex-col font-semibold gap-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="text-xs md:text-base">Find People</div>
          <form onSubmit={handleSearchSubmit} className="relative w-full md:w-fit">
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
        <div className="hidden md:flex text-sm text-gray-500 font-normal">8 People Found For Galuh</div>
        <div>
          <div className="text-gray-500">
            {peopleData.map((person, index) => (
              <PeopleCard key={person.id} person={person} favorite={unfilledStar} index={index} onClick={(id) => handleSelectPerson(id)} />
            ))}
          </div>
        </div>
      </div>
      <PagePagination pages={pageInfo?.totalPage || 0} currentPage={currentPage} onPageChange={handlePageChange} />
    </div>
  );
}

export default TransferListContainer;
