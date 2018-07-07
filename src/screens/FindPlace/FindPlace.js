import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { connect } from 'react-redux';

import MyPlaceList from '../../components/MyPlaceList/MyPlaceList';

class FindPlaceScreen extends Component {
    static navigatorStyle = {
        navBarButtonColor: "grey"
    }

    state = {
        placesLoaded: false,
        removeAnimate: new Animated.Value(1),
        placesAnimate: new Animated.Value(0)
    }

    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }
    onNavigatorEvent = event => {
        console.log(event);
        if (event.type === "NavBarButtonPress")
            if (event.id === "sideDrawerToggle"){
                this.props.navigator.toggleDrawer ({
                    side: "left"
                });
            }
        }

    placesLoadedHandler = () => {
        Animated.timing(this.state.placesAnimate, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true
        }).start()
    }

    placesSearchHandler = () => {
        Animated.timing(this.state.removeAnimate, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true
        }).start(() => {
            this.setState ({
                placesLoaded: true
            });
            this.placesLoadedHandler();
        });
    };

    itemSelectedHandler = key => {
        const selPlace = this.props.places.find(place => {
            return place.key === key;
        });
        this.props.navigator.push ({
            screen: "fomo-map.PlaceDetailScreen",
            title: selPlace.name, 
            passProps: {
                selectedPlace: selPlace
            }
        });
    }
    render() {
        let content = (
            <View style={styles.container}> 
            <Animated.View
            style={{
                opacity: this.state.removeAnimate,
                transform: [
                    {
                        scale: this.state.removeAnimate.interpolate({
                            inputRange: [0,1],
                            outputRange: [12, 1]
                        })
                    }
                ]
            }}>
            <TouchableOpacity onPress={this.placesSearchHandler}>
                <View style= {styles.searchButton}>
                    <Text style= {styles.searchButtonText}> 
                        Find Trending Spots 
                    </Text>
                </View>
            </TouchableOpacity>
            </Animated.View>
            </View>
        );
        if (this.state.placesLoaded) {
            content = (
                <View style={styles.container}>
                <Animated.View style={{
                    opacity: this.state.placesAnimate
                }}>
                <MyPlaceList 
                places={this.props.places} 
                onItemSelected={this.itemSelectedHandler} />
                </Animated.View>
                </View>
            )
        }
        return (
            <View style={[ styles.container, this.state.placesLoaded ? null : styles.buttonContainer]}>
                {content}
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    container: {
        backgroundColor: "black"
    },
    buttonContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    searchButton: {
        borderColor: "grey",
        borderWidth: 3, 
        borderRadius: 5,
        padding: 20
    },
    searchButtonText: {
        color: "grey",
        fontWeight: "bold",
        fontSize: 26
    }
});

const mapStateToProps = state => {
    return {
        places: state.places.places
    }
}


export default connect(mapStateToProps)(FindPlaceScreen);