import { View,Text,SafeAreaView} from "react-native"
import React, { useEffect,useState } from 'react;'
import { getPokemonApi } from '../api/pokemon'

export default function Pokedex(){
    useEffect(()=>{
        (async () =>{
            await loadsPokemons();
        })();
    },[]);
    const loadsPokemons = async () => {
        try{
            const reponse = await getPokemonsApi();
            console.log(error);
        } catch(error){
            console.error(error);
        }

    }
    return (
        <SafeAreaView>
            <Text>Pokedex</Text>
        </SafeAreaView>
    )
}