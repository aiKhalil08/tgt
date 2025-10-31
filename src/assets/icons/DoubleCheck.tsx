import * as React from "react"
import Svg, { Path } from "react-native-svg"
import IconProps from "./IconProps"

const DoubleCheckSvg: React.FC<IconProps> = ({ 
  width, 
  height,
  size=16, 
  color = "#fff" 
}) => (
  <Svg
    width={width || size}
    height={height || size}
    fill="none"
  >
    <Path
      fill={color}
      d="M8.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.25.25 0 0 1 .02-.022Zm-.92 5.14.92.92a.749.749 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179h.001Z"
    />
  </Svg>
)
export default DoubleCheckSvg
