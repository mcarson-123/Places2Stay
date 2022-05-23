import React from "react";

import Svg, {Path} from 'react-native-svg';

type HouseIconProps = {
    color?: string;
    width: number;
    height: number;
}

const HouseIcon: React.FC<HouseIconProps> = ({ 
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
            <Path d="M19,9.3V4h-3v2.6L12,3L2,12h3v8h5v-6h4v6h5v-8h3L19,9.3z M10,10c0-1.1,0.9-2,2-2s2,0.9,2,2H10z"/>
        </Svg>
    );
};

export default HouseIcon;
