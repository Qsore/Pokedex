import {View,Text,FlatList,StyleSheet, ActivityIndicator} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import PokemonCard from "./PokemonCard";
import { size } from "lodash";

export default function PokemonList(props){
    const { pokemons, loadsPokemons } = props;
    const loadMore = () => {
        loadsPokemons();
    };
    return(
        <FlatList
            data={pokemons}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(pokemon)=> String(pokemon.id)}
            renderItem={({item}) => <PokemonCard pokemon={item}/>}
            contentContainerStyle={styles.FlatListContentContainer}
            onEndReached={loadMore}
            onEndReachedThreshold={0.1}
            ListFooterComponent={
                <ActivityIndicator
                size="large"
                style={styles.spinner}
                color={'#AEAEAE'}
                />
            }
        />
    )
}
const styles = StyleSheet.create({
    FlatListContentContainer:{
        paddingHorizontal:5,
    },
    spinner:{
        marginTop:20,
        marginBottom:60
    }
})