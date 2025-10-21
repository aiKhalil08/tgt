import * as React from "react";
import Svg, { Path } from "react-native-svg";
import IconProps from "./IconProps";

const CheckSvg: React.FC<IconProps> = ({ 
  width, 
  height, 
  size = 20,
  color = "#fff" 
}) => (
  <Svg width={width || size} height={height || size} viewBox="0 0 20 20" fill="none">
    <Path
      d="M7.49984 13.475L4.0415 10.0166C3.84984 9.82498 3.59567 9.71831 3.33317 9.71831C3.07067 9.71831 2.8165 9.82498 2.62484 10.0166C2.23317 10.4083 2.23317 11.0416 2.62484 11.4333L6.79151 15.6C7.18317 15.9916 7.8165 15.9916 8.20817 15.6L17.3748 6.43331C17.7665 6.04165 17.7665 5.40831 17.3748 5.01665C17.1832 4.82498 16.929 4.71831 16.6665 4.71831C16.404 4.71831 16.1498 4.82498 15.9582 5.01665L7.49984 13.475Z"
      fill={color}
    />
  </Svg>
);

export default CheckSvg;