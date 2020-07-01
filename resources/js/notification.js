const holder = document.getElementById("btn-holder");
const notif = document.getElementById("notification");
let show = false;

class Attach {
  constructor(holderID, contentID, options) {
    this.show = false;
    this.holder = document.querySelector(holderID);
    this.content = document.querySelector(contentID);
    this.options = options;
    this.attachRemove();
    this.attachListener();
  }

  attachRemove() {
    const self = this;
    window.addEventListener("click", () => {
      self.hideContent();
    });
  }

  attachListener() {
    const self = this;
    window.addEventListener("resize", () => {
      setTimeout(() => self.currentWindowSize(), 100);
    });
  }

  currentWindowSize() {
    this.setContentPos();
  }

  autoContent() {
    this.show = !this.show;
    this.setContentPos();
  }

  hideContent() {
    if (this.show) {
      this.show = false;
      this.setContentPos();
    }
  }

  showContent() {
    this.show = true;
    this.setContentPos();
  }

  setContentPos() {
    const holderBound = this.holder.getBoundingClientRect();
    const contentBound = this.content.getBoundingClientRect();
    console.log("hello world");
    this.content.setAttribute(
      "style",
      `visibility: ${this.show ? "visible" : "hidden"} !important; opacity: ${
      this.show ? 1 : 0
      } !important; top: ${Math.floor(
        holderBound.y + holderBound.height
      )}px !important; left: ${Math.floor(
        holderBound.right - contentBound.width
      )}px !important; `
    );
  }

  destroy() {
    window.removeEventListener("resize");
  }
}

const attach = new Attach("#btn-holder", "#notification");

document.getElementById("btn-holder").addEventListener("click", (e) => {
  attach.autoContent();
  e.stopPropagation();
});

// attach.autoContent();
