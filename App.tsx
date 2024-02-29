import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import{Slide1} from './src/screens/Slide1'

const bodyText = 'Tolkien Gate'

export default function App() {
  return (

     <Slide1/>
    
    
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
