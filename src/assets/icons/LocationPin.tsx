import * as React from "react";
import Svg, { G, Path, Defs, Filter, FeFlood, FeColorMatrix, FeOffset, FeGaussianBlur, FeBlend } from "react-native-svg";
import IconProps from "./IconProps";

const LocationPinSvg: React.FC<IconProps> = ({ 
  width, 
  height, 
  size = 20,
  color = "#D3862A" 
}) => (
  <Svg width={width || size} height={height || size} viewBox="0 0 63 91" fill="none">
    <Defs>
      <Filter 
        id="filter0_d_101_2538" 
        x="0" 
        y="0.000244141" 
        width="63" 
        height="90.28" 
        filterUnits="userSpaceOnUse" 
        colorInterpolationFilters="sRGB"
      >
        <FeFlood floodOpacity="0" result="BackgroundImageFix"/>
        <FeColorMatrix 
          in="SourceAlpha" 
          type="matrix" 
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" 
          result="hardAlpha"
        />
        <FeOffset dy="4"/>
        <FeGaussianBlur stdDeviation="2"/>
        <FeColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <FeBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_101_2538"/>
        <FeBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_101_2538" result="shape"/>
      </Filter>
    </Defs>
    <G filter="url(#filter0_d_101_2538)">
      <Path
        d="M31.5 0.000244141C26.7391 0.000605939 22.0598 1.23359 17.92 3.57855C13.7802 5.92352 10.3216 9.30014 7.88271 13.3781C5.44381 17.456 4.10811 22.0955 4.00629 26.8427C3.90447 31.5898 5.04003 36.2821 7.30186 40.4603L29.9967 81.3951C30.1452 81.6633 30.3631 81.8868 30.6276 82.0424C30.8921 82.1981 31.1936 82.2802 31.5008 82.2802C31.8079 82.2802 32.1094 82.1981 32.374 82.0424C32.6385 81.8868 32.8563 81.6633 33.0049 81.3951L55.7069 40.4459C57.9652 36.2674 59.0976 31.576 58.9934 26.8304C58.8893 22.0847 57.5521 17.4472 55.1127 13.3714C52.6732 9.29548 49.215 5.9207 45.0762 3.57699C40.9373 1.23329 36.2595 0.000872299 31.5 0.000244141V0.000244141ZM31.5 41.1394C28.7806 41.1394 26.1223 40.3352 23.8612 38.8284C21.6001 37.3216 19.8377 35.1799 18.797 32.6741C17.7564 30.1684 17.4841 27.4112 18.0146 24.7511C18.5451 22.091 19.8547 19.6476 21.7776 17.7298C23.7005 15.812 26.1505 14.5059 28.8176 13.9768C31.4848 13.4477 34.2494 13.7192 36.7618 14.7572C39.2742 15.7951 41.4216 17.5527 42.9324 19.8078C44.4433 22.0629 45.2497 24.7142 45.2497 27.4264C45.2455 31.062 43.7955 34.5476 41.2179 37.1184C38.6402 39.6891 35.1454 41.1353 31.5 41.1394Z"
        fill={color}
      />
    </G>
  </Svg>
);

export default LocationPinSvg;