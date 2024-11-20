import React, {useState} from 'react';
import {
  StyleSheet,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
// import { styles } from './WorksFlatList_styles';

const Work2Flatelist = () => {
  const [textInput, setTextInput] = useState('');
  const [allItems, setAllItems] = useState<string[]>([]);
  const [holdSearchText, setHoldSearchText] = useState('');
  // const inputFunc =(item:string)=>{
  // setTextInput(item)
  // }
  const allItemFunc = () => {
    setAllItems([...allItems, textInput]);
    setTextInput('');
  };
  const searchTextFunc = () => {
    if (holdSearchText) {
      const searchResult = allItems.filter(item =>
        item.toLowerCase().includes(holdSearchText.toLowerCase()),
      );
      setAllItems(searchResult);
      setHoldSearchText('');
    }
  };
  return (
    // wrap whole screen this view
    <View style={styles.container}>
      <Text style={styles.h1}>What will you do today? </Text>

      {/* this view control input and submit button */}
      <View style={{width: '100%'}}>
        <TextInput
          style={styles.inputbox}
          value={holdSearchText}
          onChangeText={text => {
            setHoldSearchText(text);
          }}
          placeholder="search"
        />

        <TouchableOpacity style={{}} onPress={searchTextFunc}>
          <Text style={{fontSize: 20}}>search</Text>
        </TouchableOpacity>
      </View>

      {/* start flatlist map section */}

      <FlatList
        style={{width: '100%'}}
        contentContainerStyle={{width: '100%'}}
        data={allItems}
        keyExtractor={item => item}
        renderItem={({item}) => (
          // main mapbox

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
              alignItems: 'center',
              marginHorizontal: 20,
              backgroundColor: 'white',
              padding: 12,
              borderRadius: 8,
            }}>
            <View style={{flexDirection: 'row', gap: 15, alignItems: 'center'}}>
              <View
                style={{
                  height: 20,
                  aspectRatio: 1,
                  borderWidth: 1,
                  borderColor: 'green',
                }}></View>
              <Text style={{}}>{item}</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                setAllItems(
                  allItems.filter(data => {
                    return data !== item;
                  }),
                );
                // setAllItems(allItems.filter(data=>data!== item)
              }}
              style={{
                height: 30,
                aspectRatio: 1,
                borderWidth: 1,
                borderColor: 'green',
                borderRadius: '100%',
              }}>
              <Text>X</Text>
            </TouchableOpacity>
          </View>
          // <View style={styles.messageboxWrapper}>
          //   <View style={styles.leftsquareBox}></View>
          //   <Text style={styles.textmiddle}>{item}</Text>
          //   <View style={styles.circleDotright}></View>
          // </View>
        )}
      />

      {/* end flat list map */}

      {/* this view control input and submit button */}
      <View style={styles.wrapInputboxButoon}>
        <TextInput
          style={styles.inputbox}
          value={textInput}
          onChangeText={item => setTextInput(item)}
          placeholder="Enter your task here"
        />

        <TouchableOpacity style={styles.submitbtn} onPress={allItemFunc}>
          <Text style={{fontSize: 20}}>X</Text>
        </TouchableOpacity>
      </View>
      {/* above close tag for submit and input box */}

      {/* wrap whole screen close view below */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#dddddd',
    // position: 'relative',
    width: '100%',
  },
  h1: {
    color: '#333',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
  },

  //inputbox and submit button
  wrapInputboxButoon: {
    backgroundColor: 'pink',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    position: 'absolute',
    bottom: 0,
  },
  inputbox: {
    borderColor: 'green',
    borderRadius: 20,
    borderWidth: 3,
    width: '75%',
    marginVertical: 10,
    paddingVertical: 20,
    textAlign: 'center',
  },
  submitbtn: {
    borderColor: 'green',
    borderRadius: '100%',
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    fontSize: 20,
  },

  // map box square box text and circle
  // messageboxWrapper: {
  //   backgroundColor: 'blue',
  //   width: '100%',
  //   flexDirection: 'row',
  //   padding: 20,
  // },
  // leftsquareBox: {
  //   backgroundColor: 'green',
  //   borderRadius: '30%',
  //   height: 20,
  //   width: 20,

  // },

  // textmiddle: {
  //   width: '60%',
  //   paddingVertical: 10,
  //   fontSize: 16,
  //   backgroundColor:'pink',
  // },
  // circleDotright: {
  //   width: '10%',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   backgroundColor:'red',
  // },
});
export default Work2Flatelist;
