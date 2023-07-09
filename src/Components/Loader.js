import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import {Colors} from '../Utils/Colors';
import { hp,wp } from "../Utils/ResponsiveLayout";

const Loader = ({
    title='Fetching Weather'
}) => {
    return (
   <View style={styles.container}>
     <ActivityIndicator size="large" color={Colors.YELLOW_COLOR}/>
     <Text style={styles.loaderText}>{title}</Text>
   </View>
    );
};

export default Loader;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.95)',
      ...StyleSheet.absoluteFillObject,
    },
    loaderText: {
      fontSize: wp(22),
      fontFamily: FONTS.POPPINS_BOLD,
      color: COLORS.WHITE,
      marginTop: hp(16),
    },
  });