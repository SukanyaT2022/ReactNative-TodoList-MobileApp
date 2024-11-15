import React, {useState} from 'react';
import {FlatList, Text, TextInput, TouchableOpacity, View} from 'react-native';

const WorkFlatlist = () => {
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
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        borderColor: 'pink',
        borderWidth: 2,
        position: 'relative',
        backgroundColor:'lightblue'
      }}>
      <Text style={{marginTop: 10}}>What will you do today? </Text>


      <View
      style={{
        borderColor: 'red',
        borderRadius: 5,
        borderWidth: 2,
        width: '100%',

      }}
      >
        <FlatList
          data={allItems}
          keyExtractor={item => item}
          renderItem={({item}) => (
            // wrapper all squarebox text and circle
            <View
              style={{
                flex: 0.5,
                display:'flex',
                flexDirection:'row',
                justifyContent:'center',
                backgroundColor: 'red',
              }}>
              {/* wrapper square box on the left */}

              <View
                 style={{
                   flex: 1,
                   borderRightColor: 'red',
                   borderWidth: 2,
             
                 }}
                >
                {/* square box inside */}
                <View
                  style={{
                    backgroundColor: 'green',
                    borderRadius: '30%',
                    height: 20,
                    width: 20,
                    margin: 'auto',
                  }}>
                  Y
                </View>
                {/* middle text */}
                <Text
                  style={{
                    flex: 0.8,
                    backgroundColor: 'purple',
                    paddingVertical: 10,
                    fontSize: 16,
                  }}>
                  {item}
                </Text>
                {/* right circle  mainbox*/}
                <View
                  style={{
                    flex: 0.1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'grey',
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
            </View>
          )}
        />
       




      {/* enter message and submit section */}
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',
          position: 'absolute',
          bottom: 0,
          backgroundColor:'purple',
        }}>
        <TextInput
          style={{
            borderColor: 'green',
            borderRadius: 2,
            borderWidth: 2,
            width: '75%',
            marginVertical: 10,
            padding: 8,
          }}
          value={textInput}
          onChangeText={item => setTextInput(item)}
          placeholder="Enter your task here"
        />
        <TouchableOpacity
          style={{
            borderColor: 'green',
            borderRadius: 2,
            borderWidth: 5,
            width: '15%',
          }}
          onPress={allItemFunc}>
          <Text>X</Text>
        </TouchableOpacity>
      </View>



      </View> 
    </View>
    </View>
  );
};

export default WorkFlatlist;
