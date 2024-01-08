import { useState, useRef, useEffect } from "react"

interface Iurl {
    poster: string
}
const VideoPlayer = ({ poster }: Iurl) => {

    const [firstPlay, setFirstPlay] = useState<Boolean>(false)
    const [play, setPlay] = useState<Boolean>(false)
    const [muted, setMuted] = useState<Boolean>(false)
    const [volume, setVolume] = useState<number>(100)
    const [fullScreen, setFullScreen] = useState<Boolean>(false)
    const [time, setTime] = useState<number>(0)
    const [showControls , setShowControls] = useState<Boolean>(false)

    const videoPlayer = useRef<HTMLVideoElement>(null)
    let checkTimeLapse : ReturnType<typeof setTimeout>

    const firstPlayVideo = () => {
        setFirstPlay(true)
        setPlay(true)
        setShowControls(true)
        if (videoPlayer.current) {
            videoPlayer.current.play();
        }
        checkTimeLapse = setInterval(TimeLapseOnPlaying, 1000)
    }

    const playVideo = () => {

        if (videoPlayer.current && !videoPlayer.current.ended) {
            setFirstPlay(true)
            setPlay(!play)
        }
        if (play) {
            if (videoPlayer.current) {
                videoPlayer.current.pause();
            }
        }
        else {
            if (videoPlayer.current) {
                videoPlayer.current.play();
            }
            checkTimeLapse = setInterval(TimeLapseOnPlaying, 1000)
        }
    }

    const mutedVideo = () => {
        setMuted(!muted)
        if (!muted) {
            if (videoPlayer.current) {
                videoPlayer.current.muted = true;
            }
            volumeVideo("0")
        }
        else {
            if (videoPlayer.current) {
                videoPlayer.current.muted = false;
            }
            volumeVideo("100")
        }
    }

    const volumeVideo = (v:string) => {
        let volume : number
        volume = parseInt(v)
        setVolume(volume)
        if (videoPlayer.current) {
            videoPlayer.current.volume = (volume/100)
        }
    }

    let duration = 0
    if (videoPlayer.current) {
        duration = videoPlayer.current.duration
    }

    const HandleTimeLapse = (t:string) => {
        let videotime : number
        videotime = Math.round(parseInt(t))
        setTime(videotime)
        if (videoPlayer.current) {
            videoPlayer.current.currentTime = videotime
        }
    }

    function TimeLapseOnPlaying() {
        if (videoPlayer.current) {
            setTime(Math.round(videoPlayer.current.currentTime))
            if (videoPlayer.current.ended ) {
                setFirstPlay(false)
                clearInterval(checkTimeLapse)
            }
            if (videoPlayer.current.paused ) {
                clearInterval(checkTimeLapse)
            }
        }
    }

    const myDocument = document.documentElement
    const fullScreenVideo = () => {
        setFullScreen(!fullScreen)
        if (!fullScreen) {
            myDocument.requestFullscreen()
            document.body.style.overflow = "hidden";
        }
        else {
            if (document.fullscreenElement) {
                document.exitFullscreen()
            }
            document.body.style.overflow = "auto";
        }  
    }

    useEffect(()=> {
        document.addEventListener("fullscreenchange", function() {
            if (!document.fullscreenElement) {
                setFullScreen(false)
                document.body.style.overflow = "auto";
            }
        });
    },[])


    let mouseMove : ReturnType<typeof setTimeout>
    document.onmousemove = function(){
        clearTimeout(mouseMove);
        mouseMove = setTimeout( () => setShowControls(false), 4000);
    }

    return (
        <>
            <div className={`videoplayer relative ${fullScreen ? 'fullscreen-video' : ''}`} onMouseMove={() => setShowControls(true)}>
                <video width="100%" height="430" ref={videoPlayer} poster={poster} onClick={playVideo}>
                    <source src="/assets/img/video.mp4" type="video/mp4" />
                </video>
                {
                !firstPlay ?
                    <div className="playbutton w-[80px] h-[80px] bg-[#df0f50] hover:opacity-80 rounded-full flex items-center justify-center text-white cursor-pointer absolute top-[50%] right-0 left-0 mx-auto -translate-y-1/2" onClick={firstPlayVideo}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9">
                            <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                        </svg>
                    </div>
                :
                    <div className={`videocontrols absolute bottom-0 w-full  opacity-0 transition ease-linear delay-1000 duration-500 ${showControls && ' !opacity-100 !delay-0 !duration-0'}`}>
                        <div className="flex justify-center w-[calc(100%-30px)] mx-auto mb-2">
                            <input type="range" min="0" max={duration} step="1" value={time} onChange={(e) => HandleTimeLapse(e.target.value)} className="range timelapse h-[5px]" 
                                style={{background: `-webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${time/duration}, rgb(223, 15, 80)), color-stop(${time/duration}, rgba(255, 255, 255 , 0.3)))`}}/>
                        </div>
                        <div className="flex items-center justify-between bg-black bg-opacity-80 p-2">
                            <div className="controls-right flex items-center gap-2 flex-row-reverse">
                                {
                                !fullScreen ?
                                    <div className="w-[30px] h-[30px] bg-white bg-opacity-0  hover:bg-opacity-10 rounded-full flex items-center justify-center text-white cursor-pointer" onClick={fullScreenVideo}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                                        </svg>
                                    </div>
                                :
                                    <div className="w-[30px] h-[30px] bg-white bg-opacity-0  hover:bg-opacity-10 rounded-full flex items-center justify-center text-white cursor-pointer" onClick={fullScreenVideo}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" />
                                        </svg>

                                    </div>
                                }
                            </div>

                            <div className="controls-left flex items-center gap-2 flex-row-reverse">
                                {
                                !play ?
                                    <div className="w-[30px] h-[30px] bg-white bg-opacity-0  hover:bg-opacity-10 rounded-full flex items-center justify-center text-white cursor-pointer" onClick={playVideo}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                            <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                :
                                    <div className="w-[30px] h-[30px] bg-white bg-opacity-0  hover:bg-opacity-10 rounded-full flex items-center justify-center text-white cursor-pointer" onClick={playVideo}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                                        </svg>
                                    </div>
                                }

                                {
                                !muted ?
                                    <div className="w-[30px] h-[30px] bg-white bg-opacity-0  hover:bg-opacity-10 rounded-full flex items-center justify-center text-white cursor-pointer" onClick={mutedVideo}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                                        </svg>

                                    </div>
                                :
                                    <div className="w-[30px] h-[30px] bg-white bg-opacity-0  hover:bg-opacity-10 rounded-full flex items-center justify-center text-white cursor-pointer" onClick={mutedVideo}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                                        </svg>
                                    </div>
                                }

                                <div className="w-[70px] flex">
                                    <input type="range" min="0" max="100" value={volume} onChange={(e) => volumeVideo(e.target.value)} className="range h-[2px]" 
                                    style={{background: `-webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${volume/100}, rgb(223, 15, 80)), color-stop(${volume/100}, rgba(255, 255, 255 , 0.3)))`}}/>
                                </div>
                                
                                <div className="text-white text-[10px] ml-3">
                                    { Math.round(duration)} / {Math.round(time)}
                                </div>

                            </div>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

export default VideoPlayer