import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Provider, useSelector } from 'react-redux';
import store, {persister} from './src/Redux/store';
import {CustomDrawer} from './src/Components/CustomDrawer';
import { useFonts } from 'expo-font';


import LocationScreen from './src/Screens/LocationScreen';
import AddLocation from './src/Screens/AddLocation';
import HomeScreen from './src/Screens/HomeScreen'; 
import { PersistGate } from 'redux-persist/integration/react';
import { useEffect } from 'react';



const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const InitialStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen 
         name='LocationScreen'
         component={LocationScreen} 
         options={{
          headerShown:false
         }}
      />
      <Stack.Screen
         name='AddLocation'
         component={AddLocation} 
         options={{
          headerShown:false
         }}
      />
    </Stack.Navigator>
  )
}

const HomeStack = () => {
  return(
   <Drawer.Navigator
    useLegacyImplementation
    drawerContent={() => <CustomDrawer/>}
   >
     <Drawer.Screen
      name='HomeScreen'
      component={HomeScreen}
     />
     <Drawer.Screen
       name='AddLocation'
       component={AddLocation}
       options={{
        headerShown:false
       }}
     />
   </Drawer.Navigator>
  )
}

const App = () => {

  const data = useSelector(state => state.weather.weatherData);
  const [fontsLoaded] = useFonts({
    'Poppins-Regular' : require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold' : require('./assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Bold': require ('./assets/fonts/Poppins-Bold.ttf'),
  })

  useEffect (()=>{
    if(fontsLoaded){

    }
  },[fontsLoaded])

  if(!fontsLoaded){
    return;
  }
  return (
           <NavigationContainer>
                {/* {data?.length >= 1 ? <InitialStack /> : <HomeStack />} */}
                {data?.length >= 1 ? <InitialStack /> : <HomeStack />}
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

