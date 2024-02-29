import {ImageBackground,Text,Image} from 'react-native'
import {styles} from './styles'

export function Slide1(){
     const Imagem1 = require('../../assets/Moria.png')
     const titulo ='Tolkien Gate'
     const foto = require('../../assets/Tolkien Gate.png')
     return (
         <ImageBackground style={styles.container} source={Imagem1}>
             
             
             <Image style={styles.foto} source={foto}/>
         </ImageBackground>


     )
}