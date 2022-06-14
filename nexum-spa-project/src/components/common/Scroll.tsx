import React, { useEffect } from "react";

function onScroll(e) {
  const element = e.target;
  console.log(element)
  if (
    element.documentElement.scrollHeight ===
    window.screenY + window.innerHeight
  ) {
    console.log("Page has been scrolled")
  }
  //   if(element.scrollHeight - element.scrollTop === element.clientHeight){

  //   }
}

window.addEventListener("scroll", onScroll);

export default function Scroll() {
  return null;
}
