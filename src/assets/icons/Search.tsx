import * as React from "react";
import Svg, { Path } from "react-native-svg";
import IconProps from "./IconProps";

const SearchSvg: React.FC<IconProps> = ({ 
  width, 
  height, 
  size = 20,
  color = "#D3862A" 
}) => (
  <Svg width={width || size} height={height || size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M10.3636 3.00073C8.90721 3.00073 7.48354 3.4326 6.2726 4.24172C5.06167 5.05084 4.11786 6.20088 3.56052 7.5464C3.00319 8.89192 2.85737 10.3725 3.14149 11.8009C3.42562 13.2293 4.12693 14.5413 5.15675 15.5712C6.18657 16.601 7.49863 17.3023 8.92703 17.5864C10.3554 17.8705 11.836 17.7247 13.1815 17.1674C14.527 16.6101 15.6771 15.6662 16.4862 14.4553C17.2953 13.2444 17.7272 11.8207 17.7272 10.3643C17.7271 8.41141 16.9512 6.53853 15.5703 5.15762C14.1894 3.7767 12.3165 3.00086 10.3636 3.00073V3.00073Z"
      stroke={color}
      strokeWidth="2"
      strokeMiterlimit="10"
    />
    <Path
      d="M15.8574 15.8574L21.0001 21.0001"
      stroke={color}
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
  </Svg>
);

export default SearchSvg;