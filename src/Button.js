import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';

const Button = (props) => {
  const  { onPress, title } = props;
  if (Platform.OS === 'ios') {
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.button}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </TouchableOpacity>
    )
  }
  return (
      <TouchableNativeFeedback onPress={onPress}>
        <View style={styles.button}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </TouchableNativeFeedback>
  )
}

const styles = StyleSheet.create ({
  button: {
    backgroundColor: '#6666ff',
    width: 200,
    padding: 20,
    borderRadius: 8,
  },
  text : {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  }
})

export default Button;