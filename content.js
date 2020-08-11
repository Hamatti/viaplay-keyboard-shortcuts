/** Viaplay's player injects the controls as DOM elements when mouse moves so we need to trigger that */
const showUI = () => {
  document
    .querySelector(".scene")
    .dispatchEvent(new Event("mousemove", { bubbles: true }));
};

/** Listen to user pressing a button in the keyboard */
document.addEventListener("keyup", (event) => {
  event.preventDefault();

  /* If it's m, we want to mute/unmute */
  if (event.key === "m") {
    document.querySelector(".scene").click();
    setTimeout(() => {
      showUI();
      const muteButton = document.querySelector(".audio-control");
      muteButton.click();
    }, 20);
  }

  /* If it's f, we want to toggle fullscreen */
  if (event.key === "f") {
    document.querySelector(".scene").click();
    setTimeout(() => {
      showUI();

      const fullscreen = document.querySelector(".fullscreen");
      if (fullscreen) {
        fullscreen.click();
      } else {
        document.querySelector(".no-fullscreen").click();
      }
    }, 10);
  }

  return false;
});
