
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
      setAllItems([...allItems,inputItem])
      setInputItem('')
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