const Carousel = (() =>{
  const division = carouselWidth => num => carouselWidth / num ;
  const clientWidth = ele => ele.clientWidth;
  const breakPoints = [
    { width: 768, cardToDisplay: 2 },
    { width: 992, cardToDisplay: 3 },
    { width: 1200, cardToDisplay: 4 },
  ]

  let Carousel, BlockWrapElement, Elements = null;
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
      await awaitFor(700);
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
    transform(cardWidth, 0.7);
  }

  return {
    setCarouselArea,
    setBlockWrapElement,
    setElements,
    getIndexSlide,
    setup,
    next
  }
})();



export {
  Carousel
}