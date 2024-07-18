import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
const SvgComponent = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <Circle cx={24} cy={24} r={24} fill="#FA8A34" />
    <Path
      fill="#fff"
      d="M33.754 25.63h-.123l-8.923 1.724-3.077-1.23 4.061-1.047c.493-.123.862-.554.862-1.046s-.43-.985-.985-1.046l-3.692.061a3.59 3.59 0 0 1-1.6-.37c-.923-.43-1.785-.676-2.585-.676-.615 0-1.292.123-1.723.308-.417.208-1.1.726-1.672 1.142a.713.713 0 0 0-.297.576v4.94a1 1 0 0 0 .838.987l9.624 1.585c.123.062.43.062.553.062.37 0 .677-.062.985-.185l8.246-3.63c.554-.247.8-.862.615-1.416a1.216 1.216 0 0 0-1.107-.738Z"
    />
    <Circle
      cx={28.5}
      cy={18.5}
      r={2.8}
      fill="#fff"
      stroke="#6ED4BE"
      strokeWidth={0.6}
    />
  </Svg>
);
export default SvgComponent;
