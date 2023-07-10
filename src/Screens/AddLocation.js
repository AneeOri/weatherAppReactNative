import { View, Text, SafeAreaView, StatusBar, StyleSheet,TextInput,Alert } from "react-native";
import { FONTS } from "../Utils/Fonts";
import { COLORS } from "../Utils/Colors";
import { wp,hp } from "../Utils/ResponsiveLayout";


const AddLocation = () => {
    return(
        <View>
            <Text> Location Screen</Text>
        </View>
    );
}

export default AddLocation;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.YELLOW_COLOR,
      justifyContent: 'center',
    },
    innerContainer: {
      flex: 1,
      justifyContent: 'center',
    },
    titleText: {
      fontSize: wp(20),
      fontFamily: FONTS.POPPINS_SEMIBOLD,
      color: COLORS.BLACK,
      textAlign: 'center',
      marginHorizontal: wp(24),
    },
    inputStyle: {
      height: hp(52),
      borderWidth: 3,
      marginHorizontal: wp(24),
      borderRadius: 12,
      paddingHorizontal: wp(12),
      marginVertical: hp(26),
      fontSize: wp(16),
      fontFamily: FONTS.POPPINS_REGULAR,
      color: COLORS.BLACK
    }
  });