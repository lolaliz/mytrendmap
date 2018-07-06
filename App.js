import { Navigation } from "react-native-navigation";
import { Provider } from 'react-redux';

import AuthScreen from "./src/screens/Auth/Auth";
import SharePlaceScreen from "./src/screens/SharePlace/SharePlace";
import FindPlaceScreen from "./src/screens/FindPlace/FindPlace";
import PlaceDetailScreen from "./src/screens/PlaceDetail/PlaceDetail";
import configureStore from './src/store/configureStore';
import SideDrawer from "./src/screens/SideDrawer/SideDrawer";

const store = configureStore();

//Register Screens
Navigation.registerComponent("my-map.AuthScreen",
 () => AuthScreen, store, Provider);
Navigation.registerComponent("my-map.SharePlaceScreen", 
() => SharePlaceScreen, store, Provider);
Navigation.registerComponent("my-map.FindPlaceScreen", 
() => FindPlaceScreen, store, Provider);
Navigation.registerComponent("my-map.PlaceDetailScreen",
() => PlaceDetailScreen, store, Provider);
Navigation.registerComponent( "my-map.SideDrawer", 
() => SideDrawer);

//Start an App
Navigation.startSingleScreenApp({
  screen: {
    screen: "my-map.AuthScreen", // unique ID registered with Navigation.registerScreen
    title: "Login" // title of the screen as appears in the nav bar (optional)
    }
  });




















// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//         <Text>Changes you make will automatically reload.</Text>
//         <Text>Shake your phone to open the developer menu.</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
