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
  name: string;
  age: number;
  level: string;
}

interface petInfo {
  petName: string;
  petType: string;
  petAge: number;
}



const BasicJs = () => {
  const petShop = ({petName, petType, petAge}: petInfo) => {
    return {petName, petType, petAge};
  };
  let holdPetInfo = petShop({petName: 'candy', petType: 'dog', petAge: 1});

  

  const userInfoFunc = ({name, age, level}: User) => {
    // console.log(`My name is ${name}. My age is ${age}. My level is ${level}. `)
    return {name, age, level};
  };

  let holdstudent = userInfoFunc({name: 'kitty', age: 4, level: '2a'});

  return (
    <View>
      <Text>{holdstudent.name}</Text>
      <Text>{holdstudent.age}</Text>
      <Text>{holdstudent.level}</Text>

      <Text>{holdPetInfo.petName}</Text>
      <Text>{holdPetInfo.petType}</Text>
      <Text>{holdPetInfo.petAge}</Text>
    </View>
  );
};

export default BasicJs;


// option 1take array as agument or parameter

  // const fruitArray=()=>{

  //     let mixfruite = ['mango', 'graph', 'orange']

  //     console.log(mixfruite)
  //     return
  // }
  // fruitArray()

  // const petArrayFunc = () => {
  //   let petArray = ['monkey', 'bird', 'hippo'];
  //   console.log(petArray);
  //   return (
  //     <View>
  //       <Text>{petArray}</Text>
  //     </View>
  //   );
  // };
  // petArrayFunc();