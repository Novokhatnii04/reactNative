import * as React from "react";
import Svg, { G, Rect, Path } from "react-native-svg";
const SvgComponent = (props : any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={44}
    height={44}
    fill="none"
    {...props}
  >
    <G opacity={0.64}>
      <Rect width={44} height={44} fill="#77CDD9" rx={22} />
      <Path
        fill="#fff"
        stroke="#fff"
        strokeWidth={1.375}
        d="M11.917 15.997c0-.367.297-.664.664-.664h3.24v4.217a.664.664 0 0 1-.663.664H12.58a.664.664 0 0 1-.664-.664v-3.553Z"
      />
      <Path
        stroke="#fff"
        strokeWidth={1.375}
        d="m30.093 17.584-2.413-2.09a.664.664 0 0 0-.435-.161H15.821v3.417H29.66c.615 0 .9-.764.434-1.166Z"
      />
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth={1.375}
        d="M22.538 31.167V19.218M18.555 31.167V19.218"
        opacity={0.8}
      />
      <Rect
        width={5.31}
        height={5.31}
        x={24.529}
        y={25.856}
        fill="#fff"
        opacity={0.8}
        rx={0.917}
      />
      <Path
        stroke="#77CDD9"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={0.917}
        d="M26.852 28.512h.664"
      />
      <Rect
        width={3.905}
        height={1.952}
        x={25.193}
        y={21.678}
        fill="#fff"
        stroke="#fff"
        strokeWidth={1.375}
        rx={0.976}
      />
      <Path stroke="#fff" strokeWidth={1.375} d="M27.145 21.19v-2.197" />
      <Path
        stroke="#fff"
        strokeWidth={1.375}
        d="m15.822 15.333 2.929-2.93a.664.664 0 0 1 .956.018l2.704 2.912"
        opacity={0.8}
      />
    </G>
  </Svg>
);
export default SvgComponent;
