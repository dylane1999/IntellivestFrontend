import React from 'react';
import Svg, {Circle, Path, Line, Rect, Polygon, G} from 'react-native-svg';

const ChevronArrow = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      enable-background="new 0 0 24 24"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill="#FFFFFF">
      <Rect fill="none" height="24" width="24" />
      <G>
        <Polygon points="17.77,3.77 16,2 6,12 16,22 17.77,20.23 9.54,12" />
      </G>
    </Svg>
  );
};

export default ChevronArrow;
