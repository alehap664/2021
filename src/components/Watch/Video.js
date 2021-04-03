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

  const [video, setVideo] = useState(null);
  const [seek, setSeek] = useState(null);
  const [volume, setVolume] = useState(null);

  const [videoDuration, setVideoDuration] = useState({
    hour: "00", min: "00", sec: "00"
  });
  const [videoCurrentTime, setVideoCurrentTime] = useState({
    hour: "00", min: "00", sec: "00"
  });
  const [videoITag, setVideoITag] = useState("_18");
  const [volumeState, setVolumeState] = useState("");
  const [isPlay, setIsPlay] = useState(false);
  const [isThumb, setIsThumb] = useState(true);

  const iTag = {
    "_18": "360p",
    "_22": "720p",
    "_37": "1080p",
  }

  const [saveCurrentTime, setSaveCurrentTime] = useState(0)

  const videoFormatTime = second => {
    const time = new Date(second*1000).toISOString().substr(11, 8);
    const strToArr = time.split(":")
    return{
      hour: strToArr[0],
      min: strToArr[1],
      sec: strToArr[2],
    }
  }

  const duration = (video) => Math.ceil(video.duration);
  const currentTime = (video) => Math.ceil(video.currentTime);

  const loadedMetadata = e => {
    const video = $("#video");
    const seek = $("#seek");
    const volume = $("#volume");

    const videoDuration = Math.ceil(video.duration);
    seek.value = 0;
    seek.max = videoDuration;
    video.currentTime = saveCurrentTime;

    setVideo(video);
    setSeek(seek);
    setVolume(volume);

    setIsPlay(false);
    
    setVideoDuration(videoFormatTime(duration(video)))
  }

  const playBack = () => {
    if (video.paused){
      video.play();
      setIsPlay(true);
    } else{
      video.pause();
      setIsPlay(false);
    }
  };

  const timeUpdate = () =>{
    seek.value = currentTime(video);
    setVideoCurrentTime(videoFormatTime(currentTime(video)));

    video.currentTime === 0 ? setIsThumb(true) : setIsThumb(false)
  }

  const skip = () => {
    const time = seek.value;
    video.currentTime = time;
  }

  const volumeControls = () => {
    const volumeValue = +volume.value;

    video.volume = volumeValue;
    volume.dataset.volume = volumeValue;
  }

  const volumeUpdate = () => {
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

  const volumeMuted = () => {
    video.muted = !video.muted;
    if (video.muted) return volume.value = 0;
    volume.value = volume.dataset.volume;
  }

  const videoFullScreen = () => {
    const videoContainer = $(".video__wrap");
    if (document.fullscreenElement) return document.exitFullscreen();
    videoContainer.requestFullscreen();
  }

  const videoResolution = (itag) => {
    setVideoITag(itag)
    setSaveCurrentTime(currentTime(video));
  }

  const videoPip = async () => {
    try {
      if (video !== document.pictureInPictureElement) {
        await video.requestPictureInPicture();
      } else {
        await document.exitPictureInPicture();
      }
    } catch (error) {
      console.error(error)
    } 
  }

  const toggleSetting = () => {
    const settingContainer = $(".video__setting--container");
    settingContainer.classList.toggle("--open")
  }

  return (
    <div className="video__wrap">
      <div id="video__controls">

        <input type="range" id="seek" min="0" max="100" data-currenttime="0" onInput={skip} />

        <button className="video__play" onClick={playBack} >
          {isPlay ? <IoIosPause /> : <IoIosPlay /> }
        </button>

        <button onClick={volumeMuted}>
          {volumeState === 'muted' ? <IoIosVolumeMute /> : volumeState === 'low' ? <IoIosVolumeLow /> : <IoIosVolumeHigh />  }
        </button>
        <input 
          type="range" id="volume" min="0" max="1" step="0.1" 
          data-volume="0" data-volumestate={volumeState}
          onInput={volumeControls}
        />

        <span className="video__time_elapsed">
          {`${videoCurrentTime.min}:${videoCurrentTime.sec}`}
          -
          {`${videoDuration.min}:${videoDuration.sec}`}

        </span>

        <button className="video__pip" onClick={videoPip}>
          <FaShareSquare />
        </button>

        
        <div className="video__setting">
          <button><IoIosSettings onClick={toggleSetting} /></button>
          <div className="video__setting--container">
            <div className="video__quality">
              {
                Object.keys(src).reverse().map( (ele, i) => (
                  <li key={i} onClick={() => videoResolution(ele)}>
                    <input type="radio" name="quality" id={ele} value={ele} />
                    <label htmlFor={ele}>{iTag[ele]}</label>
                  </li>
                ))
              }
            </div>
          </div>
        </div>

        <button onClick={videoFullScreen}><MdFullscreen /></button>

      </div>
      <video 
        id="video"
        className="d-flex align-items-start"
        src={src[videoITag]} width="100%"
        onTimeUpdate={timeUpdate}
        onLoadedMetadata={loadedMetadata}
        onVolumeChange={volumeUpdate}
        >
      </video>

      <div className="video__thumb"
        style={{
          background: `url(${thumb}) center center / contain no-repeat`,
          display: `${isThumb ? "block" : "none"}`
        }}
      ></div>
    </div>
  )
}

export default Video
