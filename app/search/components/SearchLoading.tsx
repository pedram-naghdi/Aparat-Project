const SearchLoading = (props) => {
    return (
        <>


        <div className="page-title flex justify-between gap-1 mb-7 pb-2 border-b border-gray-100">
            <h3 className="text-gray-200 dark:text-gray-700">نتایج یافت شده برای عبارت «<span className="text-gray-200 dark:text-gray-700">{decodeURI(props.searchText)}</span>»</h3>
            <span title="جستجو دوباره" className="cursor-pointer text-blue-600 hover:text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataSlot="icon" className={`w-6 h-6 ${props.isRefetching ? "animate-spin" : ""}`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
            </span>
        </div>

        <div className="videos flex flex-wrap mb-8 ">
        {
            Array.from({ length: 5 }, (i) => (
            <div className="video w-full mb-4 p-3">
                <div role="status" className="w-full animate-pulse flex gap-2 p-1 rounded-[5px]">
                    <div className="flex items-center justify-center max-w-full w-full md:w-[150px] mx-auto md:mx-0 bg-gray-300 rounded dark:bg-gray-700 h-[80px]">
                        <svg className="w-6 h-6 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
                            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
                        </svg>
                    </div>
                    <div className="max-w-full w-full md:w-[calc(100%-150px)] pr-3">
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-full md:w-[300px]"></div>
                        <div className="h-1.5 bg-gray-200 rounded-full dark:bg-gray-700 mb-3 w-[150px]"></div>
                    </div>
                </div>
            </div>
            ))
        }
        </div>
        </>
    )
}

export default SearchLoading