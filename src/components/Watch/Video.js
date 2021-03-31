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

const Video = ({src}) => {
  const $ = document.querySelector.bind(document);
  const $$ = document.querySelectorAll.bind(document);

  const [videoDuration, setVideoDuration] = useState({});
  const [videoCurrentTime, setVideoCurrentTime] = useState({});

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

    video.paused ? video.play() : video.pause()
    // video.play();
  }

  const timeUpdate = e =>{
    const video = $("#video");
    const seek = $("#seek");

    const videoCurrentTime = Math.ceil(video.currentTime);
    seek.value = videoCurrentTime;
    setVideoCurrentTime(formatTime(videoCurrentTime))
  }

  const loadedMetadata = e => {
    console.log("Loaded");
    const video = $("#video");
    const seek = $("#seek");

    const videoDuration = Math.ceil(video.duration);
    seek.max = videoDuration;
    setVideoDuration(formatTime(videoDuration))
  }

  const change = e => {
    const video = $("#video");
    video.pause();

    const time = e.target.value;

    video.currentTime = time;
    video.play();
    console.log(1);
  }

  return (
    <div className="video__wrap">
      <div id="video__controls">
        <div className="video__seek">
          <button className="video__play" onClick={playBack}>
            <IoIosPlay />
            {/* <IoIosPause /> */}
          </button>
          <input type="range" name="" id="seek" min="0" max="100" onChange={change} />
          <span className="video__time_elapsed">
            {`${videoCurrentTime?.min || "00"}:${videoCurrentTime?.sec || "00"}`}
            -
            {`${videoDuration?.min || "00"}:${videoDuration?.sec || "00"}`}
          </span>
        </div>

        <div className="video__vol">
          <button><IoIosVolumeHigh /></button>
          <input type="range" name="" id="" min="0" max="100" value="0" />
        </div>

        <button className="video__pic_in_pic"><FaShareSquare /></button>
        <button><IoIosSettings /></button>
        <button><MdFullscreen /></button>
      </div>
      <video 
        id="video"
        className="d-flex align-items-start mb-5"
        src={src} width="100%"
        onTimeUpdate={timeUpdate}
        onLoadedMetadata={loadedMetadata}
        >
        </video>
    </div>
  )
}

export default Video
