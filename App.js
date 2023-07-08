import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Provider, useSelector } from 'react-redux';
import store, {persister} from './src/Redux/store';
import {CustomDrawer} from './src/Components/CustomDrawer';

import LocationScreen from './src/Screens/LocationScreen';
import AddLocation from './src/Screens/AddLocation';
import HomeScreen from './src/Screens/HomeScreen'; 


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();



export default function App() {
  return (
    <View style={styles.container}>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
