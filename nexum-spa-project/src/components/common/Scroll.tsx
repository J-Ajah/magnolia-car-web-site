if (typeof window !== "undefined") {
  window.onscroll = function () {
    const element = document.querySelector(".to-top");
    const sideNav =
      (document?.querySelector(".sideNav") as HTMLElement) || null;
    const sidebarContainer =
      (document?.querySelector(".sidebarContainer") as HTMLElement) || null;

    let sideNavPosition: number = Math?.ceil(
      sideNav?.getBoundingClientRect().top
    );
    let windowPageOffset = Math.ceil(window.scrollY);

    // Style setting for the Editable Area
    if (window.location.search.includes("mgnlPreview")) {
      console.log("Here I am", window.scrollY);
      let navPosition: number = Math?.ceil(
        sidebarContainer?.getBoundingClientRect().top
      );
      let pageOffset = Math.ceil(window.scrollY);
      console.log(pageOffset);
      makeNavFixed(navPosition, pageOffset, sidebarContainer);
    }

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
}

export default function Scroll() {
  return null;
}

const makeNavFixed = (
  navPosition: number,
  windowPageOffset: number,
  e: HTMLElement
) => {
  if (navPosition <= 0 && windowPageOffset > 80) {
    return e?.classList.add("sticky");
  }

  return e?.classList.remove("sticky");
};
