import FeatherIcon from "feather-icons-react";
import { useEffect, useState } from "react";

interface PagePaginationProps {
  meta: {
    totalData: number;
    totalPage: number;
    page: number;
    prevLink: string | null;
    nextLink: string | null;
  };
  onPageChange: (page: number) => void;
}

const PagePagination = ({ meta, onPageChange }: PagePaginationProps) => {
  const [pageArray, setPageArray] = useState<(number | string)[]>([]);

  // useEffect(() => {
  //   const generatePageArray = () => {
  //     let newPages: (number | string)[];
  //     if (pages <= 4) {
  //       newPages = Array.from({ length: pages }, (_, index) => index + 1);
  //     } else {
  //       if (currentPage <= 3) {
  //         newPages = [1, 2, 3, 4, "...", pages];
  //       } else if (currentPage >= pages - 2) {
  //         newPages = [1, "...", pages - 3, pages - 2, pages - 1, pages];
  //       } else {
  //         newPages = [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", pages];
  //       }
  //     }
  //     setPageArray(newPages);
  //   };

  //   generatePageArray();
  // }, [pages, currentPage]);

  useEffect(() => {
    const generatePageArray = () => {
      const newPages: (number | string)[] = [];
      const { totalPage, page } = meta;

      if (totalPage <= 6) {
        for (let i = 1; i <= totalPage; i++) {
          newPages.push(i);
        }
      } else {
        newPages.push(1);

        if (page > 3) {
          newPages.push("...");
        }

        const startPage = Math.max(2, page - 1);
        const endPage = Math.min(totalPage - 1, page + 1);

        for (let i = startPage; i <= endPage; i++) {
          newPages.push(i);
        }

        if (page < totalPage - 2) {
          newPages.push("...");
        }

        newPages.push(totalPage);
      }

      setPageArray(newPages);
    };

    generatePageArray();
  }, [meta]);

  if (meta.totalPage <= 1) {
    return null;
  }

  // return (
  //   <div className="flex items-center justify-center mt-8">
  //     <div className="flex gap-5">
  //       {pageArray.map((pageNumber, index) => (
  //         <button
  //           key={index}
  //           onClick={() => (pageNumber !== "..." ? onPageChange(pageNumber as number) : null)}
  //           className={`flex justify-center items-center ${currentPage === pageNumber ? "text-white bg-blue-600" : "text-black bg-gray-100"} rounded-full w-5 lg:w-10 h-5 lg:h-10 text-xs lg:text-base`}
  //         >
  //           {pageNumber}
  //         </button>
  //       ))}
  //       <button className="flex justify-center items-center bg-blue-500 rounded-full w-5 lg:w-10 h-5 lg:h-10" onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === pages}>
  //         <FeatherIcon icon="arrow-right" />
  //       </button>
  //     </div>
  //   </div>
  // );
  return (
    <div className="flex items-center justify-center mt-8">
      <div className="flex gap-5">
        {/* Tombol Previous */}
        <button
          className="flex justify-center items-center bg-blue-500 rounded-full w-5 lg:w-10 h-5 lg:h-10"
          onClick={() => onPageChange(meta.page - 1)}
          disabled={!meta.prevLink}
        >
          <FeatherIcon icon="arrow-left" />
        </button>

        {pageArray.map((pageNumber, index) => (
          <button
            key={index}
            onClick={() => (pageNumber !== "..." ? onPageChange(pageNumber as number) : null)}
            className={`flex justify-center items-center ${meta.page === pageNumber ? "text-white bg-blue-600" : "text-black bg-gray-100"} rounded-full w-5 lg:w-10 h-5 lg:h-10 text-xs lg:text-base`}
          >
            {pageNumber}
          </button>
        ))}

        {/* Tombol Next */}
        <button
          className="flex justify-center items-center bg-blue-500 rounded-full w-5 lg:w-10 h-5 lg:h-10"
          onClick={() => onPageChange(meta.page + 1)}
          disabled={!meta.nextLink}
        >
          <FeatherIcon icon="arrow-right" />
        </button>
      </div>
    </div>
  );
};

export default PagePagination;
