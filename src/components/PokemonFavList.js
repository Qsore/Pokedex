import {View,Text,FlatList,StyleSheet, ActivityIndicator} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import PokemonCard from "./PokemonCard";
import { size } from "lodash";

export default function PokemonFavList(props){
    const { pokemons, loadsPokemons } = props;
    return(
        <FlatList
            data={pokemons}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(pokemon)=> String(pokemon.id)}
            renderItem={({item}) => <PokemonCard pokemon={item}/>}
            contentContainerStyle={styles.FlatListContentContainer}
        />
    )
}
const styles = StyleSheet.create({
    FlatListContentContainer:{
        paddingHorizontal:5,
    },
})