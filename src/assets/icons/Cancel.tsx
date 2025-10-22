import * as React from "react";
import Svg, { Path } from "react-native-svg";
import IconProps from "./IconProps";

const CancelSvg: React.FC<IconProps> = ({ 
  width, 
  height, 
  size = 20, 
  color = "#000" 
}) => (
  <Svg width={width || size} height={height || size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M18 6L6 18"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M6 6L18 18"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default CancelSvg;