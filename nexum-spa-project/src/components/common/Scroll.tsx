window.onscroll = function () {
  const element = document.querySelector(".to-top");
  const sideNav = (document.querySelector(".sideNav") as HTMLElement) || null;

  let sideNavPosition: number = Math.ceil(sideNav.getBoundingClientRect().top);
  let windowPageOffset = Math.ceil(window.pageYOffset);

  // Makes the NAVBAR position fixed
  makeNavFixed(sideNavPosition, windowPageOffset, sideNav);
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

const makeNavFixed = (
  navPosition: number,
  windowPageOffset: number,
  e: HTMLElement
) => {
  if (navPosition <= 0 && windowPageOffset > 80) {
    return e.classList.add("sticky");
  }

  return e.classList.remove("sticky");
};
