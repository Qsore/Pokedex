import {View, Text,Image, TouchableWithoutFeedback,StyleSheet,Alert} from "react-native"
import React, {useEffect,useState} from "react";
import getColorByPokemonType from "../utils/getColorByPokemonType";
import { capitalize } from "lodash";
import FlashMessage from "react-native-flash-message";
import FavoriteScreen from "../screens/FavoriteScreen";


export const favPokemonArray = [];
export default function PokemonCard(props){

    const { pokemon } = props;
    const pokemonColor = getColorByPokemonType(pokemon.type);
    const bgStyles = {backgroundColor: pokemonColor, ...styles.bgStyles}
    const goToPokemon = () =>{
    }
    return(
        <TouchableWithoutFeedback onPress={goToPokemon}>
            <View style={styles.card}>
                    <View style={styles.spacing}>
                        <View style={bgStyles}>
                            <Text style ={styles.number}>{`#0${pokemon.order}`.padStart(3,0)}</Text>
                            <Text style ={styles.name}>{capitalize(pokemon.name)}</Text>
                            <Image source={{uri: pokemon.image}} style={styles.image}/>
                        </View>
                    </View>
            </View>
        </TouchableWithoutFeedback>

    )
}
const styles = StyleSheet.create({
card:{
    flex:1,
    height:130
},
spacing:{
    flex:1,
    padding:5
},
bgStyles:{
    flex: 1,
    borderRadius:15,
    padding:10
},
image:{
    position: "absolute",
    bottom:2,
    right:2,
    width:90,
    height:90
},
number: {
    position: "absolute",
    right: 10,
    top: 10,
    color: "#fff",
    fontSize: 11
},
name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 10
}
})