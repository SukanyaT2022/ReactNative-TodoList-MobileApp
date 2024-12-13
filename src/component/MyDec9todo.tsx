import Icon from 'react-native-vector-icons/AntDesign';
import {
  StyleSheet,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import { useState } from 'react';

const MyDec9todo = () => {
const [inputItem, setInputItem] = useState('')
const [allItems, setAllItems] = useState<string[]>([])
const [colorStar, setColorStar] = useState('')
const [searchItems, setSearchItems] = useState('')

const starFunc=(item:string)=>{
setColorStar(item)
}

const addFunc =()=>{
setAllItems([...allItems,inputItem])
setInputItem('')
}
const removeFunc =(removeTask:string)=>{
let updateItems = allItems.filter((item)=>item !== removeTask )
setAllItems(updateItems)
}
const searchTextFunc=(searchItems:string)=>{
setAllItems(allItems.filter((item)=>item == searchItems))
setSearchItems('')
}

  return (
    <View style={{flex:1,  position:'relative'}}>
    <View style={{flexDirection:'row'}}>
    <TextInput 
    style={{borderColor:'green', borderWidth:5, padding:10, width:'80%'}} 
    placeholder='type to do here'
    onChangeText={(text)=>setInputItem(text)}
    value={inputItem}
    />
    <TouchableOpacity 
    style={{borderColor:'green', borderWidth:5, padding:10, width:'20%'}}>
    <Text onPress={addFunc}>Add</Text>
    </TouchableOpacity>
    </View>

{/* start flat list  */}
<View>
<FlatList
data={allItems}
keyExtractor={(item)=>item}
renderItem={({item})=>(

<View style={{flex:1, flexDirection:'row',alignItems:'center', justifyContent: 'space-between',width:'80%',margin:'auto',borderColor:'orange', borderWidth:2, padding:5, marginVertical:15}}>

<Icon name="staro" size={20} color={colorStar == item? "red": "green"}  
onPress={()=>starFunc(item)}/>
  <Text>{item}</Text>
<TouchableOpacity onPress={()=>removeFunc(item)}><Text>Remove</Text></TouchableOpacity>
  </View>
)
}
/>
</View>
{/* end flatlist */}

{/* search box */}
<View style={{flex:1, flexDirection:'row',alignItems:'center', justifyContent: 'space-between',borderColor:'orange', borderWidth:2, padding:10, marginVertical:15, position:'absolute', bottom:0, left:20, right:20}}>
<TextInput style={{}} onChangeText={(text)=>setSearchItems(text)} value={searchItems} placeholder='Search Task'/>
<TouchableOpacity onPress={()=>searchTextFunc(searchItems)} ><Text>Search</Text></TouchableOpacity>
</View>

    </View>

  )
}

export default MyDec9todo