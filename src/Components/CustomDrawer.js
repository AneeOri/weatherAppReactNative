import { DrawerContentScrollView } from "@react-navigation/drawer";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import {hp , wp} from '../Utils/ResponsiveLayout';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedCity } from "../Redux/weatherSlice";

export const CustomDrawer = () => {

    const dispatch = useDispatch();
    const navigation = useNavigation();

    const cityList = useSelector((state) => state.weather.weatherData);
    const selectedCity = useSelector((state) => state.weather.selectedCity);

    const renderCityList = () => {
        return cityList.map((item , index) => {
            return(
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    dispatch(setSelectedCity(index));
                  }}
                  style={[
                     styles.cityContainer,
                     {
                        borderWidth:
                        selectedCity === index ? 3 : 0,
                        borderColor: selectedCity === index ? Colors.BLACK : Colors.YELLOW_COLOR,
                     },
                  ]}
                >
                   <text style={[
                       styles.cityText,
                   ]}>
                      {item?.location?.name}
                   </text>
                </TouchableOpacity>
            );
        });
    };

    return(
        <DrawerContentScrollView style = {styles.container}>
           <TouchableOpacity
             style={ styles.addContainer}
             onPress={() => 
                       navigation.navigate("AddLocationScreen" , {isFrom: "Home"})
             }
           >
              <MaterialCommunityIcons
                name="plus-box-outline"
                size={wp(26)}
                color={Colors.WHITE}
              />
              <Text
                 style={[styles.drawerLabel,
                  {color:Colors.WHITE, marginLeft:wp(12)},
                ]}
              >
                {`Add Location`}
              </Text>
           </TouchableOpacity>
           <View style={styles.divider}/>
           <Text style={[styles.drawerLabel, {marginBottom:hp(10)}]}>
            {`Locations`}
           </Text>
           {cityList?.length >= 1 && renderCityList()}
        </DrawerContentScrollView>
    );
}
 

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.YELLOW_COLOR,
    paddingHorizontal: wp(20),
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    width: "100%",
    backgroundColor: Colors.BLACK,
    marginVertical: 16,
  },
  drawerLabel: {
    fontSize: wp(16),
    //fontFamily: FONTS.POPPINS_BOLD,
    color: Colors.BLACK,
    marginLeft: 0,
  },
  addContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: hp(52),
    width: "100%",
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: wp(12),
    backgroundColor: Colors.BLACK,
    marginTop: hp(12)
  },
  cityContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: hp(52),
    width: "100%",
    borderRadius: 12,
    paddingHorizontal: wp(12),
    backgroundColor: Colors.YELLOW_COLOR
  },
  cityText: {
    fontSize: wp(14),
    //fontFamily: FONTS.POPPINS_SEMIBOLD,
    color: Colors.BLACK,
  },
});

