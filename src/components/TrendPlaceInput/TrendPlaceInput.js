import React, {Component} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

import DefaultInput from '../UI/DefaultInput/DefaultInput';

 const trendPlaceInput = props => (
                        
             <DefaultInput 
                placeholder="A hot spot"
                value={props.placeName}  
                onChangeText={props.onChangeText}/>
        );
   


const styles = StyleSheet.create ({
    inputContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
      },
      placeInput: {
        width: "70%"
      },
      placeButton: {
        width: "30%"
      }
})

export default trendPlaceInput