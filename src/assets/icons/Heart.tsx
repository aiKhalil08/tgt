import * as React from "react";
import Svg, { Path } from "react-native-svg";
import IconProps from "./IconProps";

const HeartSvg: React.FC<IconProps> = ({ 
  width, 
  height, 
  size = 20,
  color = "#fff" 
}) => (
  <Svg width={width || size} height={height || size} viewBox="0 0 20 20" fill="none">
    <Path
      d="M10.0001 17.5L8.79175 16.4083C4.70008 12.7167 2.08341 10.3417 2.08341 7.49998C2.08341 5.12498 3.95841 3.24998 6.33341 3.24998C7.70008 3.24998 9.01675 3.89165 10.0001 4.90831C10.9834 3.89165 12.3001 3.24998 13.6667 3.24998C16.0417 3.24998 17.9167 5.12498 17.9167 7.49998C17.9167 10.3417 15.3001 12.7167 11.2084 16.4167L10.0001 17.5Z"
      fill={color}
    />
  </Svg>
);

export default HeartSvg;