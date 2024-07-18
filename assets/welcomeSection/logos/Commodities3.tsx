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
    <G opacity={0.64}>
      <Rect width={44} height={44} fill="#E2ED5C" rx={22} />
      <Path
        fill="#06070A"
        d="M23.41 11.458h-3.748a.917.917 0 0 0-.869.626l-3.3 9.848a.917.917 0 0 0 .87 1.208h2.724c.59 0 1.027.549.893 1.124l-1.727 7.438c-.227.978 1.056 1.557 1.64.74L28.3 20.649a.917.917 0 0 0-.747-1.449H23.08a.917.917 0 0 1-.854-1.248l2.039-5.245a.917.917 0 0 0-.855-1.249Z"
      />
    </G>
  </Svg>
);
export default SvgComponent;
