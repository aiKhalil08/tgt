import * as React from "react";
import Svg, { Path } from "react-native-svg";
import IconProps from "./IconProps";

const EyeSvg: React.FC<IconProps> = ({ 
  width, 
  height, 
  size = 20,
  color = "#fff" 
}) => (
  <Svg width={width || size} height={height || size} viewBox="0 0 18 18" fill="none">
    <Path
      d="M8.99997 3.75C3.27522 3.75 1.55472 8.71275 1.53897 8.763L1.45947 9L1.53822 9.237C1.55472 9.28725 3.27522 14.25 8.99997 14.25C14.7247 14.25 16.4452 9.28725 16.461 9.237L16.5405 9L16.4617 8.763C16.4452 8.71275 14.7247 3.75 8.99997 3.75ZM8.99997 12C7.34547 12 5.99997 10.6545 5.99997 9C5.99997 7.3455 7.34547 6 8.99997 6C10.6545 6 12 7.3455 12 9C12 10.6545 10.6545 12 8.99997 12Z"
      fill={color}
    />
    <Path
      d="M9 7.5C8.187 7.5 7.5 8.187 7.5 9C7.5 9.813 8.187 10.5 9 10.5C9.813 10.5 10.5 9.813 10.5 9C10.5 8.187 9.813 7.5 9 7.5Z"
      fill={color}
    />
  </Svg>
);

export default EyeSvg;