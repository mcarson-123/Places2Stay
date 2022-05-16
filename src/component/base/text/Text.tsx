import React from 'react';

import { 
    Text as RNText, 
    TextProps as RNTextProps,
    TextStyle as RNTextStyleProps,
    View, 
    StyleSheet,
} from 'react-native';

// const Text = (props) => {
//     return (
//         <View>
//             <RNText>{ props.text }</RNText>
//         </View>
//     );
// };

// const styles = StyleSheet.create({

// });

type CustomProps = {
    styles?: RNTextStyleProps;
    variant?: string;
}

type TextProps = CustomProps & RNTextProps;

const Text: React.FC<TextProps> = ({children, styles}) => (
    <RNText style={styles}>{children}</RNText>
);

export default Text;
