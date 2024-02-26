import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Touchable, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import * as React from "react"
import Svg, { Path, G, Circle} from "react-native-svg"
import { LinearGradient } from 'expo-linear-gradient';

export default function Resp({fun4}){
    const SvgComponent = () => (
        <Svg xmlns="http://www.w3.org/2000/svg" width={450} height={900}>
          <Path fill="#FFEAA7" d="M0 0h450v900H0z" />
          <Path
            fill="#ffdc96"
            d="M450 382.5c-30.8-19.4-61.7-38.8-86.4-59.9-24.8-21-43.6-43.8-66.6-57.6-23-13.8-50.2-18.8-84.6-27.4-34.4-8.6-75.9-20.9-93.7-46.3-17.8-25.5-11.8-64.1-16.4-98.1C97.7 59.1 82.6 29.6 67.5 0H450Z"
          />
          <Path
            fill="#ffbe7b"
            d="M450 306c-24.7-15.5-49.3-31.1-69.2-47.9-19.8-16.9-34.8-35-53.2-46.1-18.4-11.1-40.2-15-67.7-21.9-27.5-6.9-60.7-16.8-74.9-37.1-14.2-20.3-9.5-51.2-13.2-78.5C168.1 47.3 156.1 23.6 144 0h306Z"
          />
          <Path
            fill="#ff9e6b"
            d="M450 229.5c-18.5-11.6-37-23.3-51.9-35.9-14.8-12.7-26.1-26.3-39.9-34.6-13.8-8.3-30.1-11.3-50.8-16.4-20.6-5.2-45.5-12.6-56.2-27.8-10.6-15.3-7.1-38.5-9.8-58.9-2.8-20.4-11.8-38.2-20.9-55.9H450Z"
          />
          <Path
            fill="#ff7b66"
            d="M450 153c-12.3-7.8-24.7-15.5-34.6-24-9.9-8.4-17.4-17.5-26.6-23-9.2-5.5-20.1-7.5-33.8-11-13.8-3.4-30.4-8.3-37.5-18.5-7.1-10.2-4.8-25.6-6.6-39.2C309.1 23.6 303 11.8 297 0h153Z"
          />
          <Path
            fill="#ff6868"
            d="M450 76.5c-6.2-3.9-12.3-7.8-17.3-12-4.9-4.2-8.7-8.7-13.3-11.5-4.6-2.8-10-3.8-16.9-5.5-6.9-1.7-15.2-4.2-18.8-9.2-3.5-5.1-2.3-12.9-3.2-19.7-1-6.8-4-12.7-7-18.6H450Z"
          />
          <Path
            fill="#ffdc96"
            d="M0 517.5c26.4 30.1 52.8 60.1 84.4 67.6 31.5 7.5 68.3-7.5 96.1 2.3 27.8 9.8 46.8 44.4 56.4 75.7 9.6 31.4 9.9 59.5 35 79.9 25.1 20.4 75 33.1 97.6 58 22.5 24.9 17.8 61.9 13 99H0Z"
          />
          <Path
            fill="#ffbe7b"
            d="M0 594c21.1 24 42.2 48.1 67.5 54.1 25.3 6 54.6-6 76.9 1.8 22.3 7.8 37.4 35.5 45.1 60.6 7.7 25.1 8 47.6 28 63.9 20.1 16.3 60 26.5 78.1 46.4 18 19.9 14.2 49.6 10.4 79.2H0Z"
          />
          <Path
            fill="#ff9e6b"
            d="M0 670.5c15.8 18 31.7 36.1 50.6 40.6 19 4.5 41-4.6 57.7 1.3 16.7 5.9 28.1 26.7 33.8 45.5 5.8 18.8 6 35.7 21.1 47.9 15 12.2 44.9 19.9 58.5 34.8 13.5 14.9 10.7 37.2 7.8 59.4H0Z"
          />
          <Path
            fill="#ff7b66"
            d="M0 747c10.6 12 21.1 24 33.8 27 12.6 3 27.3-3 38.4.9 11.1 4 18.7 17.8 22.6 30.3 3.8 12.6 3.9 23.8 14 32 10 8.2 30 13.2 39 23.2s7.1 24.8 5.2 39.6H0Z"
          />
          <Path
            fill="#ff6868"
            d="M0 823.5c5.3 6 10.6 12 16.9 13.5 6.3 1.5 13.6-1.5 19.2.5 5.6 1.9 9.4 8.9 11.3 15.1 1.9 6.3 2 11.9 7 16s15 6.6 19.5 11.6 3.6 12.4 2.6 19.8H0Z"
          />
        </Svg>
      )
    return (
        <View style={styles.mainContainer}>
            <StatusBar style="auto" />
            <View style={styles.svgCont}>
            <SvgComponent ></SvgComponent>
            </View>
            
            <TouchableOpacity onPress={fun4} style={styles.contBot} >
                <View style={styles.cont1}>
                    <Text style={styles.sub1}>Volver</Text>
                </View>
            </TouchableOpacity>



            <Text style={styles.titulo}>Menú</Text>
            {/* <Text style={styles.titulo2}>un respiro  </Text> */}
            {/* <TouchableOpacity onPress={fun4} style={styles.contBot} >
                <View style={styles.button}>
                    <Text style={styles.sub2}>Continuar</Text>  
                </View>
            </TouchableOpacity> */}
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        height:"100%",
        width:"100%",
        alignItems: 'center',
        justifyContent: 'start',
        textAlign:'center',
        backgroundColor:"transparent",
        position: 'absolute',
        top:0,
    },
    contFon: {
        top:"40%",
        height:"40%",
        width:"80%",
        position:"absolute",
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth:8,
    },
    fondo: {
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        position:'absolute',
    },
    titulo:{
        marginTop:50,
        fontWeight:'bold',
        fontSize:90,
        color:"black",
    },
    titulo2:{
        marginTop:0,
        fontWeight:'bold',
        fontSize:60,
        color:"black",
    },
    svgCont:{
        width:'100%',
        height:'100%',
        position:"absolute",
        top: 0,
        backgroundColor:'#FFEAA7',
        opacity:0.8,
    },
    sub1:{
        marginTop:'10%',
        color:'grey',
        fontSize:20,
    },
    sub2:{
        color:'grey',
        fontWeight:'bold',
        fontSize:20,
    },
    sub3:{
        marginTop:20,
        color:'grey',
        fontWeight:'bold',
        fontSize:14,
    },
    inp1:{
        width:"80%",
        padding:10,
        marginTop:20,
        borderRadius:20,
        backgroundColor:"#fff",
    },
    button:{
        width:'100%',
        height:50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:20,
        backgroundColor:'#fff',
    },
    contBot:{
        width:'20%',
        position:"absolute",
        left:'10%',
        top:'3%',
        backgroundColor:'red',
    },
    cont1:{
        width:'80%',
    },
})
