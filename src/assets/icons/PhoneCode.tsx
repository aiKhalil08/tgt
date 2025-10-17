import * as React from "react";
import Svg, { Path, Text } from "react-native-svg";
import IconProps from "./IconProps";

const PhoneCodeSvg: React.FC<IconProps> = ({ 
  width, 
  height, 
  size = 20,
  color = "#000" 
}) => (
  <Svg width={40} height={20} viewBox="0 0 40 18" fill="none">
    <Text
      x="0"
      y="14"
      fontSize="14"
      fontWeight="500"
      fill={color}
      fontFamily="System"
    >
      +27
    </Text>
  </Svg>
);

export default PhoneCodeSvg;