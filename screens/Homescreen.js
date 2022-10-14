import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Homescreen = () => {
  return (
    <View>
        <Text style={styles.text}>Homescreen</Text>
    </View>
  )
}

export default Homescreen;

const styles = StyleSheet.create({
    text: {
        color: 'black',
    }
})

