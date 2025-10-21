import * as React from "react";
import Svg, { Path } from "react-native-svg";
import IconProps from "./IconProps";

const ClockSvg: React.FC<IconProps> = ({ 
  width, 
  height, 
  size = 20,
  color = "#000" 
}) => (
  <Svg width={width || size} height={height || size} viewBox="0 0 20 20" fill="none">
    <Path
      d="M10 2.50049C5.85937 2.50049 2.5 5.85986 2.5 10.0005C2.5 14.1411 5.85937 17.5005 10 17.5005C14.1406 17.5005 17.5 14.1411 17.5 10.0005C17.5 5.85986 14.1406 2.50049 10 2.50049Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
    <Path
      d="M10 5.00146V10.6265H13.75"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default ClockSvg;