import React from 'react';
import { SvgDesplegarStyle } from './HeaderCss';

const SvgMenu = ({size}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 32 32"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
  >
    <path
      d="M14.83 19.25v8.67A2.08 2.08 0 0 1 12.75 30H4.08A2.08 2.08 0 0 1 2 27.92v-8.67a2.08 2.08 0 0 1 2.08-2.08h8.67a2.08 2.08 0 0 1 2.08 2.08zM12.75 2H4.08A2.08 2.08 0 0 0 2 4.08v8.67a2.08 2.08 0 0 0 2.08 2.08h8.67a2.08 2.08 0 0 0 2.08-2.08V4.08A2.08 2.08 0 0 0 12.75 2zm15.17 0h-8.67a2.08 2.08 0 0 0-2.08 2.08v8.67a2.08 2.08 0 0 0 2.08 2.08h8.67A2.08 2.08 0 0 0 30 12.75V4.08A2.08 2.08 0 0 0 27.92 2zm0 15.17h-8.67a2.08 2.08 0 0 0-2.08 2.08v8.67A2.08 2.08 0 0 0 19.25 30h8.67A2.08 2.08 0 0 0 30 27.92v-8.67a2.08 2.08 0 0 0-2.08-2.08z"
      data-original="#000000"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 5"
    />
  </svg>
);

const SvgCloseMenu = ({size}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 365.696 365.696"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M243.188 182.86 356.32 69.726c12.5-12.5 12.5-32.766 0-45.247L341.238 9.398c-12.504-12.503-32.77-12.503-45.25 0L182.86 122.528 69.727 9.374c-12.5-12.5-32.766-12.5-45.247 0L9.375 24.457c-12.5 12.504-12.5 32.77 0 45.25l113.152 113.152L9.398 295.99c-12.503 12.503-12.503 32.769 0 45.25L24.48 356.32c12.5 12.5 32.766 12.5 45.247 0l113.132-113.132L295.99 356.32c12.503 12.5 32.769 12.5 45.25 0l15.081-15.082c12.5-12.504 12.5-32.77 0-45.25zm0 0"
      data-original="#000000"
    />
  </svg>
)

const SvgDesplegar = ({size,open}) => (
  <SvgDesplegarStyle
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 128 128"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    open={open}
  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="m64 92.5 50-50-7.1-7.1-17.1 17.2L64 78.4 38.2 52.6 21.1 35.5 14 42.6z"
      data-original="#000000"
    />
  </SvgDesplegarStyle>
)

export {SvgMenu,SvgCloseMenu,SvgDesplegar};