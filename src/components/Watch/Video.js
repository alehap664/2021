import {useEffect, useState} from 'react';
import { 
  IoIosPlay,
  IoIosPause,
  IoIosVolumeMute,
  IoIosVolumeLow,
  IoIosVolumeHigh,
  IoIosSettings } from 'react-icons/io';
import { FaShareSquare } from 'react-icons/fa';
import { MdFullscreen } from 'react-icons/md';

const Video = ({src, thumb}) => {
  const $ = document.querySelector.bind(document);
  const $$ = document.querySelectorAll.bind(document);

  const [videoDuration, setVideoDuration] = useState({});
  const [videoCurrentTime, setVideoCurrentTime] = useState({});
  const [volumeState, setVolumeState] = useState("");
  const [isPlay, setIsPlay] = useState(false);

  const formatTime = second => {
    const time = new Date(second*1000).toISOString().substr(11, 8);
    const strToArr = time.split(":")
    return{
      hour: strToArr[0],
      min: strToArr[1],
      sec: strToArr[2],
    }
  }

  useEffect(() => {
    const seek = $("#seek");
    seek.value = 0;
  
  }, [])

  const playBack = e => {
    const video = $("#video");
    if (video.paused) {
      video.play();
      setIsPlay(true);
    }
    else{
      video.pause();
      setIsPlay(false)
    }
    
    
  }

  const timeUpdate = e =>{
    const video = $("#video");
    const seek = $("#seek");

    const videoCurrentTime = Math.ceil(video.currentTime);
    seek.value = videoCurrentTime;
    setVideoCurrentTime(formatTime(videoCurrentTime))

    $(".video__thumb").style.display = "none";
    if (video.ended) {
      $(".video__thumb").style.display = "block";
    }
  }

  const loadedMetadata = e => {
    console.log("Loaded");
    const video = $("#video");
    const seek = $("#seek");

    const videoDuration = Math.ceil(video.duration);
    seek.max = videoDuration;
    setVideoDuration(formatTime(videoDuration))
  }

  const seek = e => {
    const video = $("#video");
    // video.pause();

    const time = e.target.value;

    video.currentTime = time;
    // video.play();
    console.log(1);
  }

  const volumeControls = (e) => {
    const video = $("#video");
    const volumeValue = +e.target.value;

    video.volume = volumeValue;
    e.target.dataset.volume = volumeValue;
  }

  const updateVolume = () => {
    const volume = $("#volume");

    switch (true) {
      case +volume.value === 0:
        setVolumeState("muted");
        break;
      case +volume.value > 0 && +volume.value <= 0.5:
        setVolumeState("low");
        break;
      default:
        setVolumeState("hight");
        break;
    }
  }

  const toggleMuted = () => {
    const video = $("#video");
    const volume = $("#volume");

    video.muted = !video.muted;
    if (video.muted) return volume.value = 0;
    volume.value = volume.dataset.volume;
  }

  const toggleFullScreen = () => {
    const videoContainer = $(".video__wrap");

    if (document.fullscreenElement) return document.exitFullscreen();
    videoContainer.requestFullscreen();
  }

  return (
    <div className="video__wrap">
      <div id="video__controls">

        <button className="video__play" onClick={playBack}>
          {isPlay ? <IoIosPause /> : <IoIosPlay /> }
        </button>
        <input type="range" id="seek" min="0" max="100" onChange={seek} />
        <span className="video__time_elapsed">
          {`${videoCurrentTime?.min || "00"}:${videoCurrentTime?.sec || "00"}`}
          -
          {`${videoDuration?.min || "00"}:${videoDuration?.sec || "00"}`}
        </span>

        <button onClick={toggleMuted}>
          {volumeState === 'muted' ? <IoIosVolumeMute /> : volumeState === 'low' ? <IoIosVolumeLow /> : <IoIosVolumeHigh />  }
        </button>
        <input 
          type="range" id="volume" min="0" max="1" step="0.1" 
          data-volume="0" data-volumeState={volumeState}
          onInput={volumeControls}/>

        <button className="video__pic_in_pic">
          <FaShareSquare />
        </button>
        <button><IoIosSettings /></button>
        <button onClick={toggleFullScreen}><MdFullscreen /></button>

      </div>
      <video 
        id="video"
        className="d-flex align-items-start"
        src={src} width="100%"
        onTimeUpdate={timeUpdate}
        onLoadedMetadata={loadedMetadata}
        onVolumeChange={updateVolume}
        >
      </video>

      <div className="video__thumb"
        style={{
          background: `url(${thumb}) center center / contain no-repeat`,
          display: `${isPlay ? "none" : "block"}`
        }}
      ></div>
    </div>
  )
}

export default Video
