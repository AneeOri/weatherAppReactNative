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
import { PersistGate } from 'redux-persist/integration/react';



const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const InictialStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen 
         name='LocationScreen'
         component={LocationScreen} 
      />
      <Stack.Screen
         name='AddLocation'
         component={AddLocation} 
      />
    </Stack.Navigator>
  )
}

const App = () => {

  const data = useSelector(state => state.weather.weatherData);
  return (
           <NavigationContainer>
              {data.length >= 1 
               ?
                 <View style={styles.container}>
                   <Text>kpedoooooooooo</Text>
                 </View>
               :
                   <InictialStack/>
              }
            </NavigationContainer>
  );
}

export default () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister} >
        <App />
      </PersistGate>
      
    </Provider>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
