import {View, Text, StyleSheet, TextInput, Button, ImageBackground} from 'react-native'
import React, {useState} from 'react'
import  background from "../img/LoginImg.jpg";



export default function AccountScreen(){
    return(
        <ImageBackground
        style={styles.imgb}
        source={background}
    >
        <View style={styles.container}>

                <Text style={styles.h1}>Registro Del Entrenador:</Text>
        <Text style={styles.label}>Nombre:</Text>
        <TextInput
            style={styles.input}
            placeholder="Ingresar tu nombre"
        />

        <Text style={styles.label}>Email:</Text>
            <TextInput
                style={styles.input}
                placeholder="Ingresar tu Email"
            />
            <Button style={styles.buttom} title='Registrarse'></Button>
    

        </View>
    </ImageBackground>   
    )
}

const styles = StyleSheet.create({
    imgb:{
        flex:1,
    },
    container: {
        flex:1,
        padding: 30,
    },
    label:{
        fontSize:16,
        fontWeight:"bold",
        marginBottom:8,
    },
    input:{
        height:40,
        borderColor:"gray",
        borderWidth:1,
        marginBottom:20,
        paddingHorizontal:8,
        backgroundColor:'#fff',
    
    },
    h1:{
        fontSize:20,
        paddingBottom:10,
        paddingTop:10,
        borderColor:"black",
        color:"white",
        backgroundColor:'#DC4141',
        textAlign:"center",
        borderRadius:20,
        marginBottom:20,
    },
  });