
import { useState } from 'react';
import {
    StyleSheet,
    FlatList,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Alert,
  } from 'react-native';
const TodoObj = () => {
    const [inputItem, setInputItem] = useState('')
    const [holdAllItems, setholdAllItems] = useState<any[]>([])

    const addFunc=()=>{
if(inputItem !== ""){
    setholdAllItems([...holdAllItems, inputItem])
    setInputItem('')
}
    }


const removeFunc=(removeItem:string)=>{
   const updateItems = holdAllItems.filter((item)=>item !== removeItem) 
   setholdAllItems(updateItems)
}
  return (
    <View>
<View>
<FlatList
data={holdAllItems}
keyExtractor={(item)=>item}
renderItem={({item})=>(
<View>
<Text>{item}</Text>


<TouchableOpacity
onPress={()=>removeFunc(item)}
><Text>remove</Text>
</TouchableOpacity>


</View>

)

}


/>

</View>


<View>
    <TextInput 
    style={{backgroundColor:'grey'}} 
    placeholder='type to do'
    onChangeText={(text)=>setInputItem(text)}
    value={inputItem}
    />
    <TouchableOpacity
    onPress={addFunc}
    ><Text>Add</Text>
    </TouchableOpacity>
</View>
    </View>
  )
}

export default TodoObj