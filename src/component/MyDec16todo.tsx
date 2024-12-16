import React, {useState} from 'react';
import {TextInput, View, Text, TouchableOpacity, FlatList} from 'react-native';

const MyDec16todo = () => {
  const [inputItem, setInputItem] = useState('');
  const [allItem, setAllItem] = useState<any[]>([]);
const addFunc =()=>{
setAllItem([...allItem,inputItem])
}
  return (
    <View style={{flex: 1}}>
      <View style={{flexDirection: 'row', marginTop: 30, margin: 'auto'}}>
        <TextInput
          style={{
            width: '70%',
            borderColor: 'orange',
            borderWidth: 2,
            padding: 5,
          }}
          value={inputItem}
          onChangeText={text => setInputItem(text)}
        />
        <TouchableOpacity
          style={{
            width: '20%',
            borderColor: 'orange',
            borderWidth: 2,
            padding: 5,
          }}
          onPress={()=>addFunc()}
          >
          <Text style={{textAlign: 'center'}}>add</Text>
        </TouchableOpacity>
      </View>

 
<FlatList
data={allItem}
keyExtractor={(item)=>item}
renderItem={({item})=>(
<View>
    <Text>{item}</Text>
</View>

)}
/>

    </View>
  );
};

export default MyDec16todo;
