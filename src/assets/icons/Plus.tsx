import * as React from "react";
import Svg, { Path } from "react-native-svg";
import IconProps from "./IconProps";

const PlusSvg: React.FC<IconProps> = ({ 
  width, 
  height, 
  size = 20,
  color = "#fff" 
}) => (
  <Svg width={width || size} height={height || size} viewBox="0 0 20 20" fill="none">
    <Path
      d="M15.8332 10.8333H10.8332V15.8333C10.8332 16.2916 10.4582 16.6666 9.99984 16.6666C9.5415 16.6666 9.1665 16.2916 9.1665 15.8333V10.8333H4.1665C3.70817 10.8333 3.33317 10.4583 3.33317 9.99998C3.33317 9.54165 3.70817 9.16665 4.1665 9.16665H9.1665V4.16665C9.1665 3.70831 9.5415 3.33331 9.99984 3.33331C10.4582 3.33331 10.8332 3.70831 10.8332 4.16665V9.16665H15.8332C16.2915 9.16665 16.6665 9.54165 16.6665 9.99998C16.6665 10.4583 16.2915 10.8333 15.8332 10.8333Z"
      fill={color}
    />
  </Svg>
);

export default PlusSvg;