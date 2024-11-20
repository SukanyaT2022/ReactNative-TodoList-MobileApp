import React, {useState} from 'react';
import {
  StyleSheet,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {todoStyle} from './Todo';
const Todo4 = () => {
  const [singleTextInput, setSingleTextInput] = useState('');
  const [allItems, setAllItems] = useState([]);

  const holdAllItemsFunc = () => {
    setAllItems([...allItems, singleTextInput]);
    setSingleTextInput('');
  };

  return (
    <View style={styles.container}>
      <Text style={todoStyle.header}>Test</Text>

      <View style={{width:'100%',  }}>
        <FlatList
          style={{width: '100%'}}
          contentContainerStyle={{width: '100%'}}
          data={allItems}
          keyExtractor={item => item}
          renderItem={({item}) => (
            <View
              style={{
                width: '90%',
                backgroundColor: 'green',
                padding:10,
                borderRadius:30,
                marginVertical:10,
                margin:'auto'

              }}
              >
              {/* above main box */}

              <Text>{item}</Text>

              {/* below close view tag  main box */}
            </View>
          )}
        />
      </View>

      <View style={styles.wrapInputSubmitbtn}>
        <TextInput
          style={styles.inputBox}
          value={singleTextInput}
          onChangeText={text => setSingleTextInput(text)}
        />
        <TouchableOpacity style={styles.submitBtn} onPress={holdAllItemsFunc}>
          <Text style={styles.plusSign}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D3D3D3',
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    position: 'relative',
  },
  wrapInputSubmitbtn: {
    borderColor: 'none',
    borderWidth: 2,
    width: '95%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 10,
  },
  inputBox: {
    borderColor: 'green',
    borderRadius: 40,
    borderWidth: 2,
    width: '85%',
    padding: 10,
  },
  submitBtn: {
    backgroundColor: 'green',
    borderRadius: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
  },
  plusSign: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default Todo4;
