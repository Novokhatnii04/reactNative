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
    <Rect width={48} height={48} fill="#CB9655" rx={24} />
    <Path
      fill="#fff"
      d="M26.382 15.5h-4.764a1 1 0 0 0-.894.553l-2.5 5a1 1 0 0 0 .894 1.447h9.764a1 1 0 0 0 .894-1.447l-2.5-5a1 1 0 0 0-.894-.553ZM19.382 25h-4.764a1 1 0 0 0-.894.553l-2.5 5A1 1 0 0 0 12.118 32h9.764a1 1 0 0 0 .894-1.447l-2.5-5a1 1 0 0 0-.894-.553ZM33.382 25h-4.764a1 1 0 0 0-.894.553l-2.5 5A1 1 0 0 0 26.118 32h9.764a1 1 0 0 0 .894-1.447l-2.5-5a1 1 0 0 0-.894-.553Z"
    />
  </Svg>
);
export default SvgComponent;
