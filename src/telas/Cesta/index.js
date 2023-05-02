import React from "react";
import {View,StyleSheet} from 'react-native'

import Topo from "./componentes/Topo";
import Detalhes from "./componentes/Detalhes"

export default function Cesta(){
    return (
    <View>
        <Topo/>
        <View style={estilos.cesta}>
            <Detalhes/>
        </View>
        
    </View>)
}
const estilos = StyleSheet.create({
    cesta:{
        paddingVertical: 8,
        paddingHorizontal:16
    }
})