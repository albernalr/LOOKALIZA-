import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Touchable, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import * as React from "react"
import Svg, { Path, G, Circle} from "react-native-svg"
import { LinearGradient } from 'expo-linear-gradient';

export default function Prev(){
    const SvgComponent = () => (
        <Svg xmlns="http://www.w3.org/2000/svg" width={450} height={900}>
          <Path fill="#f1f1f1" d="M0 0h450v900H0z" />
          <Path
            fill="#ff6868"
            d="m0 763 5.8 6.3c5.9 6.4 17.5 19 29 4.9C46.3 760 57.7 719 69.2 711.5s23.1 18.5 34.6 42.7c11.5 24.1 22.9 46.5 34.4 45.6 11.5-.8 23.1-24.8 34.8-42 11.7-17.1 23.3-27.5 34.8-35 11.5-7.5 22.9-12.1 34.4-18.3 11.5-6.2 23.1-13.8 34.8-5.2 11.7 8.7 23.3 33.7 34.8 43 11.5 9.4 22.9 3 34.4-1.8s23.1-8.2 34.6-9.7 22.9-1.1 34.4 6.9 23.1 23.6 29 31.5l5.8 7.8V0H0Z"
          />
          <Path
            fill="#ff8d66"
            d="m0 548 5.8 7.5c5.9 7.5 17.5 22.5 29 36.5s22.9 27 34.4 23.8c11.5-3.1 23.1-22.5 34.6-29.6 11.5-7.2 22.9-2.2 34.4 9.8s23.1 31 34.8 43.2c11.7 12.1 23.3 17.5 34.8 12 11.5-5.5 22.9-21.9 34.4-44 11.5-22.2 23.1-50.2 34.8-55 11.7-4.9 23.3 13.5 34.8 34.1 11.5 20.7 22.9 43.7 34.4 48.5 11.5 4.9 23.1-8.5 34.6-8.6 11.5-.2 22.9 12.8 34.4 8.5 11.5-4.4 23.1-26 29-36.9L450 587V0H0Z"
          />
          <Path
            fill="#ffaf71"
            d="m0 508 5.8-2.5c5.9-2.5 17.5-7.5 29-23.8 11.5-16.4 22.9-44 34.4-49.7 11.5-5.7 23.1 10.7 34.6 13.7s22.9-7.4 34.4-3.5c11.5 3.8 23.1 21.8 34.8 25.3 11.7 3.5 23.3-7.5 34.8-10.3 11.5-2.9 22.9 2.5 34.4-6.5s23.1-32.4 34.8-25c11.7 7.3 23.3 45.3 34.8 50 11.5 4.6 22.9-24 34.4-33s23.1 1.6 34.6 16.8c11.5 15.2 22.9 34.8 34.4 33.3s23.1-24.1 29-35.5L450 446V0H0Z"
          />
          <Path
            fill="#ffce88"
            d="m0 279 5.8-7.5c5.9-7.5 17.5-22.5 29-20.3 11.5 2.1 22.9 21.5 34.4 25.3 11.5 3.8 23.1-7.8 34.6-17.7 11.5-9.8 22.9-17.8 34.4-16 11.5 1.9 23.1 13.5 34.8 29.5 11.7 16 23.3 36.4 34.8 44.7 11.5 8.3 22.9 4.7 34.4 6.5 11.5 1.8 23.1 9.2 34.8-1 11.7-10.2 23.3-37.8 34.8-52.5 11.5-14.7 22.9-16.3 34.4-9.8s23.1 21.1 34.6 32c11.5 10.8 22.9 17.8 34.4 18.1 11.5.4 23.1-6 29-9.1l5.8-3.2V0H0Z"
          />
          <Path
            fill="#ffeaa7"
            d="m0 133 5.8-6.7c5.9-6.6 17.5-20 29-5.1C46.3 136 57.7 179 69.2 179s23.1-43 34.6-51 22.9 19 34.4 19.8c11.5.9 23.1-24.5 34.8-37.5 11.7-13 23.3-13.6 34.8-7.6 11.5 6 22.9 18.6 34.4 30.6s23.1 23.4 34.8 20.9c11.7-2.5 23.3-18.9 34.8-29.5 11.5-10.7 22.9-15.7 34.4-19.5 11.5-3.9 23.1-6.5 34.6-2s22.9 16.1 34.4 26.8 23.1 20.3 29 25.2l5.8 4.8V0H0Z"
          />
        </Svg>
      )
    return (
        <View style={styles.mainContainer}>
            <Image style={styles.img1} source={require("./src/Logos/logo1.png")}/>
            <View style={styles.svgCont}>
                <SvgComponent ></SvgComponent>
            </View>
            <Text style={styles.titulo}>Creemos tu perfil</Text>
            <Text style={styles.sub1}>Ingresa tus datos</Text>
            <StatusBar style="auto" />
            <TextInput style={styles.inp1} placeholder='Sexo'></TextInput>
            <TextInput style={styles.inp1} placeholder='Nombre completo'></TextInput>
            <TextInput style={styles.inp1} placeholder='Edad'></TextInput>
            <TextInput style={styles.inp1} placeholder='Estado Civil'></TextInput>
            <TextInput style={styles.inp1} placeholder='Profesión'></TextInput>
            <TextInput style={styles.inp1} placeholder='Número de hijos'></TextInput>
            <TextInput style={styles.inp1} placeholder='Nivel de educación'></TextInput>
            <TextInput style={styles.inp1} placeholder='Hobbies o pasatiempos'></TextInput>
            <TextInput style={styles.inp1} placeholder='Desafios en la vida o laborales'></TextInput>
            <TextInput style={styles.inp1} placeholder='Redes sociales que usa'></TextInput>
            <TouchableOpacity  style={styles.contBot} >
                <LinearGradient style={styles.button} colors={['#FFEAA7','#FFBB64']} start={{x: 0,y: 0}}>
                    <Text style={styles.sub2}>Confirmar</Text>
                </LinearGradient>
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
        marginTop:0,
        fontWeight:'bold',
        fontSize:40,
        color:"black",
    },
    svgCont:{
        width:1080,
        height:"100%",
        position:"absolute",
        top: 0,
        left:0,
    },
    sub1:{
        color:'grey',
        fontSize:20,
        marginBottom:20,
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
        padding:1,
        marginTop:7,
        borderRadius:20,
        backgroundColor:"#fff",
        textAlign:"center",
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
    img1:{
        resizeMode: 'stretch',
        width: 300,
        height: 140,
        zIndex:1
    },
})
