import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Pokemons from "../screens/pokedex/pokemons";
import PokemonInfo from "../screens/PokemonInfo/PokemonInfo";

const Stack = createNativeStackNavigator()

const MainStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name = 'Pokemons'
                    component={Pokemons}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name = 'PokemonInfo'
                    component={PokemonInfo}
                    screenOptions={{headerShadowVisible: false}}
                    options={{headerShown: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainStack