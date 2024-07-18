import * as React from "react";
import Svg, { G, Rect, Path } from "react-native-svg";
const SvgComponent = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={44}
    height={44}
    fill="none"
    {...props}
  >
    <G opacity={0.63}>
      <Rect width={44} height={44} fill="#F7D16D" rx={22} />
      <Path
        fill="#606773"
        d="M29.677 23.869c0-6.723-7.47-11.952-7.47-11.952s-7.47 5.229-7.47 11.952a7.47 7.47 0 0 0 14.94 0Z"
      />
      <Path
        stroke="#C1C4CB"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.375}
        d="M26.69 23.869a4.482 4.482 0 0 1-4.483 4.482"
      />
    </G>
  </Svg>
);
export default SvgComponent;
