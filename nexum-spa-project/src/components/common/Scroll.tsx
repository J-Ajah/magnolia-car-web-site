window.onscroll = function () {
  const element = document.querySelector(".to-top");
  if (
    window.innerHeight + Math.ceil(window.scrollY) >=
    document.body.offsetHeight - 400
  ) {
    element?.classList.remove("hide");
    return;
  }

  element?.classList.add("hide");
};

export default function Scroll() {
  return null;
}
