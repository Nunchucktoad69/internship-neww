import { useEffect } from "react";
import html from "src/components/bmi";
import bmiStyles from "src/styles/bmi.styles";

let isStyled = false;

export default function BMIRoute() {
  useEffect(() => {
    if (isStyled) return;

    const style = document.createElement("style");
    style.innerHTML = bmiStyles;
    isStyled = true;

    document.head.appendChild(style);
  }, []);

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
      <script src="/bmi-script.js"></script>
    </>
  );
}
