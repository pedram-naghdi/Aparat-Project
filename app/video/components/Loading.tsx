const VideoLoading = () => {
    return (
        <div>
            <span className="relative flex h-5 w-5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-5 w-5 bg-blue-600"></span>
            </span>
        </div>
    )
}

export default VideoLoading