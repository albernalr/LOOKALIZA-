import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Svg, { Path, G, Circle} from "react-native-svg"

export default function Prev({ fun1 }){

    const SvgComponent = () => (
        <Svg xmlns="http://www.w3.org/2000/svg" width={450} height={900}>
          <Path fill="#f1f1f1" d="M0 0h450v900H0z" />
          <Path
            fill="#ffeaa7"
            d="m0 478 12.5-2.8c12.5-2.9 37.5-8.5 62.5-7s50 10.1 75 12c25 1.8 50-3.2 75-1 25 2.1 50 11.5 75 11.5s50-9.4 75-12.7c25-3.3 50-.7 62.5.7L450 480V0H0Z"
          />
          <Path
            fill="#ffdc96"
            d="m0 424 12.5-3c12.5-3 37.5-9 62.5-9.2 25-.1 50 5.5 75 12.5s50 15.4 75 17.2c25 1.8 50-2.8 75-4.3s50 .1 75-2.9 50-10.6 62.5-14.5L450 416V0H0Z"
          />
          <Path
            fill="#ffce88"
            d="m0 394 12.5-4.8C25 384.3 50 374.7 75 369.8c25-4.8 50-4.8 75-7.1 25-2.4 50-7 75-4.7s50 11.7 75 17.7 50 8.6 75 7.6 50-5.6 62.5-8L450 373V0H0Z"
          />
          <Path
            fill="#ffbf7b"
            d="m0 297 12.5.3c12.5.4 37.5 1 62.5 1.5s50 .9 75 5c25 4.2 50 12.2 75 15.7s50 2.5 75 .2c25-2.4 50-6 75-1.7s50 16.7 62.5 22.8L450 347V0H0Z"
          />
          <Path
            fill="#ffaf71"
            d="m0 278 12.5-1.7c12.5-1.6 37.5-5 62.5-3.1 25 1.8 50 8.8 75 11 25 2.1 50-.5 75-.2s50 3.7 75 3c25-.7 50-5.3 75-13.2 25-7.8 50-18.8 62.5-24.3L450 244V0H0Z"
          />
          <Path
            fill="#ff9f6a"
            d="m0 203 12.5 4.5C25 212 50 221 75 222.5s50-4.5 75-10.7c25-6.1 50-12.5 75-15.3 25-2.8 50-2.2 75 5.5s50 22.3 75 25.5c25 3.2 50-5.2 62.5-9.3L450 214V0H0Z"
          />
          <Path
            fill="#ff8d66"
            d="m0 165 12.5-.5C25 164 50 163 75 160.3c25-2.6 50-7 75-3s50 16.4 75 22c25 5.7 50 4.7 75-3.5 25-8.1 50-23.5 75-31.5s50-8.6 62.5-9l12.5-.3V0H0Z"
          />
          <Path
            fill="#ff7b66"
            d="m0 112 12.5-4.3c12.5-4.4 37.5-13 62.5-16s50-.4 75 7.1 50 19.9 75 22.9 50-3.4 75-10c25-6.7 50-13.7 75-13.4 25 .4 50 8 62.5 11.9L450 114V0H0Z"
          />
          <Path
            fill="#ff6868"
            d="m0 58 12.5-.7c12.5-.6 37.5-2 62.5-4.5s50-6.1 75-3.6c25 2.5 50 11.1 75 15.5 25 4.3 50 4.3 75 3.1 25-1.1 50-3.5 75-4.1 25-.7 50 .3 62.5.8l12.5.5V0H0Z"
          />
        </Svg>
      )

    return (
        <View style={styles.mainContainer}>
            <StatusBar style="auto" />
            <View style={styles.svgCont}>
                <SvgComponent ></SvgComponent>
            </View>
            <Text style={styles.titulo} >Ingresar</Text>
            <Image style={styles.img1} source={require("./src/Logos/logo1.png")}/>
            <View style={styles.con1}>
                <TouchableOpacity onPress={fun1} style={styles.touch}>
                    <Icon  name="rightcircle" size={50} color="#000" style={styles.icono} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f1f1f1',
    },
    contFon: {
        top:"4%",
        height:"94%",
        width:"93%",
        position:"absolute",
    },
    fondo: {
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    titulo: {
        marginTop:500,
        fontWeight:"bold",
        fontSize: 55,
        color: "#000"
    },
    img1:{
        top:"15%",
        position:"absolute",
        resizeMode: 'stretch',
        width: 330,
        height: 170,
    },
    con1:{
        // backgroundColor:"red",
        width:150,
        alignItems:"center",
        height:100,
        justifyContent: 'center',
    },
    touch:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    svgCont:{
        width:'100%',
        height:'100%',
        position:"absolute",
        top: 0,
        backgroundColor:'#FFEAA7',
    },
  });