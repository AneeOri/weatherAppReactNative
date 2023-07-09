import React from "react";
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import { hp, wp } from "../Utils/ResponsiveLayout";
import {Colors} from '../Utils/Colors';
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Header = ({
    title='Header Title',
    onPressButton
}) => {
   <View style={styles.container}>
    <MaterialCommunityIcons
      name="keyboard-backspace"
      size={wp(26)}
      color={Colors.BLACK}
      onPress={onPressButton}
    />
     <Text style={styles.titleText}>{title}</Text>
   </View>

}

export default Header;

const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: hp(62),
      backgroundColor: Colors.YELLOW_COLOR,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: wp(24),
    },
    titleText: {
      fontSize: wp(16),
      color: Colors.BLACK,
      marginLeft: wp(12),
    },
  });