import * as React from "react";
import Svg, { Path, Mask, Rect, G } from "react-native-svg";
import IconProps from "./IconProps";

const MoreVerticalSvg: React.FC<IconProps> = ({ 
  width, 
  height, 
  size = 20,
  color = "#000" 
}) => (
  <Svg width={width || size} height={height || size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 17C13.104 17 14 17.896 14 19C14 20.104 13.104 21 12 21C10.896 21 10 20.104 10 19C10 17.896 10.896 17 12 17ZM12 10C13.104 10 14 10.896 14 12C14 13.104 13.104 14 12 14C10.896 14 10 13.104 10 12C10 10.896 10.896 10 12 10ZM12 3C13.104 3 14 3.896 14 5C14 6.104 13.104 7 12 7C10.896 7 10 6.104 10 5C10 3.896 10.896 3 12 3Z"
      fill="#111111"
    />
    <Mask
      id="mask0_185_3217"
      maskUnits="userSpaceOnUse"
      x="10"
      y="3"
      width="4"
      height="18"
    >
      <Path
        d="M12 17C13.104 17 14 17.896 14 19C14 20.104 13.104 21 12 21C10.896 21 10 20.104 10 19C10 17.896 10.896 17 12 17ZM12 10C13.104 10 14 10.896 14 12C14 13.104 13.104 14 12 14C10.896 14 10 13.104 10 12C10 10.896 10.896 10 12 10ZM12 3C13.104 3 14 3.896 14 5C14 6.104 13.104 7 12 7C10.896 7 10 6.104 10 5C10 3.896 10.896 3 12 3Z"
        fill="white"
      />
    </Mask>
    <G mask="url(#mask0_185_3217)">
      <Rect width="24" height="24" fill={color} />
    </G>
  </Svg>
);

export default MoreVerticalSvg;