import React, {Component} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

class TrendPlaceInput extends Component {
    state= {
        placeName: "",
       // placeInfo: ""
        
      }

    placeNameChangedHandler = val => {
        this.setState({
          placeName: val
        });
    };
          
    placeInfoChangedHandler = info => {
    this.setState({
        placeInfo: info
    });
    };

    placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "" ){
        return;
    }
    this.props.onPlaceAdded(this.state.placeName);
    
    };

    render() {
        return(
            <View style={styles.inputContainer}>
          <TextInput
            placeholder= "A hot place"
            value= {this.state.placeName}
            onChangeText= {this.placeNameChangedHandler}
            style={styles.placeInput}
          />
          {/* tried to add an input field for description, did not render correctly, should
          be added in modal content??
          <TextInput
            placeholder= "Description"
            value= {this.state.placeInfo}
            onChangeText= {this.placeInfoChangedHandler}
            style={styles.placeInput}
          /> */}
         <Button title="Add" 
         style= {styles.placeButton} 
         onPress={this.placeSubmitHandler}
         />
         </View>
        )
    }
}

const styles = StyleSheet.create ({
    inputContainer: {
        //flex: 1,
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

export default TrendPlaceInput