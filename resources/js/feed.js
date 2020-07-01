const feedContainer = document.querySelector(".feed-container");
const sectionContainer = document.querySelector(".section--stories");
const storyContainer = document.querySelector(".list--stories");

const listenFeed = (e) => {
  const storyBound = feedContainer.getBoundingClientRect();

  console.log(storyBound)
  const padding = {
    left: parseInt($('.list--stories').css('padding-left').replace('px', '')),
    right: parseInt($('.list--stories').css('padding-right').replace('px', ''))
  }

  const width = sectionContainer.offsetWidth + padding.left;

  console.log(storyBound.width, sectionContainer.offsetWidth, width, padding)
  const feedWidth = parseInt(width) + "px";


  console.log()

  storyContainer.setAttribute(
    "style",
    `width:${feedWidth}; min-width: ${feedWidth}; overflow: hidden;`
  );
};

window.addEventListener("resize", listenFeed);

listenFeed();
