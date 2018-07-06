import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import ListItem from '../ListItem/ListItem';

const MyPlaceList = props => {
    const placesOutput = props.places.map((place, i) => (
        <ListItem key={i} 
        placeName={place} 
        onItemPressed={() => props.onItemDeleted(i)} />
      ));
    return (
        <FlatList style={styles.listContainer}
        data = {props.places}
        renderItem={(info) => (
            <ListItem
            placeName= {info.item.name}
            placeImage= {info.item.image}
            onItemPressed= {()=> props.onItemSelected(info.item.key)}
            />
        )} />
    )
};
//use this to change styling
const styles = StyleSheet.create({
    listContainer: {
      width: "100%"
    }
});

export default MyPlaceList;