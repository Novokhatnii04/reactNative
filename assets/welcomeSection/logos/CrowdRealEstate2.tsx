import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";
const SvgComponent = (props : any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <Rect width={48} height={48} fill="#F7D16D" rx={24} />
    <Rect width={48} height={48} fill="#F7D16D" rx={24} />
    <Rect width={48} height={48} fill="#5AA5FA" rx={24} />
    <Path
      fill="#C2DEFF"
      d="M15.5 22.205V33a.5.5 0 0 0 .5.5h5.5a1 1 0 0 0 1-1V20.419a1 1 0 0 0-1.336-.942l-5 1.786a1 1 0 0 0-.664.942ZM33.5 22.205V33a.5.5 0 0 1-.5.5h-5.5a1 1 0 0 1-1-1V20.419a1 1 0 0 1 1.336-.942l5 1.786a1 1 0 0 1 .664.942Z"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M29.536 29.784h.75M29.536 25.116h.75M18.748 30.084h-.75"
    />
    <Path
      fill="#fff"
      d="M27.601 32.684V14.816a.483.483 0 0 0-.483-.483h-5.8a.483.483 0 0 0-.484.483v17.868"
    />
    <Path
      stroke="#5AA5FA"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M24.001 18.25h.75"
    />
    <Path
      stroke="#C2DEFF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M24.001 25.334h.75M24.001 30.084h.75"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M34 33.334H14"
    />
  </Svg>
);
export default SvgComponent;
