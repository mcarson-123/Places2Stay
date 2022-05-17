import React from "react"
import {
    View,
    StyleSheet,
    ScrollView,
    FlatList,
    InteractionManager,
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
    return(
        <View style={styles.container}>
            <Search/>
            <ScrollView>
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
            </ScrollView>
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
    }
});

export default Home;