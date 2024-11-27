
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
  interface User {
    name: string,
    age: number,
    level: string,
  }
const BasicJs = () => {

    // option 1take array as agument or parameter

const fruitArray=()=>{
    let hidfiltertext = 
    let mixfruite = ['mango', 'graph', 'orange']
    
    console.log(mixfruite)
    return 
}
fruitArray()




const userInfoFunc =({name, age, level}:User)=>{
// console.log(`My name is ${name}. My age is ${age}. My level is ${level}. `)
return {name,age,level}
}
let holdstudent = userInfoFunc({name:'kitty', age:4, level:'2a' })

  return (
    <View>
<Text>{holdstudent.name}</Text>
<Text>{holdstudent.age}</Text>
<Text>{holdstudent.level}</Text>
    </View>
  )
}

export default BasicJs