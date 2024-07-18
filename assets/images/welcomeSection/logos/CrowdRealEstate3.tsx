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
      <Rect width={44} height={44} fill="#565ED1" rx={22} />
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth={1.375}
        d="m11.917 20.918 9.025-7.593a.915.915 0 0 1 1.173-.005l9.174 7.598"
      />
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth={1.375}
        d="M29.61 19.544v9.61c0 .506-.409.915-.914.915H26.31"
      />
      <Path
        fill="#fff"
        stroke="#fff"
        strokeWidth={1.375}
        d="M22.503 29.154v-4.191a.915.915 0 0 0-.274-.654l-2.82-2.768a.915.915 0 0 0-1.282 0l-2.82 2.768a.915.915 0 0 0-.274.654v4.191c0 .506.41.916.916.916h5.639c.505 0 .915-.41.915-.916Z"
      />
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth={1.375}
        d="m13.291 25.493 4.996-4.592a.915.915 0 0 1 1.267.027l4.564 4.565"
      />
    </G>
  </Svg>
);
export default SvgComponent;
