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
    <RNText style={[styles, styling.title]}>{children}</RNText>
);

const styling = StyleSheet.create({
    title: {
        fontFamily: 'EncodeSans-Regular',
    },
    base: {

    }
});

export default Text;
