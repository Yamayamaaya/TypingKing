import { css } from "@emotion/react";

export const slideUpFadeOut = css`
  @keyframes slideUpFadeOut {
    0% {
      transform: translateY(-40px);
      opacity: 1;
    }
    70% {
      transform: translateY(-70px);
      opacity: 1;
    }
    100% {
      transform: translateY(-100px);
      opacity: 0;
    }
  }
`;

export const scaleUpFadeOut = css`
  @keyframes scaleUpFadeOut {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    70% {
      transform: scale(2);
      opacity: 1;
    }
    100% {
      transform: scale(3);
      opacity: 0;
    }
  }
`;
