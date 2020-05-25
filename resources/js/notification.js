const holder = document.getElementById("btn-holder");
const notif = document.getElementById("notification");
let show = false;

class Attach {
  constructor(holderID, contentID, options) {
    this.show = false;
    this.holder = document.querySelector(holderID);
    this.content = document.querySelector(contentID);
    this.options = options;
    window.addEventListener("resize", this.curretWindowSize);
  }

  setContentPos() {
    const holderBound = this.holder.getBoundingClientRect();
    const contentBound = this.content.getBoundingClientRect();

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

  currentWindowSize() {
    this.setContentPos();
  }

  showContent() {
    this.show = !this.show;
    this.setContentPos();
  }
}

const attach = new Attach("#btn-holder", "#notification");

document.getElementById("btn-holder").addEventListener("click", () => {
  attach.showContent();
});
