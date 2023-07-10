import { View, Text } from "react-native";
import { FONTS } from "../Utils/Fonts";
import { COLORS } from "../Utils/Colors";


const LocationScreen = () => {
    return(
        <View>
            <Text> Location Screen</Text>
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