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
      <Rect width={44} height={44} fill="#617DEA" rx={22} />
      <Rect width={44} height={44} fill="#49C1B5" rx={22} />
      <Path
        fill="#fff"
        d="M24.05 18.945v-2.472h5.652v-3.765h-15.39v3.765h5.653v2.47c-4.594.21-8.048 1.12-8.048 2.21 0 1.09 3.456 2 8.048 2.212v7.917h4.086v-7.917c4.586-.212 8.033-1.121 8.033-2.21s-3.447-1.998-8.033-2.21Zm.001 3.75v-.003c-.115.007-.707.043-2.026.043-1.055 0-1.797-.03-2.058-.044v.004c-4.059-.18-7.088-.887-7.088-1.732 0-.846 3.03-1.552 7.088-1.732v2.76a31.49 31.49 0 0 0 2.075.063c1.26 0 1.894-.053 2.01-.063v-2.76c4.05.18 7.073.888 7.073 1.73 0 .843-3.024 1.551-7.073 1.731"
      />
    </G>
  </Svg>
);
export default SvgComponent;
