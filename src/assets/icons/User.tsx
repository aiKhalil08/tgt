import * as React from "react";
import Svg, { Path } from "react-native-svg";
import IconProps from "./IconProps";

const UserSvg: React.FC<IconProps> = ({ 
  width, 
  height, 
  size = 20,
  color = "#000" 
}) => (
  <Svg width={width || size} height={height || size} viewBox="0 0 18 18" fill="none">
    <Path
      d="M9 11.3809C12.254 11.3809 15 11.9092 15 13.9492C15 15.99 12.236 16.5 9 16.5C5.747 16.5 3.00037 15.9713 3 13.9316C3 11.8909 5.76404 11.3809 9 11.3809ZM9 1.5C11.2043 1.5 12.9707 3.26598 12.9707 5.46875C12.9705 7.67131 11.2042 9.4375 9 9.4375C6.79658 9.4375 5.02954 7.67131 5.0293 5.46875C5.0293 3.26598 6.79642 1.5 9 1.5Z"
      fill={color}
    />
  </Svg>
);

export default UserSvg;