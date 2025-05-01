import { customMap } from "../utils/arrayHelper";

function Pagination({ currentPage, totalPages, onPageChange }) {

    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages[pages.length] = i;
    }

    // function customMap(pages, callback) {
    //     const result = [];
    //     for (let i = 0; i < pages.length; i++) {
    //         result[result.length] = callback(pages[i], i);
    //     }
    //     return result;
    // }

    return (
        <div className="w-full overflow-x-auto">
            <div className="flex justify-center items-center gap-2 my-4 px-2 min-w-max">
                {/* {pages.map((page) => (
                    <button
                        key={page}
                        onClick={() => onPageChange(page)}
                        className={`min-w-[40px] px-3 py-2 rounded-full text-sm font-medium transition cursor-pointer
                        ${currentPage === page
                                ? 'bg-blue-600 text-white shadow-md'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-black'
                            }`}
                    >
                        {page}
                    </button>
                ))} */}
                {
                    customMap(pages, (page) => (
                        <button
                            key={page}
                            onClick={() => onPageChange(page)}
                            className={`min-w-[40px] px-3 py-2 rounded-full text-sm font-medium transition cursor-pointer
                            ${currentPage === page
                                    ? 'bg-blue-600 text-white shadow-md'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-black'
                                }`}
                        >
                            {page}
                        </button>
                    ))
                }
            </div>
        </div>
    );
}

export default Pagination;