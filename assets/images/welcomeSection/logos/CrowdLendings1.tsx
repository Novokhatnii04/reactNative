import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
const SvgComponent = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={44}
    height={44}
    fill="none"
    {...props}
  >
    <Circle cx={22} cy={22} r={22} fill="#00B28C" opacity={0.4} />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.467}
      d="m15.583 29.333.098-.628c.176-1.13.855-2.13 1.922-2.542 1.194-.462 2.917-.966 4.75-.966 1.832 0 3.555.504 4.749.966 1.067.413 1.746 1.411 1.922 2.542l.098.628M22.353 22.188a3.76 3.76 0 1 0 0-7.521 3.76 3.76 0 0 0 0 7.521Z"
    />
  </Svg>
);
export default SvgComponent;
