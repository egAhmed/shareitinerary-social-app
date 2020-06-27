const feedContainer = document.querySelector(".feed-container");
const storyContainer = document.querySelector(".list--stories");

const listenFeed = (e) => {
  const storyBound = feedContainer.getBoundingClientRect();

  const feedWidth = parseInt(storyBound.width - 15 * 2) + "px";
  console.log();

  storyContainer.setAttribute(
    "style",
    `width:${feedWidth}; min-width: ${feedWidth}; overflow: hidden;`
  );
};
window.addEventListener("resize", listenFeed);

listenFeed();
