import React from "react";

import {View, StyleSheet} from 'react-native';

import Svg, {Path} from 'react-native-svg';

type CalendarIconProps = {
    color?: string;
    width: number;
    height: number;
}

const CalendarIcon: React.FC<CalendarIconProps> = ({ 
    color, 
    width, 
    height,
}) => {
    return(
        <Svg 
            height={height} 
            viewBox="0 0 24 24" 
            width={width} 
            fill={color}
        >
            <Path d="M19,4h-1V2h-2v2H8V2H6v2H5C3.89,4,3.01,4.9,3.01,6L3,20c0,1.1,0.89,2,2,2h14c1.1,0,2-0.9,2-2V6C21,4.9,20.1,4,19,4z M19,20 H5V10h14V20z M9,14H7v-2h2V14z M13,14h-2v-2h2V14z M17,14h-2v-2h2V14z M9,18H7v-2h2V18z M13,18h-2v-2h2V18z M17,18h-2v-2h2V18z"/>
        </Svg>
    );
};

export default CalendarIcon;
