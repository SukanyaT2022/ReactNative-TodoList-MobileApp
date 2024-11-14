import React, { useState } from 'react'
import {FlatList, Text, TextInput, TouchableOpacity, View} from 'react-native';

const WorkFlatlist = () => {
    const [textInput, setTextInput] = useState('');
  const [allItems, setAllItems] = useState<string[]>([]);
  // const inputFunc =(item:string)=>{
  // setTextInput(item)
  // }
  const allItemFunc = () => {
    setAllItems([...allItems, textInput]);
    setTextInput('');
  };

  return (
    <View
    style={{
      flex: 1,
      alignItems: 'center',
      borderColor: 'pink',
      borderWidth: 2,
      position: 'relative',
    }}>
    <Text style={{marginTop: 10}}>What will you do today? </Text>

    <View
      style={{
        borderColor: 'red',
        borderRadius: 5,
        borderWidth: 2,
        width: '80%',
        paddingHorizontal: 15,
        paddingVertical: 25,
      }}>
<FlatList
data={allItems}
keyExtractor={item=>item}
renderItem={({item})=>
     <View
    style={{
      borderColor: 'green',
      borderRadius: 2,
      borderWidth: 2,
      width: '75%',
      marginVertical: 10,
      padding: 8,
    }}>
    <Text>{item}</Text>
  </View>}



/>
      {/* {allItems.map((item, index) => (
        <View
          key={index}
          style={{
            borderColor: 'green',
            borderRadius: 2,
            borderWidth: 2,
            width: '75%',
            marginVertical: 10,
            padding: 8,
          }}>
          <Text>{item}</Text>
        </View>
      ))} */}
    </View>
    {/* enter message and submit section */}
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: 0,
      }}>
      <TextInput
        style={{
          borderColor: 'green',
          borderRadius: 2,
          borderWidth: 2,
          width: '75%',
          marginVertical: 10,
          padding: 8,
        }}
        value={textInput}
        onChangeText={item => setTextInput(item)}
        placeholder="Enter your task here"
      />
      <TouchableOpacity
        style={{
          borderColor: 'green',
          borderRadius: 2,
          borderWidth: 5,
          width: '15%',
        }}
        onPress={allItemFunc}>
        <Text>X</Text>
      </TouchableOpacity>
    </View>
  </View>
  )
}

export default WorkFlatlist