import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';

const Todo = () => {
  const [textInput, setTextInput] = useState('');
  // const inputFunc =(item:string)=>{
  // setTextInput(item)
  // }

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text style={{marginTop: 10}}>What will you do today? </Text>
      <TextInput
        style={{
          borderColor: 'green',
          borderRadius: 2,
          borderWidth: 2,
          width: '80%',
          marginVertical: 10,
          padding: 8,
        }}
        value={textInput}
        onChangeText={(item)=> setTextInput(item)}
        placeholder="Enter your task here"
      />
      <View
        style={{
          borderColor: 'green',
          borderRadius: 2,
          borderWidth: 5,
          flex:9.5,
        }}>
    
      </View>
    </View>
  );
};

export default Todo;
