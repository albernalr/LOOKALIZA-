import Prev from './Prev';
import Home from "./Home";
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react'
import Resp from './Resp';
import Menu from './Menu';
import Crear from './Crear';
import Olvide from './Olvide';
import NavMenu from './NavMenu';
import CorreoConf from './CorreoConf';
import CrearPerfil from './CrearPerfil';
import Notificaciones from './Notificaciones';

export default function Nav(){
  const [val, setValor] = useState(1);
//   const [val2, setValor2] = useState(0);
  
  const pasarHome = () => {
    setValor(1);
  }
  const pasar1= () => {
    setValor(2);
  }
  const pasarNotificacion= () => {
    setValor(9);
  }
  const pasarCrear= () => {
    setValor(5);
  }
    const pasarOlvide= () => {
    setValor(6);
  }
    const pasarCorreoConf= () => {
    setValor(7);
  }
  const pasarCrearPerfil= () => {
    setValor(8);
  }
  const pasar2= () => {
    setValor(3);
  }
  const pasar4= () => {
    setValor(4);
  }



//   const Navbar= () => {
//     setValor2(1);
//   }
    return (
        <View style={styles.container}>
            {val === 0 && <Prev fun1={pasarHome} />}
            {val === 1 && <Home fun2={pasarNotificacion} fun21={pasarCrear} fun22={pasarOlvide}/>}
            {val === 2 && <Resp fun3={pasar2} />}
            {val === 3 && <Menu fun4={pasar4} />}
            {val === 5 && <Crear volverHome={pasarHome} fun33={pasarCrearPerfil} />}
            {val === 6 && <Olvide volverHome={pasarHome} fun23={pasarCorreoConf}/>}
            {val === 7 && <CorreoConf volverHome={pasarHome} />}
            {val === 8 && <CrearPerfil />}
            {val === 9 && <Notificaciones fun41={pasar1} />}
            {/* {val2 === 1 && <NavMenu fun4={Navbar} />} */}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });