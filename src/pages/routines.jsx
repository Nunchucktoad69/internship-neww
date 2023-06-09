import { useEffect } from "react";
import AppLayout from "src/components/layout";
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

  return (
    <AppLayout>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </AppLayout>
  );
}
