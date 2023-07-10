import { View, Text , StyleSheet} from "react-native";
import { FONTS } from "../Utils/Fonts";
import { COLORS } from "../Utils/Colors";
import { wp, hp } from "../Utils/ResponsiveLayout";


const HomeScreen = () => {
    return(
        <View>
            <Text> Home Screen</Text>
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.YELLOW_COLOR,
    },
    topContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginHorizontal: wp(24),
      marginTop: hp(16),
    },
    cityText: {
      flex: 1,
      marginHorizontal: wp(12),
      fontSize: wp(18),
      fontFamily: FONTS.POPPINS_BOLD,
      color: COLORS.BLACK,
      textAlign: "center",
      alignSelf: "center",
    },
    tempText: {
      fontSize: wp(110),
      fontFamily: FONTS.POPPINS_REGULAR,
      color: COLORS.BLACK,
      textAlign: "center",
    },
    conditionText: {
      fontSize: wp(18),
      fontFamily: FONTS.POPPINS_REGULAR,
      color: COLORS.BLACK,
      textAlign: "center",
    },
    dateContainer: {
      paddingVertical: hp(6),
      paddingHorizontal: wp(12),
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: COLORS.BLACK,
      borderRadius: 60,
      marginVertical: hp(14),
      alignSelf: "center",
    },
    dateText: {
      fontSize: wp(14),
      fontFamily: FONTS.POPPINS_REGULAR,
      color: COLORS.WHITE,
    },
    summaryContainer: {
      alignItems: "flex-start",
      marginHorizontal: wp(24),
    },
    summaryTitle: {
      fontSize: wp(16),
      fontFamily: FONTS.POPPINS_BOLD,
      color: COLORS.BLACK,
    },
    summaryText: {
      fontSize: wp(12),
      fontFamily: FONTS.POPPINS_SEMIBOLD,
      color: COLORS.BLACK,
      marginTop: hp(6),
    },
    infoContainer: {
      marginHorizontal: wp(24),
      marginVertical: hp(24),
      borderColor: COLORS.BLACK,
      borderWidth: 3,
      borderRadius: 12,
      paddingHorizontal: wp(20),
      paddingVertical: hp(16),
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    infoMainText: {
      fontSize: wp(16),
      fontFamily: FONTS.POPPINS_BOLD,
      color: COLORS.BLACK,
      marginTop: hp(10),
    },
    infoText: {
      fontSize: wp(14),
      fontFamily: FONTS.POPPINS_REGULAR,
      color: COLORS.BLACK,
    },
    foreCastContainer: {
      paddingVertical: hp(12),
      paddingHorizontal: wp(8),
      borderWidth: 2,
      borderColor: COLORS.BLACK,
      borderRadius: 12,
      justifyContent: "center",
      alignItems: "center",
      width: wp(72),
    },
    foreCastTemp: {
      fontSize: wp(12),
      fontFamily: FONTS.POPPINS_SEMIBOLD,
      color: COLORS.BLACK,
    },
    foreCastDate: {
      fontSize: wp(10),
      fontFamily: FONTS.POPPINS_REGULAR,
      color: COLORS.BLACK,
      textAlign: "center",
    },
    forecastIconStyle: {
      height: wp(30),
      width: wp(30),
      tintColor: COLORS.BLACK,
    },
    alertContainer: {
      marginHorizontal: wp(24),
      paddingVertical: hp(12),
    },
    alertInnerContainer: {
      flex: 1,
      borderColor: COLORS.ALERT,
      borderWidth: 3,
      borderRadius: 12,
      padding: wp(8),
      marginVertical: 8,
      // minHeight: hp(150)
    },
    alertHeadline: {
      fontSize: wp(14),
      fontFamily: FONTS.POPPINS_SEMIBOLD,
      color: COLORS.BLACK,
      width: "95%",
    },
    alertDesc: {
      fontSize: wp(12),
      fontFamily: FONTS.POPPINS_REGULAR,
      color: COLORS.BLACK,
      marginTop: hp(4),
      width: "95%",
    },
    pagingContainer: {
      alignSelf: "flex-end",
      backgroundColor: "#000",
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: wp(8),
      paddingVertical: hp(4),
      borderRadius: 20,
    },
    pagingText: {
      fontSize: wp(12),
      fontFamily: FONTS.POPPINS_REGULAR,
      color: COLORS.WHITE
    }
  });