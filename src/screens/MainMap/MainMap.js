import React,  { Component } from 'react';
import { View, StyleSheet, Dimensions, Button, TouchableOpacity, Text} from 'react-native';
import MapView from "react-native-maps";

import MainText from '../../components/UI/MainText/MainText';
import HeadingText from '../../components/UI/HeadingText/HeadingText';

class MainMap extends Component {
    static navigatorStyle = {
        navBarButtonColor: "grey"
    }

    state ={
        focusedLocation: {
            latitude: 32.809237,
            longitude: -117.190047,
            latitudeDelta: 0.0122,
            longitudeDelta: Dimensions.get("window").width /
             Dimensions.get("window").height * 0.0122
        },
        locationChosen: false
    };

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

    pickLocationHandler = event => {
        const coords = event.nativeEvent.coordinate;
        this.map.animateToRegion({
            ...this.state.focusedLocation,
            latitude: coords.latitude,
            longitude: coords.longitude
        })
        this.setState(prevState => {
          return {
            focusedLocation: {
              ...prevState.focusedLocation,
              latitude: coords.latitude,
              longitude: coords.longitude
            },
            locationChosen: true
          };
        });
      };

    getLocationHandler = () => {
        navigator.geolocation.getCurrentPosition(pos => {
            const coordsEvent = {
            nativeEvent: {
                coordinate: {
                latitude: pos.coords.latitude,
                longitude: pos.coords.longitude
                }
            }
            };
            this.pickLocationHandler(coordsEvent);
        },
        err => {
        console.log(err);
        alert("Could not get location, please enter your location!");
        })
        }
    

    render () {

        return (
            <View style={styles.container}>
            <MainText>
                    <HeadingText>Map the Trending Spots! </HeadingText>
                    </MainText>
              <View style={styles.mapContainer}>
                    <MapView 
                        initialRegion={this.state.focusedLocation}
                        style={styles.map}
                        onPress={this.pickLocationHandler}
                        ref={ref => this.map = ref}
                       >
                       {/* {marker}   */}
                     </MapView>
               </View>  
               <TouchableOpacity onPress={this.getLocationHandler}>
                        <Text style={styles.buttonStyle}>Locate Me </Text>
                    </TouchableOpacity>
            </View>   
        );
    }
}; 

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "black"
    },
    mapContainer: {
        ...StyleSheet.absoluteFillObject,
        height: 500,
        width: 500,
        marginTop: '10%',
        borderWidth: 1,
        borderColor: 'grey',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject
    },
    buttonStyle: {
        padding: 10,
        margin: 5,
        borderRadius: 15,
        backgroundColor: 'black',
        textAlign: 'center',
        color: 'white',
        fontSize: 20
    }
})

export default MainMap;
       
        