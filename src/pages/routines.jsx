import { useEffect } from "react";
import html from "src/components/routines";
import routineStyles from "src/styles/routines.styles";

let isStyled = false;

export default function RoutinesRoute() {
  useEffect(() => {
    if (isStyled) return;

    const style = document.createElement("style");
    style.innerHTML = routineStyles;
    isStyled = true;

    document.head.appendChild(style);
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: html }}></div>;
}
