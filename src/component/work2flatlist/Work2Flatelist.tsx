import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  StyleSheet,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
// import { styles } from './WorksFlatList_styles';

interface ActivityItem {
  id: string;
  activity: string;
  priority: number;

}

const Work2Flatelist = () => {
  const [textInput, setTextInput] = useState('');

  const [rocketstatus, setRocketSataus] = useState(false);

  // const [allItem, setAllItem] = useState([])

  let [listOfActivities, setListOfActivities] = useState<ActivityItem[]>([
    {id: '1', activity: 'Washing my dresses', priority: 1},

  ]);

  console.log('These are my objects activities', listOfActivities);


  // submit text button to update all items
  const allItemFunc = () => {
    // if no text on inputText !textInput
    if (!textInput) {
      Alert.alert('Please enter an activity!');
      return;
    }
    if (textInput) {

    }

    setTextInput('');
  };

  // fiter from inputbox
  // const searchTextFunc = () => {
  //   if (holdSearchText) {
  //     setHoldSearchText('');
  //   }
  // };


  //important less important func
  const handleImportantFunc = (item: ActivityItem) => {
    console.log("This is item" + JSON.stringify(item))
    if (item.priority == 1) {
      Alert.alert(`${item.activity} is of Importance`)
    }

  }
const addrocketFunc =(id)=>{
  setRocketSataus(!rocketstatus)
}


  return (
    // wrap whole screen this view
    <View style={styles.container}>
      <Text style={styles.h1}>What will you do today? </Text>

      {/* this view control input and submit button */}
      <View style={{ width: '100%' }}>
        {/* <TextInput
          style={styles.inputbox}
          value={holdSearchText}
          onChangeText={text => {
            setHoldSearchText(text);
          }}
          placeholder="search"
        /> */}

        {/* <TouchableOpacity style={{}} onPress={searchTextFunc}>
          <Text style={{ fontSize: 20 }}>search</Text>
        </TouchableOpacity> */}
      </View>

      {/* start flatlist map section */}

      <FlatList
        style={{ width: '100%' }}
        contentContainerStyle={{ width: '100%' }}
        data={listOfActivities}
        keyExtractor={item => item.id}//line 25 to 3 is item
        renderItem={({ item }) => (
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
            <View style={{ flexDirection: 'row', gap: 15, alignItems: 'center' }}>
              <TouchableOpacity
                style={{
                  height: 20,
                  aspectRatio: 1,
                  borderWidth: 1,
                  borderColor: item.priority === 1 ? 'red' : item.priority === 2 ? 'orange' : 'green',

                }}
                onPress={() => handleImportantFunc(item)}

              />
              <Text style={{}}>{item.activity}</Text>
            </View>
            
            <TouchableOpacity
              onPress={

           
                () => {setListOfActivities(listOfActivities.filter(activity => activity.id != item.id))}


              }
              style={{
                height: 30,
                aspectRatio: 1,
                borderWidth: 1,
                borderColor: 'green',
                borderRadius: '100%',
              }}>
              <Text>X</Text>
            </TouchableOpacity>
            <Icon name="rocket" size={30} color={rocketstatus?"red":"green"} onPress={()=>addrocketFunc(item.id)} />
          </View>

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
          <Text style={{ fontSize: 20 }}>X</Text>
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


});
export default Work2Flatelist;

// {id: '2', activity: 'Eating dinner', priority: 3},
// {id: '3', activity: 'Brushing teeth', priority: 2},
// {id: '4', activity: 'Reading', priority: 1},
// {id: '5', activity: 'Walking the dog', priority: 3},
// {id: '6', activity: 'Gardening', priority: 2},
// {id: '7', activity: 'Cleaning the kitchen', priority: 1},
// {id: '8', activity: 'Mowing lawns', priority: 3},
// {id: '9', activity: 'Playing soccer', priority: 2},
// {id: '10', activity: 'Swimming', priority: 1, },


// const [holdSearchText, setHoldSearchText] = useState('');
// const [textInputID, setTextInputID] = useState('');
// const [textInputPriority, setTextInputPriority] = useState('');