import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Touchable, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import * as React from "react"
import Svg, { Path, G, Circle} from "react-native-svg"
import { LinearGradient } from 'expo-linear-gradient';

export default function Prev({volverHome, fun23}){
    const SvgComponent = () => (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080">
          <Path fill="#FF6868" d="M0 0h1920v1080H0z" />
          <Path
            fill="#FF9968"
            d="m0 211.766 32-1.721c32-1.721 96-5.163 160-5.696 64-.534 128 1.841 192 2.108 64 .267 128-1.574 192-24.547 64-22.974 128-67.08 192-70.805 64-3.725 128 32.931 192 21.697 64-11.235 128-70.361 192-73.714 64-3.353 128 49.067 192 62.123 64 13.057 128-13.249 192-37.598 64-24.348 128-46.74 192-35.182 64 11.559 128 57.066 160 79.82l32 22.754V1080H0Z"
          />
          <Path
            fill="#FFC177"
            d="m0 279.715 32-.015c32-.015 96-.046 160 21.065 64 21.11 128 63.361 192 86.053s128 25.825 192-.013 128-80.647 192-103.231c64-22.584 128-12.943 192 8.19 64 21.132 128 53.755 192 76.834 64 23.078 128 36.612 192 27.711 64-8.902 128-40.238 192-72.121 64-31.884 128-64.314 192-82.169 64-17.855 128-21.134 160-22.774l32-1.64V1080H0Z"
          />
          <Path
            fill="#FFDE9B"
            d="m0 562.019 32-7.947c32-7.948 96-23.844 160-40.366 64-16.521 128-33.669 192-38.353 64-4.684 128 3.094 192 8.612 64 5.518 128 8.774 192 27.869 64 19.094 128 54.027 192 77.816s128 36.435 192 44.021c64 7.585 128 10.11 192-4.497s128-46.345 192-71.597c64-25.252 128-44.017 192-60.395s128-30.369 160-37.364l32-6.996V1080H0Z"
          />
          <Path
            fill="#FFF1CB"
            d="m0 834.819 32 4.147c32 4.147 96 12.442 160 16.883 64 4.441 128 5.03 192-7.28s128-37.518 192-53.259 128-22.015 192-34.835 128-32.185 192-16.889c64 15.296 128 65.253 192 86.086 64 20.834 128 12.543 192 10.186 64-2.357 128 1.22 192-2.93s128-16.026 192-45.655c64-29.628 128-77.008 160-100.698l32-23.69V1080H0Z"
          />
          <Path
            fill="#F1F1F1"
            d="m0 1059.068 32-16.021c32-16.021 96-48.063 160-75.309 64-27.246 128-49.697 192-50.16 64-.462 128 21.063 192 51.058s128 68.46 192 70.768c64 2.307 128-31.545 192-51.492 64-19.948 128-25.992 192-42.054s128-42.142 192-55.491c64-13.349 128-13.967 192-2.224 64 11.742 128 35.845 192 68.511 64 32.667 128 73.896 160 94.511l32 20.615v8.22H0Z"
          />
        </Svg>
      )
    return (
        <View style={styles.mainContainer}>
            <View style={styles.svgCont}>
                <SvgComponent ></SvgComponent>
            </View>
            <Text style={styles.titulo}>¿Olvidaste tu contraseña?</Text>
            <Text style={styles.sub1}>Te ayudamos a reestablecerla</Text>
            <StatusBar style="auto" />
            <TextInput style={styles.inp1} placeholder='Correo'></TextInput>
            <TouchableOpacity onPress={fun23} style={styles.contBot} >
                <LinearGradient style={styles.button} colors={['#FF6868','#FFBB64','#FFEAA7']} start={{x: 0,y: 0}}>
                    <Text style={styles.sub2}>Confirmar</Text>
                </LinearGradient>
            </TouchableOpacity>
            <Text style={styles.sub5}>¿Recordaste tu contraseña? </Text>
            <TouchableOpacity onPress={volverHome} style={styles.prueb1} >
                <Text style={styles.sub4}> Volver </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        height:"100%",
        width:"100%",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign:'center',
        backgroundColor:"#f1f1f1",
    },
    contFon: {
        top:"16%",
        height:"20%",
        width:"80%",
        position:"absolute",
        alignItems: 'center',
        justifyContent: 'center',
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
        width:'90%',
        marginTop:0,
        fontWeight:'bold',
        fontSize:55,
        color:"black",
    },
    svgCont:{
        width:1080,
        height:"50%",
        backgroundColor:"red",
        position:"absolute",
        top: 0,
    },
    sub1:{
        color:'grey',
        fontSize:20,
    },
    sub2:{
        color:'#000',
        fontWeight:'bold',
        fontSize:20,
    },
    sub3:{
        marginTop:20,
        color:'grey',
        fontWeight:'bold',
        fontSize:14,
    },
    sub4:{
        marginTop:5,
        color:'#000',
        fontWeight:'bold',
        fontSize:20,
    },
    sub5:{
        marginTop:60,
        color:'grey',
        fontWeight:'bold',
        fontSize:14,
    },
    sub6:{
        marginTop:10,
        color:'grey',
        fontWeight:'bold',
        fontSize:14,
    },
    
    inp1:{
        width:"80%",
        padding:10,
        marginTop:150,
        borderRadius:20,
        backgroundColor:"#fff",
    },
    button:{
        width:'100%',
        height:50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:20,
    },
    contBot:{
        marginTop:30,
        width:'50%',
        borderRadius:10,
    },
})
