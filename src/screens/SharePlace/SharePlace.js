import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Image} from 'react-native';
import { connect } from 'react-redux';
import TrendPlaceInput from '../../components/TrendPlaceInput/TrendPlaceInput';
import { addPlace } from '../../store/actions/index';
import MainText from '../../components/UI/MainText/MainText';
import HeadingText from '../../components/UI/HeadingText/HeadingText';

import ChooseImage from '../../components/ChooseImage/ChooseImage';
import ChooseLocation from '../../components/ChooseLocation/ChooseLocation';
import validate from '../../utility/validation';

class SharePlaceScreen extends Component {
    static navigatorStyle = {
        navBarButtonColor: "grey"
    }
    
    state = {
        controls: {
            placeName: {
            value: "",
            valid: false,
            touched: false,
            validationRules: {
                notEmpty: true
            }
            }
        }
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
     
    placeNameChangedHandler = val => {
        this.setState(prevState => {
            return {
            controls: {
                ...prevState.controls,
                placeName: {
                ...prevState.controls.placeName,
                value: val,
                valid: validate(val, prevState.controls.placeName.validationRules),
                touched: true
                }
            }
            };
        });
        };
    
    placeAddedHandler = () => {
        if (this.state.controls.placeName.value.trim() !== "") {
            this.props.onAddPlace(this.state.controls.placeName.value);
          }
    }

    render() {
        return (
            //need to use nested View inside of ScrollView to add style for container that works on android and ios
            <ScrollView >
            <View style={styles.container}>
                    <MainText>
                    <HeadingText>Share a trending spot! </HeadingText>
                    </MainText>
                   <ChooseImage />
                   <ChooseLocation />
                    <TrendPlaceInput 
                    placeData={this.state.controls.placeName}
                    onChangeText={this.placeNameChangedHandler}/>
                    <View style={styles.button}>
                    <Button title="Share Place"
                     onPress={this.placeAddedHandler}
                     disabled={!this.state.controls.placeName.valid}
                      />
                    </View>
              </View>  
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "black"
    },
    placeholder: {
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "#eee",
        width: "80%",
        height: 150
    },
    button: {
        margin: 8
    },
    previewImage: {
        width: "100%",
        height: "100%"
    }
})

const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: (placeName) => dispatch(addPlace(placeName))
    };
};

export default connect(null, mapDispatchToProps)(SharePlaceScreen);