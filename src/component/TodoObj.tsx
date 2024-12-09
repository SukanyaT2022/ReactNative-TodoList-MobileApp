// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/AntDesign';
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
    const [star, setStar]=useState(false)
    const [searchItem, setSearchItem] = useState('')
    const toggleStarFunc=()=>{
      setStar(!star)
    }

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

//search 

const searchFunc =()=>{
  if (searchItem){
    const holdselectsearch = holdAllItems.filter((item)=>item == searchItem)
setholdAllItems(holdselectsearch)
  }

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

{/* const myIcon = <Icon name="rocket" size={30} color="#900" />; */}
<Icon name="staro" size={30} color={star? "red": "green"} onPress={toggleStarFunc} />
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

    <TextInput
       style={{backgroundColor:'green'}} 
       placeholder='search....'
       onChangeText={(text)=>setSearchItem(text)}
       value={searchItem}  
       
    />
    <TouchableOpacity
    onPress={searchFunc}
    ><Text>search</Text>
    </TouchableOpacity>
    
</View>
    </View>
  )
}

export default TodoObj