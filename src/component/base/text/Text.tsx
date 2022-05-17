import React from 'react';

import { 
    Text as RNText, 
    TextProps as RNTextProps,
    TextStyle as RNTextStyleProps,
    View, 
    StyleSheet,
} from 'react-native';

type CustomProps = {
    styles?: RNTextStyleProps;
    variant?: string;
}

type TextProps = RNTextProps & CustomProps;

const Text: React.FC<TextProps> = ({children, styles}) => (
    <RNText style={styles}>{children}</RNText>
);

export default Text;
