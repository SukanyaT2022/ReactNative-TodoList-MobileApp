import React, {useState} from 'react';
import {
  StyleSheet,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {styleCss} from './MyFlatlistStyle';
const MyFlatlist = () => {
  return (
    <View style={styles.container}>
      <Text style={styleCss.header}>Test Css external  file</Text>
    </View>
  )
}
const styles = StyleSheet.create({

container:{
backgroundColor:'lightblue',

},

})

export default MyFlatlist