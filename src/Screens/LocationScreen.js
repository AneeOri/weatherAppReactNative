import { StatusBar } from "expo-status-bar";
import { Alert, View, Text, SafeAreaView, StyleSheet  } from "react-native";
import { hasServicesEnabledAsync } from "expo-location";
import LottieView from 'lottie-react-native';
import { FONTS } from "../Utils/Fonts"; 
import { COLORS } from "../Utils/Colors";
import { hp,wp } from "../Utils/ResponsiveLayout";
import { useNavigation } from "@react-navigation/core";
import {fetchWeather} from '../Utils/ApiHelper';
import { setIsLoading, setWeatherData } from "../Redux/weatherSlice";
import Button from '../Components/Button';
import Loader from '../Components/Loader';


const LocationScreen = () => {

    //objects
    const navigation = useNavigation();
    const dispatch = useDispatch();

    //Redux Selector
    const isLoading = useSelector(state => state.weather.isLoading);
    const data = useSelector(state => state.weather.weatherData);

    //Location Permission Enabled ro not
    const CheckIfLocationEnabled = async () => {
        dispatch(setIsLoading(true));

        let enabled = await hasServicesEnabledAsync();

        if(!enabled){
            dispatch(setIsLoading(false));
            Alert.alert(
                "Location Service not enabled",
                "Please enable your location services to continue",
                [{ text: "OK" }],
                { cancelable: false }
            );
        }
        else{
            
        }
    }

    
       return(
            <View>
                <Text> Location Screen</Text>
                <Button
                  title='Fetch Weather'
                  buttonStyle={{alignSelf: 'center'}}
                  onPress={() => onPressFetch()}
                />
            </View>
        );
    }




export default LocationScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.YELLOW_COLOR,
      justifyContent: "center",
    },
    contentContainer: {
      alignItems: "center",
      marginBottom: 20,
    },
    title: {
      fontSize: wp(18),
      color: COLORS.BLACK,
      textAlign: "center",
      marginHorizontal: wp(24),
      marginVertical: hp(16),
      fontFamily: FONTS.POPPINS_SEMIBOLD,
    },
    text: {
      fontSize: wp(16),
      fontFamily: FONTS.POPPINS_REGULAR,
      color: COLORS.BLACK,
    },
    sepratorContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-evenly",
      marginVertical: hp(20),
    },
    separator: {
      height: StyleSheet.hairlineWidth,
      flex: 1,
      backgroundColor: COLORS.BLACK,
      marginHorizontal: 12,
    },
  });