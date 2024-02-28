import { View, Text, SafeAreaView } from 'react-native'
import React, {useEffect,useState} from "react";
import {getPokemonsApi,getPokemonDetailsByUrlApi} from '../api/pokemon';
import PokemonFavList from '../components/PokemonFavList';
import { favPokemonArray } from '../components/PokemonCard';

export default function FavoriteScreen(){
    const [pokemons,setPokemons] = useState([]);
    const favPokemons = [18,9,10,20,4,3,15,7]
    var i = 0;
    console.log("pokemons->", pokemons);
    useEffect(() => {
        (async()=>{
            await loadsPokemons();
        })();
    },[]);
    const loadsPokemons = async () => {
        try{
            const response = await getPokemonsApi();
            const pokemonsArray = [];
            for await (const pokemon of response.results){
                const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);
                for (var i = 0; i < 19;i++){
                    if(pokemonDetails.id == favPokemons[i]){
                        pokemonsArray.push({
                            id: pokemonDetails.id,
                            name: pokemonDetails.name,
                            type: pokemonDetails.types[0].type.name,
                            order: pokemonDetails.order,
                            image: pokemonDetails.sprites.other['official-artwork'].front_default,
                        })
                    }
                }
            }
            setPokemons([...pokemons, ...pokemonsArray]);
        } catch(error){
            console.error(error);
        }
    }

    return (
        <SafeAreaView>
            <PokemonFavList pokemons = {pokemons} loadsPokemons={loadsPokemons}/>
        </SafeAreaView>
    )
}
