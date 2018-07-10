import React, {Component} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

import DefaultInput from '../UI/DefaultInput/DefaultInput';

 const trendPlaceInput = props => (
                        
             <DefaultInput 
                placeholder="A hot spot"
                value={props.placeData.value}
                valid={props.placeData.valid}
                touched={props.placeData.touched}
                onChangeText={props.onChangeText}
              />
        );
   

export default trendPlaceInput