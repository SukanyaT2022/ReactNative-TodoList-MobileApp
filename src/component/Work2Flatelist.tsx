import React, {useState} from 'react';
import {
  StyleSheet,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const Work2Flatelist = () => {
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
    // wrap whole screen this view
    <View style={styles.container}>
      <Text style={styles.h1}>What will you do today? </Text>

      {/* start flatlist map section */}
      {/* <FlatList
          data={allItems}
          keyExtractor={item => item}
          renderItem={({item}) => (

            // main mapbox
<View style={styles.messageboxWrapper}>
    <View style={styles.leftsquareBox}></View>
<Text style={styles.textmiddle}>message</Text>
<View style={styles.circleDotright}></View>
</View>
          )}
          /> */}

      {/* end flat list map */}

      <FlatList
        data={allItems}
        keyExtractor={item => item}
        renderItem={({item}) => (
          // wrapper all squarebox text and circle
          <View
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              backgroundColor: 'white',
              borderRadius: 15,
              marginVertical: 15,
            }}>
            {/* wrapper square box on the left */}

            {/* square box inside */}
            <View
              style={{
                backgroundColor: 'green',
                borderRadius: '30%',
                height: 20,
                width: 20,
              }}>
              Y
            </View>
            {/* middle text */}
            <Text
              style={{
                width: '60%',
                paddingVertical: 10,
                fontSize: 16,
              }}>
              {item}
            </Text>
            {/* right circle  mainbox*/}
            <View
              style={{
                width: '10%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {/* only circle */}
              <View
                style={{
                  borderColor: 'green',
                  borderRadius: '100%',
                  borderWidth: 2,
                  width: 15,
                  height: 15,
                }}></View>
            </View>

            {/* above closing tag main box map */}
          </View>
        )}
      />

      {/* this view control input and submit button */}
      <View style={styles.wrapInputboxButoon}>
        <TextInput
          style={styles.inputbox}
          value={textInput}
          onChangeText={item => setTextInput(item)}
          placeholder="Enter your task here"
        />

        <TouchableOpacity style={styles.submitbtn} onPress={allItemFunc}>
          <Text style={{fontSize:20}}>X</Text>
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
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#dddddd',
    position: 'relative',
  },
  h1: {
    color: '#333',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
  },

  // inputbox and submit button
  wrapInputboxButoon: {
    backgroundColor: 'pink',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
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
  messageboxWrapper: {
    backgroundColor: 'green',
    width: '90%',

  },
  leftsquareBox: {},

  textmiddle: {},
  circleDotright: {},
});
export default Work2Flatelist;
