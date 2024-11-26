import React, {useState} from 'react';
import {
  FlatList,
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
  const [inputText, setInputText] = useState('');
  const [alltodo, setAlltodo] = useState([])

  return (
    <View style={styles.container}>
      <Text>To Do List</Text>

      <View></View>

      <View>
   <FlatList
   style={{}}
   contentContainerStyle={{width:'100%'}}
   data={alltodo}
   keyExtractor={item=>item}
   renderItem={({item})=>(

<View>


</View>

   )
   }
   
   
   />
</View>

      <View style={styles.wrapInputBoxBtn}>
        <TextInput
          style={styles.inputBox}
          placeholder="Type your todo here"
          value={inputText}
          onChangeText={item => setInputText(item)}
        />

        <TouchableOpacity style={styles.submitBtn}>
          <Text style={styles.submitBtnPlus}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgray',
    flex: 1,
    position: 'relative',
  },
  wrapInputBoxBtn: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 'auto',
    paddingHorizontal: 10,
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitBtnPlus: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});
export default Mytodo5;
