import React from 'react';
import Svg, {Circle, Path, Line, Rect} from 'react-native-svg';

/**
 * @interface IHomeIconProps
 * @field   activeIcon: string - the currently active icon

 */
interface IHomeIconProps {
  activeIcon: string;
}

const getFillColor = (activeIcon: string) => {
  if (activeIcon === "home") {
    return "#5559AF"
  }
  return "white"
  
}


const HomeIcon = (props: IHomeIconProps) => {

  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69ZM12 3L2 12H5V20H11V14H13V20H19V12H22L12 3Z"
        fill={getFillColor(props.activeIcon)}
      />
    </Svg>
  );
};

export default HomeIcon;