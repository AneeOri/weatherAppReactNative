import React from 'react';
import { View,Text,TouchableOpacity,StyleSheet } from 'react-native';
import {Colors} from '../Utils/Colors';


const Button = ({
    title='button',
    mode='solid',
    onPress,
}) => {
    const containerStyle =[
        styles.container,
        buttonStyle,
        {
            borderWidth: mode !== 'solid' ? 2 : 0,
            borderColor: Colors.BLACK,
            backgroundColor: mode !== 'solid' ? Colors.YELLOW_COLORS : Colors.BLACK,
        },
    ];
    const textStyle = [
        styles.buttonText,
        buttonStyle,
        {
            color: mode !== 'solid' ? Colors.BLACK : Colors.WHITE,
        },
    ];

    return(
        <TouchableOpacity
          activeOpacity={0.8}
          style={containerStyle}
          onPress={onPress}
        >
            <Text style={textStyle}>{title}</Text>
        </TouchableOpacity>
    )
    
}

export default Button;

const styles = StyleSheet.create({
    container: {
      width: DEVICE_WIDTH - 48,
      height: 52,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.BLACK,
      borderRadius: 12,
    },
    buttonText: {
      fontSize: wp(16),
      color: Colors.WHITE,
    },
  });