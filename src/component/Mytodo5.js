import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
const Mytodo5 = () => {
  return (
    <View style={styles.container}>
      <Text>Test todo 5</Text>

      <View></View>

      {/* <View>
    
</View> */}

      <View style={styles.wrapInputBoxBtn}>
        <TextInput style={styles.inputBox} placeholder="Type your todo here" />
        <TouchableOpacity style={styles.submitBtn} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    backgroundColor: 'lightgray',
    flex: 1,
    position: 'relative',
  },
  wrapInputBoxBtn: {
    position: 'absolute',
    bottom: 0,
    left:15,
    width: '100%',
    flexDirection: 'row',
justifyContent:"space-between",

  
  },
  inputBox: {
    fontSize: 16,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 5,
    textAlign: 'center',
    width: '80%',
  },

  submitBtn: {
    fontWeight: '700',
    width: 60,
    height: 60,
    backgroundColor: 'lightgreen',
    borderRadius: '100%',
  },
});
export default Mytodo5;
