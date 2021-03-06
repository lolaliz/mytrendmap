import { Navigation } from "react-native-navigation";
import { Provider } from 'react-redux';

import AuthScreen from "./src/screens/Auth/Auth";
import SharePlaceScreen from "./src/screens/SharePlace/SharePlace";
import FindPlaceScreen from "./src/screens/FindPlace/FindPlace";
import PlaceDetailScreen from "./src/screens/MyPlaceDetail/MyPlaceDetail";
import configureStore from './src/store/configureStore';
import SideDrawer from "./src/screens/SideDrawer/SideDrawer";
import MainMapScreen from "./src/screens/MainMap/MainMap";

const store = configureStore();

//Register Screens
Navigation.registerComponent("fomo-map.AuthScreen",
 () => AuthScreen, store, Provider);
Navigation.registerComponent("fomo-map.SharePlaceScreen",
 () => SharePlaceScreen, store, Provider);
Navigation.registerComponent("fomo-map.FindPlaceScreen", 
() => FindPlaceScreen, store, Provider);
Navigation.registerComponent("fomo-map.PlaceDetailScreen",
() => PlaceDetailScreen, store, Provider);
Navigation.registerComponent("fomo-map.MainMapScreen",
() => MainMapScreen); //may need to add store, Provider later
Navigation.registerComponent( "fomo-map.SideDrawer", 
() => SideDrawer);

//Start an App
Navigation.startSingleScreenApp({
  screen: {
    screen: "fomo-map.AuthScreen", // unique ID registered with Navigation.registerScreen
    title: "Login" // title of the screen as appears in the nav bar (optional)
    }
  });

