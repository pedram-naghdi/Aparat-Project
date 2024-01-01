const VideoNotFound = ({searchText}) => {
    return (
        <div className="text-center flex flex-col content-center items-center my-10 mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataSlot="icon" className="w-20 h-20 text-red-900 mb-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            <h4 className="text-2xl font-bold pb-2">موردی یافت نشد!</h4>
            <p className="mb-5">بر اساس عبارت «<span className="text-blue-600">{decodeURI(searchText)}</span>» هیچ موردی یافت نشد</p>
        </div>
    )
}

export default VideoNotFound