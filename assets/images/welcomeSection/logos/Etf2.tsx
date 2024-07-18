import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";
const SvgComponent = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <Rect width={48} height={48} fill="#96151D" rx={24} />
    <Path
      fill="#fff"
      d="M12.5 12.039v.244c1.363.334 2.028 2.714 2.028 2.714l5.282 14.727c1.457 4.145 4.193 4.96 4.193 4.96L27.382 36 35.5 12h-6.425v.195c2.329.907 1.459 3.199 1.459 3.199L26.277 29.01 20.52 12.038H12.5Z"
    />
  </Svg>
);
export default SvgComponent;
