import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Touchable, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/Ionicons';
import Icon4 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon5 from 'react-native-vector-icons/AntDesign';
import * as React from "react"
import Svg, { Path, G, Circle} from "react-native-svg"
import { LinearGradient } from 'expo-linear-gradient';

export default function Resp({fun4}){
    const SvgComponent = () => (
        <Svg xmlns="http://www.w3.org/2000/svg" width={450} height={900}>
          <Path fill="#f1f1f1" d="M0 0h450v900H0z" />
          <Path
            fill="#ffeaa7"
            d="m0 268 6.3 11.5c6.4 11.5 19 34.5 31.5 57s24.9 44.5 37.4 42.7c12.5-1.9 25.1-27.5 37.6-48.5s24.9-37.4 37.4-30.4 25.1 37.4 37.6 57.5c12.5 20.2 24.9 30.2 37.4 23.2s25.1-31 37.6-42.7c12.5-11.6 24.9-11 37.4-10.1 12.5.8 25.1 1.8 37.6 11.8s24.9 29 37.4 19.7c12.5-9.4 25.1-47 37.6-65.9 12.5-18.8 24.9-18.8 31-18.8h6.2v626H0Z"
          />
          <Path
            fill="#ffda94"
            d="m0 344 6.3 6.3c6.4 6.4 19 19 31.5 34.4C50.3 400 62.7 418 75.2 412.8c12.5-5.1 25.1-33.5 37.6-30.5s24.9 37.4 37.4 43.4 25.1-16.4 37.6-13.5c12.5 2.8 24.9 30.8 37.4 35.8 12.5 5 25.1-13 37.6-25.3 12.5-12.4 24.9-19 37.4-24.7 12.5-5.7 25.1-10.3 37.6-.3s24.9 34.6 37.4 44.8c12.5 10.2 25.1 5.8 37.6-5.3 12.5-11.2 24.9-29.2 31-38.2l6.2-9v511H0Z"
          />
          <Path
            fill="#ffc984"
            d="m0 441 6.3 7.7c6.4 7.6 19 23 31.5 24.3 12.5 1.3 24.9-11.3 37.4-16 12.5-4.7 25.1-1.3 37.6 12.3 12.5 13.7 24.9 37.7 37.4 37.2s25.1-25.5 37.6-39.7c12.5-14.1 24.9-17.5 37.4-19.8 12.5-2.3 25.1-3.7 37.6-6.7s24.9-7.6 37.4-6.1 25.1 9.1 37.6 8.8c12.5-.3 24.9-8.7 37.4-1.7 12.5 7 25.1 29.4 37.6 45.2 12.5 15.8 24.9 25.2 31 29.8l6.2 4.7v380H0Z"
          />
          <Path
            fill="#ffb876"
            d="m0 523 6.3 6.3c6.4 6.4 19 19 31.5 14s24.9-27.6 37.4-25.6 25.1 28.6 37.6 45.1 24.9 22.9 37.4 9.7 25.1-45.8 37.6-58c12.5-12.2 24.9-3.8 37.4.3 12.5 4.2 25.1 4.2 37.6 14.2s24.9 30 37.4 37.3c12.5 7.4 25.1 2 37.6 2s24.9 5.4 37.4 8.7c12.5 3.3 25.1 4.7 37.6-1.2 12.5-5.8 24.9-18.8 31-25.3l6.2-6.5v357H0Z"
          />
          <Path
            fill="#ffa66d"
            d="m0 638 6.3-5.8c6.4-5.9 19-17.5 31.5-21.4 12.5-3.8 24.9.2 37.4 3.2s25.1 5 37.6 10.8c12.5 5.9 24.9 15.5 37.4 14.9 12.5-.7 25.1-11.7 37.6-17.4 12.5-5.6 24.9-6 37.4-12.8 12.5-6.8 25.1-20.2 37.6-18 12.5 2.2 24.9 19.8 37.4 30.7 12.5 10.8 25.1 14.8 37.6 5.5 12.5-9.4 24.9-32 37.4-31.4 12.5.7 25.1 24.7 37.6 33.4 12.5 8.6 24.9 2 31-1.4l6.2-3.3v276H0Z"
          />
          <Path
            fill="#ff9267"
            d="m0 704 6.3-8.2c6.4-8.1 19-24.5 31.5-29.1 12.5-4.7 24.9 2.3 37.4 5.6 12.5 3.4 25.1 3 37.6-2.6 12.5-5.7 24.9-16.7 37.4-18.5 12.5-1.9 25.1 5.5 37.6 8.8 12.5 3.3 24.9 2.7 37.4-2s25.1-13.3 37.6-15.8 24.9 1.1 37.4 11.6 25.1 27.9 37.6 31.2c12.5 3.3 24.9-7.3 37.4-17.2 12.5-9.8 25.1-18.8 37.6-14.3s24.9 22.5 31 31.5l6.2 9v207H0Z"
          />
          <Path
            fill="#ff7e65"
            d="m0 773 6.3-2.2c6.4-2.1 19-6.5 31.5-8.5s24.9-1.6 37.4-1.1 25.1 1.1 37.6-7.2 24.9-25.7 37.4-29.5c12.5-3.8 25.1 5.8 37.6 9.2 12.5 3.3 24.9.3 37.4-3.5 12.5-3.9 25.1-8.5 37.6-8.9 12.5-.3 24.9 3.7 37.4 3.4 12.5-.4 25.1-5 37.6.8s24.9 22.2 37.4 31.8c12.5 9.7 25.1 12.7 37.6 8 12.5-4.6 24.9-17 31-23.1l6.2-6.2v165H0Z"
          />
          <Path
            fill="#ff6868"
            d="m0 783 6.3.2c6.4.1 19 .5 31.5 3.5s24.9 8.6 37.4 15.8c12.5 7.2 25.1 15.8 37.6 15.8s24.9-8.6 37.4-13.6 25.1-6.4 37.6-7.2c12.5-.8 24.9-1.2 37.4 4.2 12.5 5.3 25.1 16.3 37.6 16 12.5-.4 24.9-12 37.4-16.4 12.5-4.3 25.1-1.3 37.6 5.2s24.9 16.5 37.4 13.3c12.5-3.1 25.1-19.5 37.6-23.6 12.5-4.2 24.9 3.8 31 7.8l6.2 4v93H0Z"
          />
        </Svg>
      )
    return (
        <View style={styles.mainContainer}>
            <StatusBar style="auto" />
            <View style={styles.svgCont}>
            <SvgComponent ></SvgComponent>
            </View>
            {/* <TouchableOpacity onPress={fun4} style={styles.contBot} >
                <View style={styles.cont1}>
                    <Text style={styles.sub1}>Volver</Text>
                </View>
            </TouchableOpacity> */}
            <Text style={styles.titulo}>Menú</Text>

            <View style={styles.cont2}>
                <View style={styles.cont3}>
                    <TouchableOpacity style={styles.touch}>
                        <Icon  name="leaf" size={50} color="#000" style={styles.icono} />
                        <Text style={styles.sub1}>Self-Care</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.cont3}>
                    <TouchableOpacity style={styles.touch}>
                        <Icon2  name="journal-whills" size={50} color="#000" style={styles.icono} />
                        <Text style={styles.sub1}>Journal</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.cont3}>
                    <TouchableOpacity style={styles.touch}>
                        <Icon3  name="person" size={50} color="#000" style={styles.icono} />
                        <Text style={styles.sub1}>Perfil</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.cont3}>
                    <TouchableOpacity style={styles.touch}>
                        <Icon4  name="virtual-reality" size={50} color="#000" style={styles.icono} />
                        <Text style={styles.sub1}>VR</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.cont3}>
                    <TouchableOpacity style={styles.touch}>
                        <Icon5  name="setting" size={50} color="#000" style={styles.icono} />
                        <Text style={styles.sub1}>Settings</Text>
                    </TouchableOpacity>
                </View>

            </View>
            

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
        backgroundColor:"red",
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
    },
    sub1:{
        marginTop:'10%',
        color:'#000',
        fontSize:15,
        fontWeight:'bold',
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
    },
    cont1:{
        width:'80%',
    },
    cont2:{
        marginTop:20,
        width:'80%',
        height: '60%',
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between',
        alignContent:'center',
        // backgroundColor:'red',
    },
    cont3:{
        width:'50%',
        height: '33%',
        // backgroundColor:"blue",
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    touch:{
        height:120,
        width:120,
        // borderWidth:3,
        borderRadius:30,
        // borderColor:"#000",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#fff',

    },
})
