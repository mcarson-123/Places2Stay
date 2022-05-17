import React from 'react';

import {
    View,
    StyleSheet
} from 'react-native';

import Text from '../../../../component/base/text';

type SectionHeaderProps = {
    title: string;
    description?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({title, description}) => {
    return(
        <View>
            <Text styles={ styles.title }>{title}</Text>
            {description && <Text styles={ styles.description }>{description}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: '400',
    },
    description: {
        fontSize: 12,
        fontWeight: '400',
        marginTop: 20,
        marginBottom: 10,
    }
});

export default SectionHeader;