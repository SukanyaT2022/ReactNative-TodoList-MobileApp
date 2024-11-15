import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
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


  