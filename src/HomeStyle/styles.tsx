import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer:{
    flexDirection:'column',
    borderColor: '#ffffff',
    borderWidth:2,
    justifyContent:'center',
    alignSelf:'center',
    marginBottom:60,
    paddingTop:20,
    paddingBottom:10,
    backgroundColor:'#4D4D4D'
  },
  inputContainer:{
    width:'80%',
    flexDirection:'column',
    alignItems:'center',
  },
  pressable: {
    backgroundColor: '#39f542ff',
    padding: 10,
    width: 30,
    height:30,
    borderRadius: 50,
    marginBottom: 10,
    marginTop: 40,
  }
});

export default styles