import React from "react";

import {View, StyleSheet} from 'react-native';

import Svg, {Path} from 'react-native-svg';

type PlaceIconProps = {
    color?: string;
    width: number;
    height: number;
}

const PlaceIcon: React.FC<PlaceIconProps> = ({ 
    color, 
    width, 
    height,
}) => {
    return(
        <Svg 
            height={height}
            viewBox="0 0 24 24" 
            width={width}
            fill={color || "#000000"}
        >
            <Path d="M0 0h24v24H0z" fill="none"/>
            <Path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
        </Svg>
    );
};

export default PlaceIcon;


