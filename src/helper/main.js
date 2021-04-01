import axios from "axios";

const Carousel = (() =>{
  const division = carouselWidth => num => carouselWidth / num ;
  const clientWidth = ele => ele.clientWidth;
  const breakPoints = [
    { width: 768, cardToDisplay: 2 },
    { width: 992, cardToDisplay: 3 },
    { width: 1200, cardToDisplay: 4 },
  ]

  let Carousel, BlockWrapElement, Elements, Transition = .7;
  let count = 0;

  const awaitFor = (time) => {
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        resolve(time)
      },time)
    })
  }

  // Private method
  const setCardWidth = (cardWidth) => {
    [...Elements].forEach( ele => {
      ele.style.width = cardWidth + "px";
    });
  }
  const getCardWidth = () => {
    const carouselWidth = clientWidth(Carousel);
    const cardToDisplay = getCardToDisplay();
    return division(carouselWidth)(cardToDisplay);
  }

  const setAnimationFor = (DOMElement, value, time) => {
    DOMElement.style.transform = `translate(-${value}px,0px)`;
    DOMElement.style.transition = `all ease ${time}s`;
  }

  const getCardToDisplay = () => {
    const width = window.innerWidth;
    let flag = true;
    return breakPoints
    .filter( ele => {
      if (width <= ele.width && flag) {
        flag = false;
        return true
      }
      return false;
    })
    .map( ele => ele.cardToDisplay)[0] || 5;
  }

  const getCardQuantity = () => Elements.length / 3;

  const transform = async (cardWidth, time) => {
    const cardQuantity = getCardQuantity();
    let logic = (cardQuantity * cardWidth) + count * cardWidth;
    setAnimationFor(BlockWrapElement, logic, time);

    if (count >= cardQuantity || count <= -cardQuantity) {
      await awaitFor(+Transition*1000);
      count = 0;
      logic = cardQuantity * cardWidth;
      setAnimationFor(BlockWrapElement, logic, 0);
      return
    }
  }
  
  // Public method
  const setCarouselArea = (ele) => {
    Carousel = ele;
  }
  const setBlockWrapElement = (ele) => {
    BlockWrapElement = ele;
  }
  const setElements = (ele) => {
    Elements = ele;
  }
  const setTransition = (ele) => {
    Transition = ele;
  }
  const getIndexSlide = () => {
    return count >= 0 ? count : getCardQuantity() + count;
  }
  const setup = () => {
    const cardWidth = getCardWidth();
    setCardWidth(cardWidth);
    transform(cardWidth, 0);
  }
  const next = (num) => {
    const cardWidth = getCardWidth();
    count += num;
    transform(cardWidth, Transition);
  }

  return {
    setCarouselArea,
    setBlockWrapElement,
    setElements,
    setTransition,
    getIndexSlide,
    setup,
    next
  }
});

// Toggle Tab
const Tab = (() => {
  const $ = document.querySelector.bind(document);
  const $$ = document.querySelectorAll.bind(document);
  let label;

  const setLabel = item => {
    label = item
  }
  return {
    changeTab: (id, label) => {
      const tabLabels = $$(".content__tabs .tab");
      const tabPanels = $$(".tab--panel");
      const panelSelected = $(`.tab--panel#${id}`);
      const labelSelected = $(`.tab#${id}`);
  
      tabLabels.forEach( ele => ele.classList.remove("tab--active"));
      tabPanels.forEach( ele => ele.classList.remove("active"));
  
      labelSelected.classList.add("tab--active");
      panelSelected.classList.add("active");

      setLabel(label)
    },
    dropdownContent: () => {
      const btn = $(".content__mobile--btn");
      const dropdown = $(".content__mobile--dropdown");
      btn.classList.toggle("content__mobile--btn--active");
      dropdown.classList.toggle("content__mobile--dropdown--active")
    },
    getLabel: () => {
      return label;
    }
  }
})()

// Get data
/**
 * 
 * @param {String} url - URL to get data
 * @param {Function} callback - (err, res)
 * @returns res
 */
const getData = (url, callback = null) => {
  return new Promise((resolve, reject) => {
    axios.get(url)
    .then( res => {
      resolve(res);
      if (typeof callback === "function") {
        callback(null, res)
      }
    })
    .catch( res => {
      // console.log(res);
      reject(res);
      if (typeof callback === "function") {
        callback(res, null)
      }
    })
  })
}

const throwErr = err => {
  return `${err.message} ${err.response.data?.error || ""}`
}

const videoController = (() => {
  let VIDEO, SEEK, VOLUME;

  // helper
  const videoFormatTime = second => {
    const time = new Date(second*1000).toISOString().substr(11, 8);
    const strToArr = time.split(":")
    return{
      hour: strToArr[0],
      min: strToArr[1],
      sec: strToArr[2],
    }
  }

  // Set
  const setVideo = video => VIDEO = video;
  const setSeek = seek => VIDEO = seek;
  const setVolume = volume => VIDEO = volume;

  // Get
  const videoIsPlay = () => !VIDEO.paused;
  const videoDuration = () => Math.ceil(VIDEO.duration);
  const videoDurationFormatted = () => {
    const time = videoFormatTime(videoDuration());
    return `${time.hour}:${time.min}:${time.sec}`
  };
  const videoCurrentTime = () => Math.ceil(VIDEO.currentTime);
  
  // Main
  const loadedMetadata = () => {
    SEEK.max = videoDuration()
  }
  const playBack = () => {
    VIDEO.paused ? VIDEO.play() : VIDEO.paused();
  }
  const timeUpdate = () => {
    SEEK.value = videoCurrentTime();
  }

  return{
    // set
    setVideo, setSeek, setVolume,

    // Get
    videoIsPlay,
    videoDuration,
    videoCurrentTime,
    videoDurationFormatted,

    // Main
    playBack
  }
})()

export {
  Carousel, Tab, getData, throwErr, videoController
}