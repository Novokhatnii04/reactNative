import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";
const SvgComponent = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={44}
    height={44}
    fill="none"
    {...props}
  >
    <Rect width={44} height={44} fill="#06070A" rx={22} />
    <Path
      fill="#fff"
      d="M19.25 14.801V10.59h5.232v4.212H19.25Zm0 19.116V16.654h5.232V33.91l-5.232.007Z"
    />
  </Svg>
);
export default SvgComponent;
