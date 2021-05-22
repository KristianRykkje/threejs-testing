import emotionReset from "emotion-reset";
import { Global, css } from "@emotion/react";

export const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        ${emotionReset}
        body {
          height: 100vh;
          background: #fff;
          color: #1c1e21;
          direction: ltr;
          line-height: 1.34;
          unicode-bidi: embed;

          * {
            box-sizing: border-box;
          }
        }
      `}
    />
  );
};
