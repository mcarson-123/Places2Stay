import React, { useState, useRef } from "react"
import {
    View,
    StyleSheet,
    ScrollView,
    FlatList,
    InteractionManager,
    Animated,
    NativeScrollEvent,
    NativeSyntheticEvent,
} from 'react-native';
import SectionHeader from "./component/SectionHeader";
import PlaceCta from "./component/PlaceCta";
import Search from "./component/Search";
import Text from "../../component/base/text/Text";
import CityTile from "./component/CityTile";

import homeMockData from "./homeMockData";

const ItemSeparator = () => {
    return <View style={styles.separator}></View>
}

const EmptyListComponent = () => {
    return(
        <Text>Nothing to show</Text>
    );
}

const ListHeader = () => {
    return(
        <Text>THIS IS A LIST</Text>
    );
}

const ListFooter = () => {
    return <Text>This is the footer</Text>
}

const Home: React.FC = () => {
    const [scrollPos, setScrollPos] = useState(0);
    const [searchIsVisible, setSearchIsVisible] = useState(false);
    // console.log("scrollpos*** ", scrollPos);

    const animatedValue = useRef(new Animated.Value(0)).current;
    const [animateHeaderStyle, setAnimateHeaderStyle] = useState({});

    // const interpolate = animatedValue.interpolate({
    //     inputRange: [0, 1],
    //     outputRange: []
    // });

    const onScrollEvent = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
        // setScrollPos(e.nativeEvent.contentOffset.y)
        const pos = e.nativeEvent.contentOffset.y;

        if (pos > 50) {
            console.log("attempting to animate**");
            setSearchIsVisible(true);
    
            setAnimateHeaderStyle({transform: [{translateY: animatedValue}]});
            const options = {
                toValue: pos,
                duration: 1000,
                useNativeDriver: false,
            };
            Animated.timing(animatedValue, options).start();
        }
    }

    return(
        <View style={styles.container}>
            <FlatList
                ListHeaderComponent={
                    <View>
                        <Animated.View style={[styles.searchContainer, {transform: [{translateY: animatedValue}]}]}>
                            <Text styles={styles.text}>Try 'Victoria'</Text>
                        </Animated.View>
                        <SectionHeader 
                            title={homeMockData.sections.placeCtas.title}
                            description={homeMockData.sections.placeCtas.description}
                        />
                    </View>
                }
                onScroll={(e) => onScrollEvent(e)}
                scrollEventThrottle={10}
                data={homeMockData.sections.placeCtas.places}
                renderItem={
                    ({item}) => {
                    return (
                        <PlaceCta 
                            image={item.image}
                            imageLabel={item.imageLabel}
                            address={item.title}
                            location={item.location}
                        />
                    );
                }}
            />
            {/* <ScrollView>
            <Search/>
                <SectionHeader 
                    title="Find your getaway"
                    description="Our spaces are designed for comfort - whether you are working, relaxing, or craving some spaces"
                />
                <PlaceCta 
                    image={require('./component/PlaceCta/placeholder.jpg')}
                    imageLabel="From $126"
                    address="408 St. Jacques | 1 Br"
                    location="Old Montreal, Montreal"
                />
                <PlaceCta 
                    image={require('./component/PlaceCta/placeholder.jpg')}
                    imageLabel="From $126"
                    address="408 St. Jacques | 1 Br"
                    location="Old Montreal, Montreal"
                />
                <PlaceCta 
                    image={require('./component/PlaceCta/placeholder.jpg')}
                    imageLabel="From $126"
                    address="408 St. Jacques | 1 Br"
                    location="Old Montreal, Montreal"
                />
                <PlaceCta 
                    image={require('./component/PlaceCta/placeholder.jpg')}
                    imageLabel="From $126"
                    address="408 St. Jacques | 1 Br"
                    location="Old Montreal, Montreal"
                />
            </ScrollView> */}
            <View style={styles.cities}>
                <SectionHeader 
                    title="25+ Cities to Explore"
                />
                <FlatList 
                    horizontal
                    data={homeMockData.sections.cityCtas.places}
                    // data={[]}
                    renderItem={
                        ({item}) => <CityTile key={item.id} image={item.image} cityName={item.title}/>
                    }
                    keyExtractor={item => item.id.toString()}
                    // ItemSeparatorComponent={ItemSeparator}
                    // ListEmptyComponent={EmptyListComponent}
                    // ListHeaderComponent={ListHeader}
                    // ListFooterComponent={ListFooter}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 32,
        paddingLeft: 24,
        paddingRight: 24, 
        backgroundColor: '#FFF1D2',
        height: '100%',
    },
    cities: {
        marginTop: 24,
    },
    separator: {
        height: 10,
        width: 10,
        backgroundColor: 'pink',
    },
    searchContainer: {
        borderRadius: 20,
        backgroundColor: 'white',
        margin: 32,
        padding: 12,
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        fontWeight: '400',
        color: '#858585',
    }
});

export default Home;