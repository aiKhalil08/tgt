import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";
import IconProps from "./IconProps";

const ChevronLeftSvg: React.FC<IconProps> = ({ 
  width, 
  height, 
  size = 20,
  color = "#000" 
}) => (
  <Svg width={width || size} height={height || size} viewBox="0 0 24 24" fill="none">
    <G clipPath="url(#clip0_293_1728)">
      <Path
        d="M15.0001 20.4201L8.48009 13.9001C7.71009 13.1301 7.71009 11.8701 8.48009 11.1001L15.0001 4.58008"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_293_1728">
        <Rect width="24" height="24" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default ChevronLeftSvg;