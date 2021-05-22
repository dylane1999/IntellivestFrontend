import React, { useState } from 'react';
import Svg, {Circle, Path, Line, Rect} from 'react-native-svg';

/**
 * @interface IPortfolioIconProps
 * @field activeIcon: string; -- currently active icon
 */
interface IPortfolioIconProps {
  activeIcon: string;
}

const getFillColor = (activeIcon: string) => {
    if (activeIcon === "portfolio") {
      return "#5559AF"
    }
    return "white"
    
  }
const PortfolioIcon = (props: IPortfolioIconProps) => {
    
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      >
      <Path
        d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM7 10H9V17H7V10ZM11 7H13V17H11V7ZM15 13H17V17H15V13Z"
        fill={getFillColor(props.activeIcon)}
      />
    </Svg>
  );
};

export default PortfolioIcon;
