import * as React from "react";
import Svg, { G, Path, Circle, Defs, ClipPath, Rect } from "react-native-svg";
import IconProps from "./IconProps";

const MessagesSvg: React.FC<IconProps> = ({ 
  width, 
  height,
  size = 20, 
  color = "#000", 
}) => (
  <Svg width={width || size} height={height || size} viewBox="0 0 28 26" fill="none">
    <G clipPath="url(#clip0_1_1451)">
      <Path
        d="M17.375 4C20.1364 4 22.375 6.23858 22.375 9V19C22.375 21.7614 20.1364 24 17.375 24H7.375C4.61358 24 2.375 21.7614 2.375 19V9C2.375 6.23858 4.61358 4 7.375 4H17.375ZM7.59766 6.22266C5.9408 6.22266 4.59766 7.5658 4.59766 9.22266V14.334C4.59802 15.9905 5.94103 17.334 7.59766 17.334H9.04199L9.04688 17.5049C9.13616 19.266 10.5918 20.6668 12.375 20.667C14.1582 20.6668 15.6148 19.266 15.7041 17.5049L15.709 17.334H17.1533C18.8097 17.3337 20.153 15.9903 20.1533 14.334V9.22266C20.1533 7.56598 18.8099 6.22295 17.1533 6.22266H7.59766Z"
        fill={color}
      />
    </G>
    <Circle cx="21.375" cy="6" r="6" fill="white" />
    <Circle cx="21.375" cy="6" r="4" fill="#F98600" />
    <Defs>
      <ClipPath id="clip0_1_1451">
        <Rect width="24" height="24" fill="white" transform="translate(0.375 2)" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default MessagesSvg;