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
      <Rect width={44} height={44} fill="#617DEA" rx={22} />
      <Path
        fill="#fff"
        fillOpacity={0.602}
        d="M21.71 9.167v9.15l7.733 3.456L21.71 9.167Z"
      />
      <Path fill="#fff" d="m21.713 9.167-7.734 12.606 7.734-3.456v-9.15Z" />
      <Path
        fill="#fff"
        fillOpacity={0.602}
        d="M21.71 27.7v6.217l7.738-10.707-7.738 4.49Z"
      />
      <Path fill="#fff" d="M21.713 33.917v-6.218l-7.734-4.489 7.734 10.707Z" />
      <Path
        fill="#fff"
        fillOpacity={0.2}
        d="m21.71 26.26 7.733-4.488-7.733-3.456v7.945Z"
      />
      <Path
        fill="#fff"
        fillOpacity={0.602}
        d="m13.98 21.772 7.733 4.489v-7.945l-7.734 3.456Z"
      />
    </G>
  </Svg>
);
export default SvgComponent;
