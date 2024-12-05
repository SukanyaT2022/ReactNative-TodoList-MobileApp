
import React, { useState } from 'react';
import {
    StyleSheet,
    FlatList,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Alert,
  } from 'react-native';
const Newtodo5 = () => {
    const [inputItem, setInputItem] = useState('')
    const [allItems, setAllItems] = useState<string[]>([])

    const addFunc=()=>{
//         if(inputItem == ""){
// return;
//         }
if (!inputItem.trim()) return;

      setAllItems([...allItems,inputItem])
      setInputItem('')
    }
    const removeFunc =(removeItem:string)=>{
       const updateItem = allItems.filter(item=>item != removeItem) 
       setAllItems(updateItem)
    }
  return (
    <View>
<Text>Welcome!</Text>
<Text>{inputItem}</Text>

<View>
{/* {
allItems.map((item, index)=>(
    <View key={index}>
<Text>{item}</Text>
</View>

))

} */}
<FlatList
data = {allItems}
keyExtractor={(item)=>item}
renderItem={({item})=>(
    <View>
    <Text>{item}</Text>
    <TouchableOpacity onPress={()=>removeFunc(item)}><Text>Remove</Text></TouchableOpacity>
    </View>
)}

/>
</View>

<View>
<TextInput
onChangeText={(e)=>setInputItem(e)}
value={inputItem}
style={{backgroundColor:'green'}}
/>
<TouchableOpacity onPress={addFunc}><Text>Add</Text></TouchableOpacity>
</View>
    </View>
  )
}

export default Newtodo5